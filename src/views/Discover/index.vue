<template>
  <div>
    <router-menu></router-menu>
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "DiscoverComp",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.view-container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
