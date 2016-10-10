<template>
  <div class="film-list">
    <ul>
        <now-playing-item v-for="film in nowPlayingFilms" :film="film" :ready='ready'></now-playing-item>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NowPlayingItem from './now-playing-item'
  export default{
    data(){
      return {
        nowPlayingFilms:[],
        ready:false
      }
    },
    ready(){
      this.getNowPlaying()
    },
    methods:{
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
          // self.ready = true;
          setTimeout(()=>{
            self.ready = true;
          },100)
        }
        let errorCallback = (json) =>
        {
          setTimeout(()=>{
            self.ready = true;
          },0)
          //console.log(json)
        }
        let data = {
          _t: new Date().getTime(),
          count: 5,
          page: 1
        }

        self.$http.get('http://m.maizuo.com/v4/api/film/now-playing', [data]).then(successCallback, errorCallback)
      },
    },
    components:{
      NowPlayingItem
    }
  }
</script>
