<template>
  <div>
    <el-carousel height="200px" type="card">
      <el-carousel-item
        v-for="(banner, index) in bannersData"
        :key="index"
        @click.native="clickHandler(banner)"
      >
        <img :src="banner.imageUrl" />
        <div
          class="banner-type"
          :class="{
            blue: ['数字单曲', '广告', '专题'].includes(banner.typeTitle),
          }"
        >
          {{ banner.typeTitle }}
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- <info-card :name="'推荐歌单'" :infoData="recomPlaylist"> </info-card> -->
    <info-card :name="'推荐歌单'" :infoData="recomPlaylist">
      <template v-slot:default="{ groupedInfoData: dataList, contentMaxWidth }">
        <div
          class="outer-container"
          v-for="(list, dIndex) in dataList"
          :key="dIndex"
        >
          <div
            class="content-container"
            style="margin-top: 8px; margin-bottom: 8px"
            v-for="(item, index) in list"
            :key="item.id"
            :style="{
              maxWidth: contentMaxWidth,
            }"
          >
            <div
              class="img-container"
              :class="{
                'daily-recommend': index == 0 && dIndex == 0 && isLogin,
              }"
              :data-attr="index == 0 && dIndex == 0 && isLogin ? getDate : null"
            >
              <img class="cursor-pointer" :src="item.sPicUrl || item.picUrl" />
            </div>

            <p class="title cursor-pointer text-overflow-hidden">
              {{ item.name }}
            </p>
          </div>
        </div>
      </template>
    </info-card>
    <info-card :name="'最新音乐'" :infoData="newSongData" :numPerRow="4">
      <template v-slot:default="{ groupedInfoData: dataList }">
        <div class="flex">
          <div
            v-for="(list, index) in dataList"
            :key="index"
            class="flex fd-column-nowrap w-100 newsong-outer-container"
          >
            <div
              v-for="item in list"
              :key="item.id"
              class="newsong-container flex b-radius-6"
            >
              <img :src="item.picUrl" class="b-radius-6 cursor-pointer" />
              <div class="flex jc-se fd-column-wrap mg-l-10">
                <p class="title cursor-default fs-14">
                  {{ item.song.name
                  }}<span
                    style="color: rgb(55, 55, 55)"
                    class="fw-1"
                    v-if="item.song.alias[0]"
                    >（{{ item.song.alias[0] }}）</span
                  >
                </p>
                <ul class="author fs-12">
                  <li v-for="artist in item.song.artists" :key="artist.id">
                    <span class="cursor-pointer">{{ artist.name }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </template>
    </info-card>
    <info-card :name="'独家放送'" :infoData="privateContentData"> </info-card>
    <info-card :name="'推荐MV'" :infoData="mvData" :imgHeight="146.88">
    </info-card>
  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard";
import {
  reqGetDiscoverBanner,
  reqGetPersonalized,
  reqGetPersonalizedNewsong,
  reqGetPrivateContent,
  reqGetPersonalizedMv,
  reqGetRecomResource,
} from "@/api";
import { mapState } from "vuex";
import backgroundImg from "@/assets/images/background1.png";

export default {
  name: "PersonalRecom",
  data() {
    return {
      bannersData: [],
      privateContentData: [],
      mvData: [],
      personalizedData: [],
      newSongData: [],
      dailyRecomList: [],
    };
  },
  methods: {
    clickHandler(banner) {
      if (banner.typeTitle == "数字单曲" && banner.url) window.open(banner.url);
    },
    async getDiscoverBanner() {
      const res = await reqGetDiscoverBanner();
      if (res.code == 200) this.bannersData = res.banners;
    },
    async getPersonalized(limit) {
      const res = await reqGetPersonalized(limit);
      if (res.code == 200) this.personalizedData = res.result;
    },
    /* getPersonalizedNewsong(limit) {
      reqGetPersonalizedNewsong(limit)
        .then((res) => {
          console.log(res);
          if (res.code == 200) this.newSongData = res.result;
        })
        .catch((err) => console.log(err));
    }, */
    async getPersonalizedNewsong(limit) {
      const res = await reqGetPersonalizedNewsong(limit);
      if (res.code == 200) this.newSongData = res.result;
    },
    async getPrivateContent() {
      const res = await reqGetPrivateContent();
      if (res.code == 200) this.privateContentData = res.result;
    },
    async getPersonalizedMv() {
      const res = await reqGetPersonalizedMv();
      if (res.code == 200) this.mvData = res.result;
    },
    async getRecomResource() {
      if (this.isLogin) {
        const res = await reqGetRecomResource();
        if (res.code == 200) {
          const obj = { name: "每日歌曲推荐", picUrl: backgroundImg };
          res.recommend.unshift(obj);
          this.dailyRecomList = res.recommend;
        }
      }
    },
  },
  computed: {
    ...mapState("user", ["isLogin"]),
    recomPlaylist() {
      return this.isLogin ? this.dailyRecomList : this.personalizedData;
    },
    getDate() {
      return new Date().getDate();
    },
  },
  watch: {
    isLogin: {
      immediate: true,
      handler() {
        if (this.isLogin) {
          this.getRecomResource();
        } else {
          this.getPersonalized(10);
        }
      },
    },
  },
  created() {
    this.getDiscoverBanner();
    this.getPersonalizedNewsong(12);
    this.getPrivateContent();
    this.getPersonalizedMv();
  },

  components: {
    InfoCard,
  },
};
</script>
<style lang="less" scoped>
h2 {
  font-size: 12px;
}
.el-carousel {
  .el-carousel__item {
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
    }
    .banner-type {
      width: 68px;
      height: 22px;
      background: rgb(236, 65, 65);
      position: absolute;
      color: #fff;
      font-size: 12px;
      line-height: 22px;
      text-align: center;
      z-index: 99;
      bottom: 0;
      right: 0;
      border-top-left-radius: 8px;
      &.blue {
        background: rgb(74, 121, 204);
      }
    }
  }
  /deep/ .el-carousel__indicator {
    cursor: default;
    &:hover > button {
      opacity: 1;
      cursor: default;
    }
    &.is-active {
      & > button {
        background: rgb(236, 65, 65);
      }
    }
    &.el-carousel__indicator--horizontal {
      padding: 12px 5px;
    }
    .el-carousel__button {
      width: 6px;
      height: 6px;
      border-radius: 100%;
    }
  }
}
.newsong-outer-container {
  margin-right: 12px;
  overflow: hidden;
  flex-shrink: 1;
  min-width: 0;
  .newsong-container {
    width: 100%;
    margin: 8px 0;
    img {
      width: 48px;
      height: 48px;
    }
    &:hover {
      background-color: rgb(234, 234, 234);
    }
    .title {
      color: rgb(55, 55, 55);
    }
    & > div {
      overflow: hidden;
      p {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .author {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        li {
          display: inline-block;
          color: rgb(55, 55, 55);
          font-weight: 100;
          margin-right: 3px;
          span:hover {
            color: black;
          }
          &::after {
            content: "/";
            margin-left: 3px;
          }
          &:last-child::after {
            content: "";
          }
        }
      }
    }
  }
}

.img-container {
  &.daily-recommend {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background: no-repeat center/contain url("@/assets/images/calendar-w.png");
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 35%;
      height: 35%;
    }
    &::before {
      content: attr(data-attr);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      color: #fff;
      font-size: 30px;
      letter-spacing: -1px;
    }
  }
}
</style>
