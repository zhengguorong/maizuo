<template>
    <Swiper class="swiper" v-if="billboards.length > 0">
        <Slide v-for="(item,index) in billboards" :key="index">
          <img class="slide-image" :src="item.imageUrl">
        </Slide>
    </Swiper>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Swiper, Slide } from 'vue-swiper-component';

@Component({
  components: {
    Swiper,
    Slide,
  },
})
export default class Banner extends Vue {
  @Prop({ default: [] })
  private billboards!: object[];
}
</script>

<style lang="scss" scoped>
.swiper {
  height: rem(210);
}

.slide-image {
  width: 100%;
  height: 100%;
}
</style>
