<template>

  <section class="film-view">
    <div class="film-list-wrap">
        <div class="film-list-nav">
          <a href="javascript:void(0);" @click="changeTab('NOW_PLAYING')">
            <div class="now-playing" :class="{'choosing':curTab=='NOW_PLAYING'}">正在热映</div>
          </a>
          <a href="javascript:void(0);" @click="changeTab('COMING_SOON')">
            <div class="coming-soon" :class="{'choosing':curTab=='COMING_SOON'}">即将上映</div>
          </a>
        </div>
        <now-playing v-if="curTab==='NOW_PLAYING'"></now-playing>
        <coming-soon v-if="curTab==='COMING_SOON'"></coming-soon>
    </div>
  </section>
</template>

<style lang="scss">
  .film-view{
    .film-list-wrap {
      padding-left: 15px;
      padding-right: 15px;
      background-color: #f9f9f9;
      width: 100%;
      position: absolute;
      min-height: 100%;
    }
    .film-list-nav {
      height: 46px;
      margin: 0 auto;
      border-bottom: solid #fe6e00 1px;
      .now-playing,.coming-soon {
        float: left;
        width: 50%;
        height: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #6a6a6a;
        cursor: pointer;
      }
      .choosing {
        color: #fe6e00;
        border-bottom: solid;
      }
    }
  }
</style>

<script>
  import Navbar from '../../components/navbar'
  import ComingSoon from './coming-soon'
  import NowPlaying from './now-playing'

  export default{
    data(){
      return {
        curTab:'NOW_PLAYING'
      }
    },
    methods:{
      changeTab(name){
        this.curTab=name
      }
    },
    components:{
      Navbar,ComingSoon,NowPlaying
    }
  }
</script>
