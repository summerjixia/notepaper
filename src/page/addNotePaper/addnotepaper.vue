<template>
  <div>
    <div v-show="!isCanvas">
      <sub-header @siderDescSC="siderDescSC"></sub-header>
      <content-show :isCanvas="isCanvas"></content-show>
      <!-- <right-info-nav @siderDescSC="siderDescSC" :isSiderOpen="isSiderOpen"></right-info-nav> -->
      <bottom-nav @canvasShow="canvasShow"></bottom-nav>
    </div>
    <canvas-Graffiti :isShow="isCanvas" @canvasShow="canvasShow"></canvas-Graffiti>
  </div>
</template>

<script>

import canvasGraffiti from "./children/graffiti/canvasGraffiti";
import subHeader from "./children/subHeader";
import rightInfoNav from "./children/rightInfoNav";
import bottomNav from "./children/bottomNav";
import contentShow from "./children/contentShow";
export default {
  data() {
    return {
      isCanvas: false,
      isSiderOpen: false
    };
  },
  components: {
    canvasGraffiti,
    subHeader,
    rightInfoNav,
    bottomNav,
    contentShow
  },
  methods: {
    siderDescSC() {
      this.isSiderOpen = !this.isSiderOpen;
    },
    canvasShow(param) {
      this.isCanvas = param;
    }
  }
};
</script>

<style scoped>
</style>