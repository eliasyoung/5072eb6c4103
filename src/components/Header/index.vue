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
      <el-avatar
        :size="30"
        :src="profile.avatarUrl"
        icon="el-icon-user"
        @click.native="showPanel"
      ></el-avatar>
      <span @click="showPanel"
        >{{ profile.nickname ? profile.nickname : "未登录"
        }}<i class="el-icon-arrow-down el-icon--right"></i
      ></span>
      <span>开通VIP</span>
      <div
        v-if="isLogin && isUserPanelShowed"
        class="user-panel-container b-radius-4 fs-13"
      >
        <div class="user-panel-content-container">
          <div class="flex w-100">
            <a>
              <h2>{{ profile.eventCount }}</h2>
              <p>动态</p>
            </a>
            <a>
              <h2>{{ profile.follows }}</h2>
              <p>关注</p>
            </a>
            <a>
              <h2>{{ profile.followeds }}</h2>
              <p>粉丝</p>
            </a>
          </div>
        </div>
        <div class="user-panel-content-container">
          <a>会员中心</a>
          <a>等级</a>
          <a>商城</a>
        </div>
        <div class="user-panel-content-container">
          <a>个人信息设置</a><a>绑定社交帐号</a>
        </div>
        <div class="user-panel-content-container">
          <a @click.prevent="logout">退出登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "HeaderComp",
  data() {
    return {
      isUserPanelShowed: false,
    };
  },
  methods: {
    showPanel() {
      if (!this.isLogin) this.$emit("showPanel", true);
      else this.isUserPanelShowed = !this.isUserPanelShowed;
    },
    logout() {
      this.$confirm("确定要登出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("user/logout").then(() => {
            this.isUserPanelShowed = false;
            this.$message({
              showClose: true,
              message: "成功登出",
              type: "success",
            });
          });
        })
        .catch(() => {});
    },
  },
  computed: {
    ...mapState("user", ["isLogin"]),
    ...mapGetters("user", ["profile"]),
  },
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
      height: 24px;
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
    position: relative;
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
    .user-panel-container {
      position: absolute;
      width: 280px;
      left: 50%;
      color: rgb(55, 55, 55);
      transform: translateX(-50%);
      background: #fff;
      box-shadow: 0px 2px 3px 0.1px #c5c5c5;
      z-index: 99;

      .user-panel-content-container {
        border-bottom: 1px solid rgb(237, 237, 237);
        padding: 6px 0;
        & > a {
          display: block;
          height: 38px;
          line-height: 38px;
          cursor: pointer;
          padding-left: 24px;
          &:hover {
            background: rgb(240, 241, 242);
          }
        }
        &:last-of-type {
          border-bottom: none;
        }
        & > div {
          margin: 15px 0;
          & > a {
            display: flex;
            width: 100%;
            height: auto;
            flex-flow: column nowrap;
            align-items: center;
            cursor: pointer;
            & > h2 {
              height: 36px;
              line-height: 36px;
              font-size: 20px;
            }
            & > p {
              height: 10px;
              line-height: 10px;
              font-size: 10px;
              font-weight: 100;
            }
          }
        }
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
