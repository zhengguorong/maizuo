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
  require('vue-swipe/dist/vue-swipe.css')

  export default{
    data() {
      return {
        billboards:[],
        nowPlayingFilms:[],
        comingSoonFilms:[]
      }
    },
    ready(){
      this.getBanner();
      this.getNowPlaying();
      this.getComingSoon();
    },

    methods: {
      //请求列表全部数据
      getBanner () {
        const self = this
        self.$http.get('http://m.maizuo.com/v4/api/billboard/home',{_t: new Date().getTime()}).then(response =>{
          let data = response.data
          //数据对象
          let json = data.data
          if (data.status === 0) {
          self.billboards = json.billboards
        }
        },(response)=>{console.log(response)})
      },
      getNowPlaying(){
        const self = this
        let successCallback = (response) =>
        {
          const data = response.data
          //数据对象
          const json = data.data
          if (data.status === 0) {
            self.nowPlayingFilms = json.films
          }
        }
        let errorCallback = (json) =>
        {
          //console.log(json)
        }
        let data = {
          _t: new Date().getTime(),
          count: 5,
          page: 1
        }

        self.$http.get('http://m.maizuo.com/v4/api/film/now-playing', [data]).then(successCallback, errorCallback)
      },
      getComingSoon(){
        const self = this
        let successCallback = (response) =>
        {
          const data = response.data
          //数据对象
          const json = data.data
          if (data.status === 0) {
            self.comingSoonFilms = json.films
          }
        }
        let errorCallback = (json) =>
        {
          //console.log(json)
        }
        let data = {
          _t: new Date().getTime(),
          count: 3,
          page: 1
        }

        self.$http.get('http://m.maizuo.com/v4/api/film/coming-soon', [data]).then(successCallback, errorCallback)
      },
    },
    components: {
      Sidebar,NowPlaying,ComingSoon,ImagePlaceholder,Swipe,SwipeItem
    }
  }
</script>
