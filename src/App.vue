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
