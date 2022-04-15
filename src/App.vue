<template>
  <div id="app">
    <div class="flex">
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
  </div>
</template>

<style lang="less">
#app {
  height: inherit;
  .flex {
    height: inherit;
    display: flex;
    flex-flow: column nowrap;
    .main {
      flex-grow: 1;
      display: flex;
      .main-view {
        flex-grow: 1;
        padding: 24px 32px;
      }
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
