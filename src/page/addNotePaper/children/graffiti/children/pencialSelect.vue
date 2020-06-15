<template>
  <div>
    <div class="pencil">
      <img
        src="../../../../../svg/pencil.png"
        @click="selectPen(0)"
        :class="{penStyle:penSize===0}"
        width="15"
        height="50"
        alt
      />
      <img
        src="../../../../../svg/pencil.png"
        @click="selectPen(1)"
        :class="{penStyle:penSize===1}"
        height="50"
        width="25"
        alt
      />
      <img
        src="../../../../../svg/Eraser.png"
        @click="selectPen(2)"
        :class="{penStyle:penSize===2}"
        height="50"
        width="30"
        alt
      />
    </div>
    <div class="color" @click="seleceColor">
      <div :style="{'background-color':colorpen}"></div>
    </div>
    <div class="allColor" :style="{opacity}">
      <div
        v-for="(item,index) in colorSize"
        :key="index"
        @click="colorSlec(index)"
        :style="{'background-color':item}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opacity: 0,
      colorSize: ["#DC143C", "#00FF7F", "#1E90FF", "#696969", "black"]
    };
  },
  methods: {
    selectPen(index) {
      this.$emit("setPenSize", index);
    },
    seleceColor() {
      this.opacity = this.opacity === 0 ? 1 : 0;
    },
    colorSlec(key) {
      this.$emit("setColorpen", this.colorSize[key]);
    }
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
.pencil {
  position: fixed;
  bottom: -10px;
  left: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
}

.penStyle {
  margin-top: -10px;
}

.pencil img {
  margin-left: 20px;
}

.color {
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 20px;
  margin-top: 10px;
  background-color: #fff;
  position: fixed;
  bottom: 10px;
  right: 50px;
}

.color div {
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 10px;
}

.allColor {
  position: fixed;
  top: 170px;
  right: 8px;
}

.allColor div {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  border: 1px solid gray;
}
</style>