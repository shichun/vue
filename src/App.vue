<template>
  <div id="app">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/data">Data</router-link>
      <router-link to="/setting">Setting</router-link>
      <router-link to="/kits/1">kits1</router-link>
      <router-link to="/kits/2">kits2</router-link>
    </p>
      <div class="redfont">test custom class</div>
    <router-view/>
  </div>
</template>

<script>
import './assets/my.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
