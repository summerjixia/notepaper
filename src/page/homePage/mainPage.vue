<template>
  <div class="main_page">
    <left-nav @updateTitle="updateTitle" :navState="leftNavState" :menuList="menuList"></left-nav>
    <header-nav
      :style="{'transform':leftNavState?'translateX(200px)':'translateX(0px)'}"
      @openLeftNav="openLeftNav"
      :title="!!openMenu?openMenu.name:'笔记'"
      @showTitle="showTitle"
    ></header-nav>
    <notepaper-List
      :style="{'transform':leftNavState?'translateX(200px)':'translateX(0px)'}"
      :list="notePaperList"
    ></notepaper-List>
    <div class="addNotePaper">
      <img src="../../svg/biji.png" alt @click="add" />
    </div>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '18%' }"
      @close="closePopup"
    >
      <van-list>
        <van-field v-model="valueTitle" :placeholder="openMenu&&openMenu.level===1?'添加新标题':'更新标题'" />
        <van-field v-if="openMenu&&openMenu.level!==1" value="删除此分类" readonly @click="deleteMenu" />
      </van-list>
    </van-popup>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import headerNav from "./children/header";
import leftNav from "./children/leftNav";
import notepaperList from "./children/notepaperList";
import axios from "axios";
import {
  getNotePaperByAll,
  getNotePaperById,
  getMenu,
  saveMenu,
  updateMenu,
  deleteMenu
} from "../../data/api";
export default {
  data() {
    return {
      leftNavState: false,
      notePaperList: [],
      show: false,
      valueTitle: "",
      expose: []
    };
  },
  components: {
    headerNav,
    leftNav,
    notepaperList
  },
  created() {
    !this.openMenu && this.setOpenMenu({ id: 1, name: "笔记", level: 1 });
  },
  mounted() {
    this.getData();
  },
  computed: { ...mapState(["menuList", "openMenu"]) },
  methods: {
    ...mapMutations(["setMenuList", "setOpenMenu"]),
    openLeftNav() {
      this.leftNavState = !this.leftNavState;
    },
    updateTitle(param) {
      this.valueTitle = param.name;
      this.setOpenMenu(param);
      param.level === 1 &&
        getNotePaperByAll({ catalogueId: param.catalogueId }).then(result => {
          this.notePaperList = result.data;
        });
      param.level !== 1 &&
        getNotePaperById({ catalogueId: param.catalogueId }).then(result => {
          this.notePaperList = result.data;
        });
      this.leftNavState = false;
    },
    showTitle() {
      this.show = !this.show;
    },
    async closePopup() {
      if (!this.valueTitle) return;
      if (this.openMenu.level === 1) {
        await saveMenu({
          level: 2,
          name: this.valueTitle,
          upperLevel: this.openMenu.catalogueId
        });
      } else {
        await updateMenu({
          catalogueId: this.openMenu.catalogueId,
          name: this.valueTitle
        }).then(result => {
          this.openMenu.name = this.valueTitle;
        });
      }
      this.show = false;
      this.getData();
    },
    add() {
      if (this.openMenu.level === 1) {
        this.$toast("请选择或新增一个分类");
        return;
      }
      this.$router.push({ path: "/addnotepaper" });
    },
    deleteMenu() {
      deleteMenu({ id: this.openMenu.catalogueId }).then(() => {
        this.openMenu.level = 1;
        this.closePopup();
      });
    },
    async getData() {
      this.setMenuList();
      !!this.openMenu && this.openMenu.level !== 1
        ? await getNotePaperById({
            catalogueId: this.openMenu.catalogueId
          }).then(result => {
            this.notePaperList = result.data;
          })
        : await getNotePaperByAll({ catalogueId: 1 }).then(result => {
            this.notePaperList = result.data;
            // this.openMenu = { id: 1, name: "笔记", level: 1 }; //要改  默认查询
            this.setOpenMenu(this.menuList[0]);
          });
    }
  }
};
</script>

<style scoped>
.main_page {
  overflow-x: hidden;
}
.addNotePaper {
  display: block;
  line-height: 70px;
  text-align: center;
  height: 50px;
  width: 50px;
  background-color: rgba(255, 0, 0, 0.8);
  border-radius: 30px;
  position: fixed;
  bottom: 30px;
  right: 15px;
  color: white;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}
img {
  width: 30px;
  height: 30px;
}
</style>