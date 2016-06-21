<template>
  <aside class="application-sidebar">
    <div class="sidebar-container" @click="hideNav" v-show="show" transition="sidebar">
      <div class="sidebar-overlay">
        <nav v-show="show" transition="leftNav">
          <ul>
            <li><a v-link="{path:'/'}"><span>首页</span><i class="iconfont icon-arrow-right right"></i></a></li>
            <li><a v-link="{path:'/film'}"><span>影片</span><i class="iconfont icon-arrow-right right"></i></a></li>
            <li><a v-link="{name: 'cinema'}"><span>影院</span><i class="iconfont icon-arrow-right right"></i></a></li>
            <li><a v-link="{path:'/login'}"><span>我的</span><i class="iconfont icon-arrow-right right"></i></a></li>
            <li><a v-link="{name:'card'}"><span>卖座网查询</span><i class="iconfont icon-arrow-right right"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.application-sidebar {
  .sidebar-transition{
    transition: all ease .4s;
    -webkit-transition: all ease .4s;
  }
  .sidebar-enter, .sidebar-leave {
    opacity: 0;
  }


  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #9a9a9a;
    z-index: 501;
    a{
      color: #9a9a9a;
      font-size: 14px;
    }
    .sidebar-overlay {
      background: rgba(0,0,0,0.5);
      position: absolute;
      top: 50px;
      right: 0;
      bottom: 0;
      left: 0;
      .leftNav-transition{
        transition: right ease .4s;
        -webkit-transition: right ease .4s;
      }
      .leftNav-enter, .leftNav-leave {
        right:380px;
      }
      nav {
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background: #282828;
        position: absolute;
        display: block;
        top: 0;
        right: 110px;
        bottom: 0;
        left: 0;

        li{
          overflow: hidden;
          line-height: 50px;
          height: 51px;
          a{

            display: block;
            /*width: 100%;*/
            padding: 0 16px;
            border-bottom: 1px dotted #333;
            .right {
              float: right;
              color: #666;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  }
</style>

<script>
  import Vue from 'vue'
  export default{
    props: {
      show: {
        type: Boolean,
        default:false,
//        twoWay:true
      }
    },
    methods:{
      hideNav(){
        this.show=false
      }

    }
  }
</script>
