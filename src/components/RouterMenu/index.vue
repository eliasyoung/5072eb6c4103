<template>
  <div>
    <ul>
      <li>个性推荐</li>
      <li>歌单</li>
      <li>主播电台</li>
      <li>排行榜</li>
      <li class="active">歌手</li>
      <li>最新音乐</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "RouterMenu",
};
</script>
<style lang="less" scoped>
ul {
  li {
    display: inline-block;
    list-style: none;
    margin-right: 24px;
    cursor: pointer;
    color: rgb(55, 55, 55);
    &:hover {
      color: #000;
    }
    &.active {
      font-size: 20px;
      font-weight: 800;
      color: #000;
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
