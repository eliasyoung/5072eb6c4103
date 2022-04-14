<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getQrKey">click here</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { reqGetLoginQrKey } from "@/api";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    getQrKey() {
      reqGetLoginQrKey().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
