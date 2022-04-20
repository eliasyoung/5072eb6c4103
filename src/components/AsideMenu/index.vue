<template>
  <div class="aside-container">
    <ul class="aside-router-menu fs-15">
      <li
        v-for="(item, index) in routesMenuList"
        :key="index"
        :class="{ active: $route.path.indexOf(item.path) == 0 }"
        @click="pushRouter('/discover')"
      >
        {{ item.title }}
      </li>
    </ul>
    <ul class="fs-14">
      <li class="menu-label fs-13">我的音乐</li>
      <li>本地音乐</li>
      <li>下载管理</li>
    </ul>
    <ul class="fs-14">
      <li class="menu-label fs-13">创建的歌单</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "AsideMenu",
  data() {
    return {
      routesMenuList: [
        { title: "发现音乐", path: "/discover" },
        { title: "视频", path: "/video" },
        { title: "朋友", path: "/friend" },
        { title: "排行榜", path: "/ranking" },
        { title: "直播", path: "/live" },
        { title: "私人FM", path: "/personalfm" },
      ],
    };
  },
  methods: {
    pushRouter(path) {
      if (this.$route.path != path) this.$router.push(path);
    },
  },
};
</script>
<style lang="less" scoped>
.aside-container {
  width: 200px;
  overflow: auto;
  padding: 12px 14px;
  ul {
    li {
      color: rgb(55, 55, 55);
      list-style: none;
      height: 38px;
      line-height: 38px;
      vertical-align: middle;
      padding-left: 10px;
      border: 1px solid #fff;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        color: #000;
        background: rgb(246, 246, 246);
      }
      &.menu-label {
        // color: rgb(153, 153, 153);
        color: rgb(55, 55, 55);
        cursor: default;
        font-weight: 100;
        &:hover {
          color: rgb(55, 55, 55);
          background: none;
        }
      }
    }
    &.aside-router-menu {
      .active {
        font-size: 17px;
        font-weight: 800;
        color: #000;
        background: rgb(246, 246, 246);
      }
    }
  }
}
</style>
