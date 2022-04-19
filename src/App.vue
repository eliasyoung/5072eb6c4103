<template>
  <div id="app">
    <header-comp></header-comp>
    <div class="main">
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view /> -->
      <aside-menu></aside-menu>
      <div class="main-view">
        <router-view />
      </div>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<style lang="less">
.cursor-pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}

.flex {
  display: flex;
}

.fd-column-nowrap {
  flex-flow: column nowrap;
}

.fd-column-wrap {
  flex-flow: column wrap;
}

.jc-center {
  justify-content: center;
}

.jc-se {
  justify-content: space-evenly;
}

.w-100 {
  width: 100%;
}

.fs-14 {
  font-size: 14px;
}

.fs-12 {
  font-size: 12px;
}

.fw-8 {
  font-weight: 800;
}

.fw-1 {
  font-weight: 100;
}

.b-radius-4 {
  border-radius: 4px;
}

.b-radius-6 {
  border-radius: 6px;
}

.b-radius-8 {
  border-radius: 8px;
}

.mg-l-10 {
  margin-left: 10px;
}

#app {
  height: 100%;
  // .flex {
  //   height: 100%;
  // display: flex;
  // flex-flow: column nowrap;
  // }
  .main {
    padding-top: 60px;
    padding-bottom: 75px;
    display: flex;
    height: 100%;
    .main-view {
      overflow: auto;
      flex-grow: 1;
      padding: 24px 32px;
      border-left: 1px solid rgb(225, 225, 225);
    }
  }
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
