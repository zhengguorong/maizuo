<template>
  <nav class="toolbar">
    <h1>
      <a href="javascript: void 0;">
        <div class="toolbar-title-icon">
          <i class="iconfont icon-list"></i>
        </div>
        <div class="toolbar-title">
          卖座电影
        </div>
      </a>
    </h1>
    <div class="nav-right">
      <router-link to='/login' class="user">
        <i class="iconfont icon-user"></i>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>

<style lang="scss" scoped>
.toolbar {
  background: #282828;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  left: 0;
  width: auto;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8);
  overflow: hidden;
  h1 {
    color: #fff;
    margin: 0 auto;
    float: left;
    a {
      font-size: 16px;
      .toolbar-title-icon {
        float: left;
        width: 48px;
        text-align: center;
        border-right: 1px solid #222;
        box-shadow: 1px 0 1px #363636;
        color: #999;
      }
      .toolbar-title {
        padding: 0 1em;
        font-size: 14px;
        color: #efefef;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
      }
    }
  }
}
.nav-right {
  float: right;
  .city {
    float: left;
    font-size: 14px;
    padding: 0 6px;
  }
  .user {
    float: left;
    font-size: 16px;
    width: 48px;
    text-align: center;
  }
  a {
    color: #999;
  }
}
</style>
