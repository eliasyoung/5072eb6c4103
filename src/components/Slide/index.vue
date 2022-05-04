<template>
  <div
    class="slide-container"
    :class="{
      'slide-container__hover': isSlideButtonDown || isSlideHover,
      scale: hoverScale,
    }"
    @mouseenter="toggleIsSlideHover(true)"
    @mouseleave="toggleIsSlideHover(false)"
  >
    <div
      class="slide"
      @click="slideClickHandler($event)"
      :style="{ width: slideWidth + 'px' }"
    >
      <div class="slide-bar" :style="{ width: slideProgress }"></div>
    </div>
    <div
      class="slide-button"
      :style="{ left: slideProgress }"
      @mousedown="buttonDownHandler($event)"
    ></div>
  </div>
</template>
<script>
export default {
  name: "SlideComp",
  props: {
    slideProgress: {
      type: String,
      default: "0%",
    },
    slideWidth: {
      type: Number,
      default: 390,
    },
    hoverScale: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      dragStartX: 0,
      dragCurrentX: 0,
      slideLeftX: 0,
      slideCalWidth: 390,
      isSlideHover: false,
      isSlideButtonDown: false,
    };
  },
  methods: {
    toggleIsSlideHover(bool) {
      this.isSlideHover = bool;
    },
    buttonDownHandler(event) {
      this.isSlideButtonDown = true;
      this.dragStartX = event.clientX;
      this.slideLeftX =
        event.clientX -
        (this.slideWidth * this.slideProgress.replace("%", "")) / 100;
      this.$emit("onButtonDown");
      window.addEventListener("mouseup", this.dragEndHandler);
      window.addEventListener("mousemove", this.draggingHandler);
    },
    draggingHandler(event) {
      if (event.clientX < this.slideLeftX) this.dragCurrentX = this.slideLeftX;
      else if (event.clientX > this.slideLeftX + this.slideWidth)
        this.dragCurrentX = this.slideLeftX + this.slideWidth;
      else this.dragCurrentX = event.clientX;
      const progress = (this.dragCurrentX - this.slideLeftX) / this.slideWidth;
      this.$emit("onDragging", progress);
    },
    dragEndHandler() {
      this.isSlideButtonDown = false;
      this.$emit("onDragEnd");
      window.removeEventListener("mouseup", this.dragEndHandler);
      window.removeEventListener("mousemove", this.draggingHandler);
    },
    slideClickHandler(event) {
      const progress = event.offsetX / this.slideWidth;
      this.$emit("onSlideClick", progress);
    },
  },
};
</script>
<style lang="less" scoped>
.slide-container {
  position: relative;
  .slide {
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
      border-radius: 6px;
      .slide-bar {
        border-radius: 6px;
      }
    }
    &.scale {
      .slide {
        transform: scaleY(1.7);
      }
    }

    .slide-button {
      display: block;
    }
  }
}
</style>
