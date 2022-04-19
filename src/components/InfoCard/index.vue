<template>
  <div class="info-card-container">
    <div class="header-container cursor-pointer">
      <h1>{{ name }}<i class="el-icon-arrow-right"></i></h1>
    </div>
    <slot :infoData="dataList">
      <div
        class="outer-container"
        v-for="(list, index) in dataList"
        :key="index"
      >
        <div
          class="content-container"
          v-for="item in list"
          :key="item.id"
          :style="{
            maxWidth: contentMaxWidth,
          }"
        >
          <div class="img-container">
            <img
              class="cursor-pointer"
              :src="item.sPicUrl || item.picUrl"
              :style="{ height: imgHeight + 'px' }"
            />
          </div>

          <p class="title cursor-pointer">{{ item.name }}</p>
          <ul class="author">
            <li v-for="artist in item.artists" :key="artist.id">
              <span class="cursor-pointer">{{ artist.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "InfoCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    infoData: {
      type: Array,
      required: true,
    },
    imgHeight: {
      type: Number,
      required: false,
    },
    numPerRow: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  computed: {
    rowNumber() {
      return Math.ceil(this.infoData.length / this.numPerRow);
    },
    dataList() {
      const arr = [];
      for (let i = 0; i < this.rowNumber; i++) {
        arr.push(
          this.infoData.slice(i * this.numPerRow, (i + 1) * this.numPerRow)
        );
      }
      return arr;
    },
    contentMaxWidth() {
      return this.infoData.length <= this.numPerRow
        ? "100%"
        : (1100 - (this.numPerRow - 1) * 18) / this.numPerRow + "px";
    },
  },
};
</script>
<style lang="less" scoped>
.info-card-container {
  margin-top: 10px;
  margin-bottom: 32px;
  .header-container {
    // line-height: 20px;
    margin-bottom: 2px;
    h1 {
      font-size: 20px;
      color: rgb(55, 55, 55);
      i {
        margin-left: 2px;
        // vertical-align: middle;
      }
    }
  }
  .outer-container {
    display: flex;
    margin: 12px 0;
    .content-container {
      margin: 0 9px;
      overflow: hidden;
      width: 100%;
      .title {
        font-size: 14px;
        color: rgb(55, 55, 55);
        margin-top: 2px;
        &:hover {
          color: black;
        }
      }
      .author {
        font-size: 12px;
        margin-top: 2px;
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
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .img-container {
        img {
          border-radius: 8px;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
