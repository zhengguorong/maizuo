<template>
  <div class="main">
    <Navbar></Navbar>
    <div class="application-view">
      <router-view></router-view>
    </div>
    <Sidebar></Sidebar>
    <div id="nprogress">
      <!--<div class="bar" role="bar" style="transform: translate3d(-35.3056%, 0px, 0px); transition: all 200ms ease;">-->
      <!--<div class="peg"></div>-->
      <!--</div>-->
      <div class="spinner" role="spinner" v-show="loading">
        <div class="spinner-icon"></div>
      </div>
    </div>
  </div>

</template>


<script>
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    Sidebar, Navbar
  },
  computed: mapGetters({
    loading: 'getLoading'
  })
}
</script>

<style lang="less">
  @import "assets/styles/icon.css";
  @import "assets/styles/reset.css";
  .main {
    max-width:640px;
    margin:0 auto;
  }
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
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  #nprogress {
    pointer-events: none;
    .bar {
      background: #29d;
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #29d;
      border-left-color: #29d;
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
  }
</style>
