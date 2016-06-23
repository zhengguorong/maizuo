<template>

    <section class="content" >
      <swipe class="my-swipe">
        <swipe-item class="silde" v-for="billboard in billboards">
          <a href="{{billboard.url}}">
            <image-placeholder :src='billboard.imageUrl' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
          </a>
        </swipe-item>
      </swipe>
      <div class="movie">
          <now-playing :films="nowPlayingFilms"></now-playing>
          <coming-soon :films="comingSoonFilms"></coming-soon>
      </div>
    </section>

</template>
<style lang="scss">

  .my-swipe{
    height: 9rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }
  .silde img{
    width: 100%;
  }
  .movie ul{
    padding-top: 18px;
  }
</style>
<script>
  import FilmItem from '../../components/film-item'
  import Sidebar from '../../components/sidebar'
  import NowPlaying from './now-playing'
  import ComingSoon from './coming-soon'
  import ImagePlaceholder from '../../components/image-placeholder'
  import { Swipe, SwipeItem } from 'vue-swipe'

  import {getComingSoonFilms,getBillboards,getNowPlayingFilms} from '../../vuex/getters'
  import {fetchComingSoonLists,fetchBillboards,fetchNowPlayingLists} from '../../vuex/actions'
  require('vue-swipe/dist/vue-swipe.css')

  export default{
    vuex:{
      getters:{
        comingSoonFilms:getComingSoonFilms,
        nowPlayingFilms:getNowPlayingFilms,
        billboards:getBillboards
      },
      actions:{
        fetchBillboards,
        fetchComingSoonLists,
        fetchNowPlayingLists
      }
    },
    ready(){
      this.fetchComingSoonLists(1,5)
      this.fetchNowPlayingLists(1,5)
      this.fetchBillboards()
    },
    components: {
      Sidebar,NowPlaying,ComingSoon,ImagePlaceholder,Swipe,SwipeItem
    }
  }
</script>
