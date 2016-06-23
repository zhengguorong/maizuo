<template>
    <div class="main">
      <Navbar></Navbar>
      <div class="application-view">
      <router-view></router-view>
        <div>
      <Sidebar></Sidebar>
    </div>
</template>

<script>
require('./assets/styles/icon.css')
require('./assets/styles/reset.css')
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import store from './vuex/store';
export default {
  components: {
    Sidebar,Navbar
  },
  store
}
</script>

<style>
  .application-view{
    padding: 50px 0 0;
  }
  body{
    background-color: #ebebeb;
  }
  *{
    box-sizing: border-box;
  }
  img{
    width: 100%; transition: all 1.2s ease; opacity: 1;
  }
</style>
