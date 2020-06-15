<template>
  <div v-if="isShow">
    <img class="back" src="../../../../svg/guanbi.png" @click="back" alt />
    <canvas-content :colorpen="colorpen" :penSize="penSize"></canvas-content>
    <pencial-select :colorpen="colorpen" :penSize="penSize" @setColorpen="setColorpen" @setPenSize="setPenSize"></pencial-select>
  </div>
</template>

<script>
import canvasContent from "./children/canvas";
import pencialSelect from "./children/pencialSelect";
export default {
  data() {
    return {
      colorpen: "black",
      penSize: 0
    };
  },
  components: {
    canvasContent,
    pencialSelect
  },
  methods: {
    back() {
      this.$emit("canvasShow",false);
    },
    setColorpen(param) {
      this.colorpen = param;
    },
    setPenSize(param) {
      this.penSize = param;
    }
  },
  props: {
    isShow: {
      require: true,
      validator: () => {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.back {
  display: block;
  width: 20px;
  height: 20px;
  position: fixed;
  top: 10px;
  left: 4px;
  font-size: 40px;
  color: gray;
  font-weight: inherit;
}

.textarea {
  width: 90%;
  height: 30px;
  border: none;
  font-size: 16px;
  outline: none;
  resize: none;
}
</style>