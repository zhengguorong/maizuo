<template>
  <ul>
    <film-item v-for="film in films" :film="film"></film-item>
    <router-link to='/film'><more-button>更多热门电影</more-button></router-link>
  </ul>
</template>
<style lang="less">

</style>

<script>
  import FilmItem from '../../components/film-item'
  import MoreButton from '../../components/more-button'
  export default{
    props: {
      films: {
        type: Array,
        required: true
      }
    },
    components: {
      FilmItem, MoreButton
    }
  }

</script>
