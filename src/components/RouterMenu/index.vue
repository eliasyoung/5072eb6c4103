<template>
  <div>
    <ul>
      <li
        class="cursor-pointer"
        v-for="(item, index) in routesList"
        :key="index"
        :class="{ active: index == currentTabIndex }"
        @click="pushRouter(item.path)"
      >
        {{ item.title }}
      </li>
      <!-- <li>个性推荐</li>
      <li>歌单</li>
      <li>主播电台</li>
      <li>排行榜</li>
      <li>歌手</li>
      <li>最新音乐</li> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "RouterMenu",
  data() {
    return {
      routesList: [
        { title: "个性推荐", path: "/discover" },
        { title: "歌单", path: "/discover/playlist" },
        { title: "主播电台", path: "/discover/djradio" },
        { title: "排行榜", path: "/discover/toplist" },
        { title: "歌手", path: "/discover/artist" },
        { title: "最新音乐", path: "/discover/newest" },
      ],
    };
  },
  computed: {
    currentTabIndex: {
      get() {
        return this.routesList.findIndex((item) => {
          if (item.path == this.$route.path) return item;
        });
      },
    },
  },
  methods: {
    pushRouter(path) {
      if (this.$route.path != path) this.$router.push(path);
    },
  },
};
</script>
<style lang="less" scoped>
ul {
  li {
    display: inline-block;
    list-style: none;
    margin-right: 24px;
    color: rgb(55, 55, 55);
    &:hover {
      color: #000;
    }
    &.active {
      font-size: 20px;
      font-weight: 800;
      color: rgb(55, 55, 55);
      position: relative;
      &::after {
        position: absolute;
        bottom: -8px;
        content: "";
        height: 3px;
        width: 80%;
        background: rgb(236, 65, 65);
        transform: translateX(-110%);
      }
    }
  }
}
</style>
