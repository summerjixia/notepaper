<template>
  <div class="subHeader">
    <img src="../../../svg/arrow-right.png" @click="backTo" alt />
    <img src="../../../svg/zhuyi.png" @click="msgOpen" alt />
  </div>
</template>

<script>
export default {
  methods: {
    backTo() {
      this.$router.back();
    },
    msgOpen() {
      this.$emit("siderDescSC");
    }
  }
};
</script>

<style scoped>
.subHeader {
  width: 98%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
}

img {
  width: 30px;
  height: 30px;
}
</style>