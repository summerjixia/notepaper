<template>
  <div class="all_content" :style="allStyle">
    <note-paper
      v-for="(item,index) in list"
      :key="index"
      :index="index"
      :obj="item"
      @isTopList="isTopList"
      @deleteNote="deleteNote"
    ></note-paper>
  </div>
</template>

<script>
import notePaper from "../../../components/notePaper";
export default {
  data() {
    return {
      allStyle: {
        // height: document.body.clientHeight + "px",
        // width: document.body.clientWidth + "px"
      }
    };
  },
  components: {
    notePaper
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    isTopList(index, obj) {
      let item = this.list.splice(index, 1)[0];
      if (obj.isTop === 0) {
        //取消置顶
        this.list.push(item);
      } else {
        this.list.unshift(item);
      }
    },
    deleteNote(index) {
      this.list.splice(index, 1);
    }
  },
  props: {
    list: {
      require: true
    }
  }
};
</script>

<style scoped>
.all_content {
  transition: transform 0.3s ease-in;
}
</style>