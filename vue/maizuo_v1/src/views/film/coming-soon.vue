<template>
  <div class="film-list">
    <ul>
      <coming-soon-item v-for="film in comingSoonFilms" :film="film" :ready='ready'></coming-soon-item>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import ComingSoonItem from './coming-soon-item'
  export default{
    data(){
      return {
        comingSoonFilms:[],
        ready:false
      }
    },
    ready(){
      this.getComingSoon()
    },
    methods:{
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
          setTimeout(()=>{
            self.ready = true;
          },100)
        }
        let errorCallback = (json) =>
        {
          self.ready = true;
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
    components:{
      ComingSoonItem
    }
  }
</script>
