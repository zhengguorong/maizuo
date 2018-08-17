<template>
  <aside class="application-sidebar">
    <!--<transition name="sidebar">-->
    <div class="sidebar-container" >
      <div class="sidebar-overlay">
        <transition name="leftNav">
        <nav>
          <ul>
            <li v-for="(menu, index) in menuList" :key="index">
              <router-link :to='menu.path'><span>{{menu.name}}</span><i class="iconfont icon-arrow-right right"></i></router-link>
            </li>
          </ul>
        </nav>
          </transition>
      </div>
    </div>
    <!--</transition>-->
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Sidebar extends Vue {
  private menuList: object[] = [
    { name: '首页', path: '/' },
    { name: '影片', path: '/film' },
    { name: '影院', path: '/cinema' },
    { name: '我的', path: '/login' },
    { name: '卖座网查询', path: '/card' },
  ];
}
</script>


<style lang="scss">
.application-sidebar {
  .sidebar-enter-active,
  .sidebar-leave-active {
    transition: all ease 0.4s;
    -webkit-transition: all ease 0.4s;
  }
  .sidebar-enter,
  .sidebar-leave-active {
    opacity: 0;
  }
  .sidebar-container {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #9a9a9a;
    z-index: 3;
    a {
      color: #9a9a9a;
      font-size: rem(14);
    }
    .sidebar-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      top: 50px;
      right: 0;
      bottom: 0;
      left: 0;
      .leftNav-enter-active,
      .leftNav-leave--active {
        transition: right ease 0.4s;
        -webkit-transition: right ease 0.4s;
      }
      .leftNav-enter,
      .leftNav-leave--active {
        right: rem(380);
      }
      nav {
        border-top: 1px solid #222;
        box-shadow: 0 1px 1px #363636 inset;
        background: #282828;
        position: absolute;
        display: block;
        top: 0;
        right: rem(110);
        bottom: 0;
        left: 0;
        li {
          overflow: hidden;
          line-height: rem(50);
          height: rem(51);
          a {
            display: block;
            padding: 0 rem(16);
            border-bottom: 1px dotted #333;
            .right {
              float: right;
              color: #666;
              font-size: rem(14);
            }
          }
        }
      }
    }
  }
}
</style>