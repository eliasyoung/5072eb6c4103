<template>
  <div class="login-panel-container">
    <i class="iconfont icon-Close cursor-pointer" @click="closePanel"></i>
    <div class="qrcode-container">
      <h1>扫码登录</h1>
      <div v-show="qrcodeImg" class="qrcode-img-container">
        <!-- <div v-if="!qrcodeValid && qrcodeImg" class="qrcode-mask"></div> -->
        <div
          v-if="!qrcodeValid && qrcodeImg"
          class="qrcode-mask flex fd-column-wrap jc-center ai-center"
        >
          <p class="fs-14">二维码已失效</p>
          <button @click.prevent="getQrcodeKey" class="cursor-pointer">
            点击刷新
          </button>
        </div>
        <img :src="qrcodeImg" />
        <p class="fs-13">
          使用<a href="https://music.163.com/#/download" class="cursor-pointer"
            >网易云音乐APP</a
          >扫码登录
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { reqGetQrcodeKey, reqGetQrcodeImg, reqCheckQrcodeStatus } from "@/api";

export default {
  name: "LoginPanel",
  data() {
    return {
      qrcodeKey: "",
      qrcodeUrl: "",
      qrcodeImg: "",
      qrcodeValid: false,
    };
  },
  methods: {
    closePanel() {
      this.$emit("closePanel", false);
    },
    async getQrcodeKey() {
      const res = await reqGetQrcodeKey();
      if (res.code == 200) {
        this.qrcodeKey = res.data.unikey;
        this.getQrcodeImg();
      }
    },
    async getQrcodeImg() {
      const res = await reqGetQrcodeImg(this.qrcodeKey);
      if (res.code == 200) {
        this.qrcodeUrl = res.data.qrurl;
        this.qrcodeImg = res.data.qrimg ? res.data.qrimg : "";
        this.qrcodeValid = true;
        this.checkQrcodeStatus(this.qrcodeKey);
      }
    },
    checkQrcodeStatus(key) {
      this.timer = setInterval(async () => {
        const res = await reqCheckQrcodeStatus(key);
        if (res.code == 801) {
          console.log("checking status");
        }
        if (res.code == 800) {
          console.log("qrimg has expired");
          this.qrcodeValid = false;
          clearInterval(this.timer);
        }
        if (res.code == 802) {
          console.log("waiting server confirm");
        }
        if (res.code == 803) {
          console.log("login succeed!");
          clearInterval(this.timer);
          this.checkLoginStatus();
          this.closePanel();
        }
      }, 3000);
    },
    checkLoginStatus() {
      this.$store.dispatch("user/checkIfLogin");
    },
  },
  created() {
    this.getQrcodeKey();
  },
  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
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
  box-shadow: 0px 0px 15px 3px #9e9e9e;
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
    .qrcode-img-container {
      margin-top: 20px;
      position: relative;
      .qrcode-mask {
        height: 173px;
        width: 173px;
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        z-index: 2;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        & > p {
          color: #fff;
        }
        & > button {
          width: 80px;
          height: 28px;
          background: rgb(12, 115, 194);
          color: #fff;
          border: none;
          border-radius: 4px;
          margin-top: 16px;
        }
      }
      img {
        height: 193px;
        width: 193px;
      }
      p {
        color: rgb(102, 102, 102);
        a {
          color: rgb(12, 115, 194);
        }
      }
    }
  }
}
</style>
