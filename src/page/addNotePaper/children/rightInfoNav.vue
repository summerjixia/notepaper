<template>
  <div class="sider_desc" :style="isSiderOpen?{'right':'0px'}:{'right':'-50%'}">
    <img src="../../../svg/list-close.png" @click="$emit('siderDescSC')" alt />
    <div>
      <span>上次更新时间：</span>
      <span>2020/05/14</span>
    </div>
    <div>
      <span>更新人：</span>
      <span>xxxx</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSiderOpen: {
      require: true
    }
  }
};
</script>

<style scoped>
.sider_desc {
  width: 50%;
  height: 90%;
  border-right: none;
  position: fixed;
  top: 0;
  right: -50%;
  background-color: #fff;
  z-index: 10;
  text-align: left;
  -webkit-box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.1);
  transition: right 0.5s ease-in;
}

.sider_desc div {
  margin-top: 30px;
  margin-left: 10px;
}
img{
  width:20px;
  height:20px;
  margin-top:10px;
}
</style>>
