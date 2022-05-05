<template>
  <div class="footer-container flex jc-sb ai-center" ref="container">
    <div class="left-container">
      <div class="song-info-container flex" v-if="detail">
        <div class="song-img-container">
          <img class="b-radius-4" :src="detail.al.picUrl" alt="" />
        </div>
        <div
          class="song-info-text-container flex fd-column-wrap jc-sa text-overflow-hidden"
        >
          <div class="title-love-container">
            <h1 class="title fs-15 fw-4 cursor-pointer text-overflow-hidden">
              {{ detail.name }}
            </h1>
            <i class="iconfont icon-xihuan-kongpt-wangyiicon"></i>
          </div>
          <p class="author text-overflow-hidden w-100">
            <span class="cursor-pointer">
              {{ detail.ar[0].name }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="player-container flex fd-column-nowrap ai-center">
      <div class="player-controller-container flex">
        <button><i class="iconfont icon-shunxubofang"></i></button>
        <button><i class="iconfont icon-shangyishou"></i></button>
        <button class="play" @click.prevent="togglePlayStatus">
          <i class="iconfont" :class="playButtonClass"></i>
        </button>
        <button><i class="iconfont icon-xiayishou"></i></button>
        <button><i class="iconfont icon-geci24"></i></button>
      </div>
      <div class="player-slide-container flex ai-center">
        <div class="current-time">{{ formatCurrentTime }}</div>
        <slide-comp
          :slideProgress="playProgress"
          @onSlideClick="playerSlideClickHandler"
          @onDragging="playerDraggingHandler"
          @onDragEnd="playerDragEndHandler"
        ></slide-comp>
        <div class="end-time">{{ formatEndTime || 0 }}</div>
      </div>
    </div>
    <div class="right-container">
      <div class="flex right-content-container" v-if="detail">
        <i class="iconfont icon-jingyunyinxiaopt-wangyiicon"></i>
        <div class="volume-control flex ai-center">
          <i
            class="iconfont"
            :class="
              isMuted ? 'icon-24gl-volumeDisable' : 'icon-24gl-volumeZero'
            "
            @click="togglePlayerMuted"
          ></i>
          <slide-comp
            :slideWidth="60"
            :slideProgress="volumePercentage"
            :hoverScale="false"
            @onSlideClick="volumeSlideClickHandler"
            @onDragging="volumeDraggingHandler"
          ></slide-comp>
        </div>
        <i class="iconfont icon-playlist"></i>
      </div>
    </div>
    <!-- <audio :src="songUrl" ref="player"></audio> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import { songDurationFormat } from "@/utils";
import SlideComp from "@/components/Slide";

export default {
  name: "FooterComp",
  data() {
    return {
      player: new Audio(),
      // "https://music.163.com/song/media/outer/url?id=64435.mp3"
      playButtonClass: "icon-playfill",
      timer: undefined,
      volume: 0.5,
      isMuted: false,
    };
  },
  watch: {
    songUrl: {
      immediate: true,
      handler(newV) {
        if (newV) this.player.src = newV;
      },
    },
    volume: {
      immediate: true,
      handler(newV) {
        this.player.volume = newV;
      },
    },
  },
  computed: {
    ...mapState("song", {
      songUrl: "currentSongUrl",
      detail: "currentSongDetail",
      currentTime: "currentPlayedTime",
    }),
    playProgress: {
      get() {
        if (this.detail) {
          const progress = ((this.currentTime * 1000) / this.detail.dt) * 100;
          return progress > 100 ? 100 + "%" : progress + "%";
        } else return "0%";
      },
      set(percentage) {
        if (this.detail) {
          this.$store.commit(
            "song/UPDATECURRENTPLAYEDTIME",
            (percentage * this.detail.dt) / 1000
          );
        }
      },
    },
    formatCurrentTime() {
      if (this.detail) {
        const time = Math.floor(this.currentTime * 100) * 10;
        return time > this.detail.dt
          ? songDurationFormat(this.detail.dt)
          : songDurationFormat(time);
      } else return songDurationFormat(0);
    },
    formatEndTime() {
      if (this.detail) return songDurationFormat(this.detail.dt);
      else return songDurationFormat(0);
    },
    volumePercentage: {
      get() {
        if (this.isMuted) return "0%";
        else return this.volume * 100 + "%";
      },
      set(value) {
        this.volume = value;
      },
    },
  },
  methods: {
    togglePlayStatus() {
      if (this.player.paused && this.songUrl) {
        this.playSong();
      } else {
        this.pauseSong();
      }
    },
    pauseSong() {
      if (!this.player.paused) this.player.pause();
      clearInterval(this.timer);
      this.playButtonClass = "icon-playfill";
    },
    playSong() {
      if (this.player.paused) this.player.play();
      this.getCurrentTime();
      this.playButtonClass = "icon-pause";
    },
    getCurrentTime() {
      this.timer = setInterval(() => {
        if (!this.isSlideButtonDown)
          this.$store.commit(
            "song/UPDATECURRENTPLAYEDTIME",
            this.player.currentTime
          );
        if (this.player.ended) {
          this.pauseSong();
        }
      }, 100);
    },
    playerSlideClickHandler(progress) {
      if (this.songUrl) {
        this.playProgress = progress;
        this.player.currentTime = this.currentTime;
      }
    },
    playerDraggingHandler(progress) {
      if (this.timer) clearInterval(this.timer);
      this.playProgress = progress;
    },
    playerDragEndHandler() {
      this.player.currentTime = this.currentTime;
      if (!this.player.paused) this.getCurrentTime();
    },
    togglePlayerMuted() {
      this.player.muted = !this.player.muted;
      this.isMuted = this.player.muted;
    },
    volumeSlideClickHandler(progress) {
      this.volume = progress;
    },
    volumeDraggingHandler(progress) {
      this.volume = progress;
    },
    // volumeDragEndHandler() {},
  },
  components: {
    SlideComp,
  },
  created() {
    this.$store.dispatch("song/checkMusicValid", 64435);
    // this.$store.dispatch("song/checkMusicValid", 185694);
  },
  mounted() {
    this.$refs.container.insertAdjacentElement("beforeend", this.player);
  },
};
</script>
<style lang="less" scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  z-index: 999;
  height: 75px;
  width: 100%;
  border-top: 1px solid rgb(225, 225, 225);
  background: rgb(246, 246, 248);
}

.left-container {
  overflow: hidden;
  margin-right: auto;
  flex: 1;
  .song-info-container {
    margin-left: 12px;
    overflow: hidden;
    .song-img-container {
      img {
        width: 50px;
        height: 50px;
        vertical-align: bottom;
      }
    }
    .song-info-text-container {
      // margin: 0 9px;
      margin-left: 12px;
      .title-love-container {
        .title {
          color: rgb(55, 55, 55);
          display: inline-block;
          max-width: 150px;
          &:hover {
            color: black;
          }
        }
        i {
          color: rgb(136, 136, 137);
          margin-left: 5px;
          font-size: 20px;
        }
      }

      .author {
        font-size: 12px;
        margin-top: 2px;
        span {
          color: rgb(55, 55, 55);
          // font-weight: 100;
          span:hover {
            color: black;
          }
          &:first-child::before {
            content: "";
            margin-left: 0;
          }
          &::before {
            content: "/";
            margin-left: 3px;
            cursor: default;
          }
          &:last-child::after {
            content: "";
          }
        }
      }
    }
  }
}

.player-container {
  flex: 1 0 auto;
  .player-controller-container {
    button {
      position: relative;
      border: none;
      color: rgb(47, 47, 47);
      background: none;
      cursor: pointer;
      margin: 0 18px;
      &:hover {
        color: rgb(237, 101, 102);
      }
      &.play {
        background: rgb(235, 235, 237);
        height: 38px;
        width: 38px;
        border-radius: 50%;
        i {
          font-size: 22px;
          &::before {
            background: rgb(235, 235, 237);
          }
          &.icon-playfill {
            margin-left: 1px;
          }
        }
        &:hover {
          background: rgb(221, 221, 222);
          color: rgb(47, 47, 47);
          & > i {
            &::before {
              background: rgb(221, 221, 222);
            }
          }
        }
      }
      .icon-geci24 {
        font-size: 24px;
      }
      .icon-danquxunhuan,
      .icon-shunxubofang,
      .icon-xunhuanbofang-wangyiicon,
      .icon-random-play {
        font-weight: 800;
      }
    }
  }
  .player-slide-container {
    position: relative;
    margin-top: 8px;
    .current-time,
    .end-time {
      font-size: 10px;
      transform: scale(0.8);
      color: rgb(153, 153, 155);
      margin: 0 6px;
      position: absolute;
      user-select: none;
    }
    .current-time {
      right: 100%;
    }
    .end-time {
      left: 100%;
    }
    .slide-container {
      position: relative;
      .slide {
        width: 390px;
        height: 3px;
        background: rgb(230, 230, 232);
        .slide-bar {
          height: 3px;
          background: rgb(255, 78, 78);
          width: 0%;
        }
      }
      .slide-button {
        left: 0%;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        display: none;
        background: rgb(255, 78, 78);
        user-select: none;
      }
      &.slide-container__hover {
        .slide {
          transform: scaleY(1.7);
          border-radius: 6px;
          .slide-bar {
            border-radius: 6px;
          }
        }

        .slide-button {
          display: block;
        }
      }
    }
  }
}

.right-container {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  i {
    font-size: 22px;
    color: rgb(55, 55, 55);
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
  .right-content-container {
    & > i {
      margin-right: 26px;
    }
  }
  .volume-control {
    margin-right: 26px;
  }
}
</style>
