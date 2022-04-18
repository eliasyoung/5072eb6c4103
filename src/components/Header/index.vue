<template>
  <div class="nav-container">
    <div class="left-wrapper">
      <div class="logo-wrapper cursor-pointer">
        <i class="iconfont icon-logView"></i>
      </div>
      <div class="arrow-wrapper">
        <i class="iconfont icon-arrow-left-bold"></i>
        <i class="iconfont icon-arrow-right-bold"></i>
      </div>
      <el-input placeholder="搜索">
        <i slot="prefix" class="iconfont icon-search"></i>
      </el-input>
      <div class="tinggeshiqu cursor-pointer">
        <i class="iconfont icon-tinggeshiqu"></i>
      </div>
    </div>
    <i class="iconfont icon-message unread-message cursor-pointer"></i>
    <i class="iconfont icon-skin cursor-pointer"></i>
    <i class="iconfont icon-setting cursor-pointer"></i>
    <div class="user-wrapper">
      <el-avatar :size="30" icon="el-icon-user"></el-avatar>
      <span>未登录<i class="el-icon-arrow-down el-icon--right"></i></span>
      <span>开通VIP</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderComp",
};
</script>
<style lang="less" scoped>
.nav-container {
  text-align: left;
  background: rgb(236, 65, 65);
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
  .logo-wrapper {
    float: left;
    color: #fff;

    .icon-logView {
      font-size: 42px;
    }
  }
  .arrow-wrapper {
    // color: rgb(252, 220, 220);
    color: rgb(239, 101, 101);
    float: left;
    margin-left: 80px;
    i {
      font-size: 14px;
      padding: 4px;
      border-radius: 100%;
      background: rgb(225, 62, 62);
      &:nth-last-child(1) {
        margin-left: 8px;
      }
    }
  }
  .el-input {
    width: 160px;
    margin-left: 14px;
    float: left;
    i {
      margin-left: 6px;
      font-size: 14px;
      vertical-align: middle;
      color: rgb(252, 220, 220);
    }
    /deep/ .el-input__inner {
      font-size: 12px;
      border: 0;
      height: 30px;
      border-radius: 18px;
      background: rgb(225, 62, 62);
      color: #fff;
      &::placeholder {
        color: rgb(239, 101, 101);
      }
    }
  }
  .tinggeshiqu {
    float: left;
    margin-left: 8px;
    color: rgb(252, 220, 220);

    i {
      vertical-align: middle;
      background: rgb(225, 62, 62);
      padding: 8px;
      border-radius: 100%;
    }
  }
  .user-wrapper {
    float: right;
    font-size: 12px;
    color: rgb(252, 220, 220);

    .el-avatar {
      vertical-align: middle;
      cursor: pointer;
    }
    & > span {
      margin-left: 6px;
      cursor: pointer;
      transition: color 0.5s;
      &:hover {
        color: #fff;
      }
    }
  }
  & > i {
    color: rgb(252, 220, 220);
    font-size: 24px;
    float: right;
    margin-left: 14px;
    &:first-of-type {
      margin-right: 24px;
      position: relative;
      &.unread-message::after {
        content: "99+";
        text-align: center;
        position: absolute;
        font-weight: 500;
        background: #fff;
        min-width: 12px;
        padding: 1px 3px;
        line-height: 12px;
        font-size: 12px;
        top: 18px;
        left: 15px;
        border-radius: 15px;
        color: rgb(236, 65, 65);
      }
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
