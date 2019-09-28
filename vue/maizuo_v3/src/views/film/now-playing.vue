<template>
  <div class="film-list">
    <ul>
      <now-playing-item v-for="film in nowPlayingFilms" :film="film"></now-playing-item>
    </ul>
  </div>
</template>

<style lang="less">

</style>
<script>
  import NowPlayingItem from './now-playing-item'
  import {mapGetters} from 'vuex'

  export default{
    computed: mapGetters({
      nowPlayingFilms: 'getNowPlayingFilms'
    }),
    mounted () {
      this.$store.dispatch('fetchNowPlayingLists', 1, 10)
    },
    components: {
      NowPlayingItem
    }
  }
</script>
