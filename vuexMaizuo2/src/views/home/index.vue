<template>

  <section class="content">
    <div class="movie">
      <now-playing :films="nowPlayingFilms"></now-playing>
      <coming-soon :films="comingSoonFilms"></coming-soon>
    </div>
  </section>

</template>
<style lang="less">

  .my-swipe {
    height: 9rem;
    color: #ffffff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;
  }

  .silde img {
    width: 100%;
  }

  .movie ul {
    padding-top: 18px;
  }
</style>
<script>
  import NowPlaying from './now-playing'
  import ComingSoon from './coming-soon'
  import ImagePlaceholder from '../../components/image-placeholder'
  import { mapGetters } from 'vuex'

  export default{
    computed: mapGetters({
      comingSoonFilms: 'getComingSoonFilms',
      nowPlayingFilms: 'getNowPlayingFilms',
      billboards: 'getBillboards'
    }),
    created () {
      this.$store.dispatch('fetchComingSoonLists', 1, 5)
      this.$store.dispatch('fetchNowPlayingLists', 1, 5)
      this.$store.dispatch('fetchBillboards')
    },
    components: {
      NowPlaying, ComingSoon, ImagePlaceholder
    }
  }
</script>
