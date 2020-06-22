<template>
  <canvas v-canvas id="canvas" :width="hw.width" :height="hw.height"></canvas>
</template>

<script>
import { canvasDirectives } from "_util/addNotepaperMixin";
export default {
  data() {
    return {
      hw: {
        width: document.documentElement.clientWidth - 10,
        height: document.documentElement.clientHeight - 10
      }
    };
  },
  directives: {
    canvas: canvasDirectives
  },
  props: {
    penSize: {
      require: true
    },
    colorpen: {
      require: true
    }
  }
};
</script>

<style scoped>
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
</style>