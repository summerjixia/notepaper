<template>
  <div class="header">
    <img src="../../../svg/daohang.png" @click="openNav" alt />
    <div class="editTitle">
      <span >{{title}}</span>
      <img src="../../../svg/zhankai2.png" @click="showTitle"/>
    </div>
    <img src="../../../svg/sousuo.png" @click="openSearch" alt />
  </div>
</template>

<script>
export default {
  methods: {
    openNav(e) {
      e.stopPropagation();
      this.$emit("openLeftNav");
    },
    openSearch() {
      this.$router.push("/search");
    },
    showTitle() {
      this.$emit("showTitle");
    }
  },
  props: {
    title: {
      require: true
    }
  }
};
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in;
}

.editTitle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  width: 30px;
  margin-bottom: 6px;
}

span {
  font-size: 18px;
  color: rgb(107, 32, 42);
}
</style>