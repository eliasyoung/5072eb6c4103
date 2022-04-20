<template>
  <div class="login-panel-container">
    <i class="iconfont icon-Close cursor-pointer" @click="closePanel"></i>
    <div class="qrcode-container">
      <h1>扫码登录</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPanel",
  methods: {
    closePanel() {
      this.$emit("closePanel", false);
    },
  },
};
</script>
<style lang="less" scoped>
.login-panel-container {
  position: absolute;
  width: 350px;
  height: 530px;
  background: rgb(255, 255, 255);
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 8px 3px #8e8e8e;
  & > i {
    color: rgb(165, 165, 165);
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover {
      color: rgb(55, 55, 55);
    }
  }
  .qrcode-container {
    text-align: center;
    margin-top: 100px;
    h1 {
      font-size: 28px;
      line-height: 28px;
      font-weight: 400;
      color: rgb(55, 55, 55);
    }
  }
}
</style>
