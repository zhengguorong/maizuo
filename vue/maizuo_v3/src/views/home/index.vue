<template>

  <section class="content">
    <swiper class="my-swipe" :options="swiperOption">
      <swiper-slide class="silde" v-for="billboard in billboards">
        <a v-bind:href="billboard.url">
          <image-placeholder :src='billboard.imageUrl' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
        </a>
      </swiper-slide>
    </swiper>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        autoHeight: true
      }
    }
  },
  computed: {
    ...mapGetters({
      comingSoonFilms: 'getComingSoonFilms',
      nowPlayingFilms: 'getNowPlayingFilms',
      billboards: 'getBillboards'
    })
  },
  created () {
    this.$store.dispatch('fetchComingSoonLists', 1, 5)
    this.$store.dispatch('fetchNowPlayingLists', 1, 5)
    this.$store.dispatch('fetchBillboards')
  },
  components: {
    NowPlaying,
    ComingSoon,
    ImagePlaceholder,
    swiper,
    swiperSlide
  }
}
</script>
