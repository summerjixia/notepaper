<template>
  <div class="proj_left_nav" :style="isShow">
    <div v-pre class="proj_name">
      <span>小新笔记</span>
    </div>
    <div class="proj_menu">
      <div v-for="(item,index) in menuList" :key="index">
        <van-row :style="{background:openMenu.catalogueId===item.catalogueId?'rgba(220,220,220,.1)':'none'}">
          <van-col span="3">
            <img :src="item.iconPath | imgData" />
          </van-col>
          <van-col
            span="8"
            @click="typeExposeAll({catalogueId:item.catalogueId,name:item.name,level:item.level},index)"
          >{{item.name}}</van-col>
          <van-col span="8" offset="5">
            <img
              :ref="'$'+(index)"
              class="exposeLogo"
              @click="changeExposeLogo(index,item)"
              src="../../../svg/zhankai.png"
            />
          </van-col>
        </van-row>
        <div v-if="item.subMenu" :style="{display:item.display}">
          <van-row
            v-for="(sub,subIndex) in item.subMenu"
            :style="{background:openMenu.catalogueId===sub.catalogueId?'rgba(220,220,220,.1)':'none'}"
            :key="subIndex"
            @click="typeExposeAll({catalogueId:sub.catalogueId,name:sub.name},(index+'-'+subIndex))"
          >{{sub.name}}</van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      // selectRow: 0
    };
  },
  computed: {
    isShow() {
      return this.navState ? { left: `0px` } : { left: `-200px` };
    },
    ...mapState(["openMenu"])
  },
  watch: {
    // menuList: function(old, newVal) {
    //   old.length !== newVal.length && (this.selectRow = 0);
    // }
  },
  filters: {
    imgData(value) {
      return require("../../../svg/" + value);
    }
  },
  methods: {
    typeExposeAll(param, index) {
      // this.selectRow = index;
      this.$emit("updateTitle", param);
    },
    changeExposeLogo(index, item) {
      this.$refs["$" + index][0].src =
        item.display === "none"
          ? require("../../../svg/zhankai1.png")
          : require("../../../svg/zhankai.png");

      item.display = item.display === "none" ? "block" : "none";
      // this.selectRow = index;
    }
  },
  props: {
    navState: {
      required: true
    },
    menuList: {
      type: Array,
      required: true,
      default: () => [],
      validator: value => {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.proj_left_nav {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  transition: left 0.3s ease-in;
  color: white;
}

.proj_name {
  height: 80px;
  line-height: 80px;
}
img {
  width: 20px;
  height: 20px;
}

.van-row {
  height: 40px;
  line-height: 40px;
}
</style>