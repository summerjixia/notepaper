<template>
  <div>
    <div class="search_main">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @input="onInput"
        @cancel="onCancel"
      />
    </div>
    <notePaper v-for="(item,index) in list" :key="index" :index="index" :obj="item"></notePaper>
  </div>
</template>

<script>
import { getNotePaperByLike } from "../../../../data/api";
import notePaper from "../../../../components/notePaper";
export default {
  data() {
    return {
      value: "",
      list: []
    };
  },
  components: {
    notePaper
  },
  methods: {
    onInput() {
      getNotePaperByLike({ words: this.value }).then(result => {
        this.list = result.data;
      });
    },
    onCancel() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.search_main {
  background-color: rgba(255, 255, 255, 0.2);
}

.van-search__action {
  font-size: 16px;
}
</style>
