<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <MyHome> </MyHome>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MyHome from './view/MyHome.vue';
export default {
  name: 'App',
  components: {
    //HelloWorld,
    MyHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  top: 0px;
}
</style>
