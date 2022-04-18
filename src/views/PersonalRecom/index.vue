<template>
  <div>
    <el-carousel height="200px" type="card">
      <el-carousel-item
        v-for="(banner, index) in resData.banners"
        :key="index"
        @click.native="clickHandler(banner)"
      >
        <img :src="banner.imageUrl" />
        <div
          class="banner-type"
          :class="{ blue: banner.typeTitle == '数字单曲' }"
        >
          {{ banner.typeTitle }}
        </div>
      </el-carousel-item>
    </el-carousel>
    <info-card
      :name="privateContentData.name"
      :infoData="privateContentData.result"
    >
      <!-- <template v-slot:default="{ infoData }">
        {{ infoData }}
      </template> -->
    </info-card>
    <info-card :name="'推荐MV'" :infoData="mvData.result" :imgHeight="146.88">
    </info-card>
    <info-card :name="'推荐MV'" :infoData="mvData.result" :imgHeight="146.88">
    </info-card>
  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard";
export default {
  name: "PersonalRecom",
  data() {
    return {
      resData: {
        banners: [
          {
            imageUrl:
              "http://p1.music.126.net/vn3UbDG6JZtLdPdE8_pauA==/109951167290674189.jpg",
            targetId: 489858,
            adid: null,
            targetType: 10,
            titleColor: "red",
            typeTitle: "编辑推荐",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "489858",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4257076.-1235514487.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/7m3J5h2a80c47LYcNrnfHQ==/109951167292452163.jpg",
            targetId: 1935613660,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "热歌推荐",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1935613660",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4255186.-1235398150.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/C5f7_BSOdqxYIBub1UeBBA==/109951167290694074.jpg",
            targetId: 0,
            adid: null,
            targetType: 3000,
            titleColor: "blue",
            typeTitle: "数字单曲",
            url: "https://music.163.com/store/newalbum/detail?id=143198187",
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "0",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4257077.-1235578845.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/LFXEc5vdmRm9gXcOwpAR_w==/109951167290696734.jpg",
            targetId: 1937110809,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "新歌首发",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1937110809",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4257078.-1235574969.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/62CFmD6Eiw6ibnsRfXQRbA==/109951167292270585.jpg",
            targetId: 1937725093,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "新歌首发",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1937725093",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4260168.-1235392325.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/fGqtLysrEbEiWfHyOO52qQ==/109951167290363489.jpg",
            targetId: 1937573673,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "新歌首发",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1937573673",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4255187.-1235425926.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/btWWOWevUkMDyzIxbvNBCQ==/109951167291189222.jpg",
            targetId: 1937718268,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "新歌首发",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1937718268",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4293128.-1235425836.null",
          },
          {
            imageUrl:
              "http://p1.music.126.net/6RwvAluFafPeA63ln_CYNg==/109951167290717700.jpg",
            targetId: 1937647097,
            adid: null,
            targetType: 1,
            titleColor: "red",
            typeTitle: "新歌首发",
            url: null,
            exclusive: false,
            monitorImpress: null,
            monitorClick: null,
            monitorType: null,
            monitorImpressList: null,
            monitorClickList: null,
            monitorBlackList: null,
            extMonitor: null,
            extMonitorInfo: null,
            adSource: null,
            adLocation: null,
            adDispatchJson: null,
            encodeId: "1937647097",
            program: null,
            event: null,
            video: null,
            song: null,
            scm: "1.music-homepage.homepage_banner_force.banner.4307096.-178402540.null",
          },
        ],
        code: 200,
      },
      privateContentData: {
        code: 200,
        name: "独家放送",
        result: [
          {
            id: 14514232,
            url: "",
            picUrl:
              "https://p2.music.126.net/ZfQoqzo0rTqe3sFKkDnGuw==/109951167211930348.jpg",
            sPicUrl:
              "https://p2.music.126.net/xLa1qgy1Mu3wRXFZ3GNLiA==/109951167211942016.jpg",
            type: 5,
            copywriter: "《超级面对面》第254期 keshi：我的音乐永远新鲜",
            name: "《超级面对面》第254期 keshi：我的音乐永远新鲜",
            alg: "featured",
          },
          {
            id: 14496631,
            url: "",
            picUrl:
              "https://p2.music.126.net/IVEDKgbd--myWBukXgreNg==/109951166983018052.jpg",
            sPicUrl:
              "https://p2.music.126.net/lx35fbctK2npbgPUwt2FXw==/109951166983009311.jpg",
            type: 5,
            copywriter:
              "《超级面对面》第252期 Alan Walker：和Walkers一起遨游宇宙",
            name: "《超级面对面》第252期 Alan Walker：和Walkers一起遨游宇宙",
            alg: "featured",
          },
          {
            id: 14484135,
            url: "",
            picUrl:
              "https://p2.music.126.net/_q264UzyPqfepTgXfJcdig==/109951166780766424.jpg",
            sPicUrl:
              "https://p2.music.126.net/SV9dP8-3C2zhlu13bi7zhQ==/109951166780782508.jpg",
            type: 5,
            copywriter: "《超级面对面》第250期 孙燕姿：在对的时间听对的歌",
            name: "《超级面对面》第250期 孙燕姿：在对的时间听对的歌",
            alg: "featured",
          },
        ],
      },
      mvData: {
        code: 200,
        category: 3,
        result: [
          {
            id: 14520012,
            type: 5,
            name: "Best Lover",
            copywriter: "最新热门MV推荐",
            picUrl:
              "https://p2.music.126.net/-Cj57Vd_GYe9vZ_xCPd1pw==/109951167295503712.jpg",
            canDislike: true,
            trackNumberUpdateTime: null,
            duration: 159000,
            playCount: 17775,
            subed: false,
            artists: [
              {
                id: 15022053,
                name: "88rising",
              },
              {
                id: 12457112,
                name: "BIBI",
              },
            ],
            artistName: "88rising",
            artistId: 15022053,
            alg: "hot_server",
          },
          {
            id: 14521042,
            type: 5,
            name: "Verdi: Sempre libera (Live On The Ed Sullivan Show, May 22, 1960)",
            copywriter: "最新热门MV推荐",
            picUrl:
              "https://p2.music.126.net/cTPEXtDalNGRJhc6uiQWnA==/109951167306828469.jpg",
            canDislike: true,
            trackNumberUpdateTime: null,
            duration: 105000,
            playCount: 453,
            subed: false,
            artists: [
              {
                id: 47370,
                name: "Anna Moffo",
              },
            ],
            artistName: "Anna Moffo",
            artistId: 47370,
            alg: "hot_server",
          },
          {
            id: 14521002,
            type: 5,
            name: "要牛要马不要羊",
            copywriter: "最新热门MV推荐",
            picUrl:
              "https://p2.music.126.net/9t3ySlph2BTuLo4QzZANmg==/109951167299413008.jpg",
            canDislike: true,
            trackNumberUpdateTime: null,
            duration: 82000,
            playCount: 820,
            subed: false,
            artists: [
              {
                id: 4513,
                name: "馒头",
              },
            ],
            artistName: "馒头",
            artistId: 4513,
            alg: "hot_server",
          },
          {
            id: 14520953,
            type: 5,
            name: "相信未来",
            copywriter: "最新热门MV推荐",
            picUrl:
              "https://p2.music.126.net/Z0-Ikkmo1RUE3FkieNcqNQ==/109951167296481660.jpg",
            canDislike: true,
            trackNumberUpdateTime: null,
            duration: 310000,
            playCount: 448,
            subed: false,
            artists: [
              {
                id: 50933101,
                name: "阿苏阿祥",
              },
            ],
            artistName: "阿苏阿祥",
            artistId: 50933101,
            alg: "hot_server",
          },
        ],
      },
    };
  },
  methods: {
    clickHandler(banner) {
      if (banner.typeTitle == "数字单曲" && banner.url) window.open(banner.url);
    },
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
  margin-top: 32px;
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
</style>
