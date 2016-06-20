<template>
    <div class="main">
      <Navbar></Navbar>
      <div class="application-view">
      <router-view></router-view>
        <div>
      <Sidebar :show.sync="show"></Sidebar>
    </div>
</template>

<script>
require('./assets/styles/icon.css')
require('./assets/styles/reset.css')
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
export default {
  data(){
    return {
      show:false
    }
  },
  components: {
    Sidebar,Navbar
  },
  events: {
    'showNav':function(){
      this.show=true;
    }
  }
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
