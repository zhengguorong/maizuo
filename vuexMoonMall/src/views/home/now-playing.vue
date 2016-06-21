<template>
  <ul>
  <film-item v-for="film in films" :film="film"></film-item>
  <more-button v-link="{path:'/film'}">更多热门电影</more-button>
  </ul>
</template>
<style lang="scss">

</style>

<script>
  import FilmItem from '../../components/film-item'
  import MoreButton from '../../components/more-button'
  export default{
    props:{
      films:{
        type:Array,
        required:true
      }
    },
    components:{
        FilmItem,MoreButton
      }
  }

</script>
