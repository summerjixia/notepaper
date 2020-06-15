<template>
  <div v-back class="content">
    <span class="H1logo">H1</span>
    <textarea v-textEvent:foo ref="textarea$1" v-model="title" class="textarea textTitle" rows="1"></textarea>
  </div>
</template>

<script>
import { backMainDirective } from "../../../util/addNotepaperMixin";
import { mapState } from "vuex";
export default {
  data() {
    return {
      title: "",
      params: this.$route.params
    };
  },
  directives: { ...backMainDirective },
  computed: { ...mapState(["openMenu"]) },
  methods: {}
};
</script>

<style scoped>
.content {
  width: 95%;
  height: 95%;
  margin: 0 auto;
  overflow: auto;
}

.H1logo {
  line-height: 40px;
  display: block;
  float: left;
  font-size: 20px;
  color: gray;
}

.imgel {
  width: 300px;
  height: 150px;
}

@media screen and (min-width: 376px) {
  .imgel {
    width: 700px;
    height: 350px;
  }
}
.textarea {
  width: 90%;
  border: none;
  font-size: 16px;
  outline: none;
  resize: none;
}

.textTitle {
  font-weight: bold;
  font-size: 23px;
}
</style>