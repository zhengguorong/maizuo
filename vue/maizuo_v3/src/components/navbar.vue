<template>
  <nav id="toolbar">
    <h1 @click="showNav">
      <a href="javascript: void 0;">
        <div class="toolbar-title-icon">
          <i class="iconfont icon-list"></i>
        </div>
        <div class="toolbar-title">
          卖座电影
        </div>
      </a>
    </h1>
    <div id="nav-right">
<!--       <a href="javascript: void 0;" class="city">
        <span class="city-content">广州</span>
        <i class="iconfont icon-dropdown"></i>
      </a> -->
      <router-link to='/login' class="user">
        <i class="iconfont icon-user"></i>
      </router-link>
    </div>
  </nav>
</template>
<style lang="less">
  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    h1 {
      color: #fff;
      font-size: 16px;
      line-height: 50px;
      text-align: left;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
      width: auto;
      height: 50px;
      margin: 0 auto;
      float: left;
      a{
        font-size: 16px;
        line-height: 50px;
        text-align: left;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
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
          float: left;
          font-size: 14px;
          color: #efefef;
          text-overflow: ellipsis;
          white-space: nowrap;
          displdday: inline-block;
          overflow: hidden;
        }
      }
    }
  }
  #nav-right {
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
<script>
    export default{
      methods: {
        showNav () {
          this.$store.dispatch('changeLeftNavState', true)
        }
      }
    }
</script>
