<template>
  <div id="app">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navbar from '@/components/navbar.vue';
import Sidebar from '@/components/sidebar.vue';

@Component({
  components: { Navbar, Sidebar },
})
export default class App extends Vue {}
</script>


<style lang="scss">
// icon资源
@import 'assets/icon.css';
@import 'assets/reset.css';
// 以750设计图为基准。适配方案参考 https://aotu.io/notes/2017/04/28/2017-4-28-CSS-viewport-units/
html {
  font-size: ($vw_fontsize / ($vw_design / 2)) * 100vw;
  @media screen and (max-width: 320px) {
    font-size: 64px;
  }
  @media screen and (min-width: 540px) {
    font-size: 108px;
  }
}
body {
  margin: 0 auto;
  max-width: 540px;
  min-width: 320px;
}
section {
  margin-top: 50px;
}
</style>
