<template>
  <div class="index">
    <Swiper :pagination-visible="true" direction="horizontal">
        <!-- <img v-bind:key="index"  v-for="(item, index) in billboards" class="slide-image" :src='item.imageUrl'/> -->
        <img class="slide-image slide-1" src="https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg"/>
        <img class="slide-image slide-2" src="https://pic.maizuo.com/h5PicUpload/37a957a59a1dbe1d068cae341d10a6d7.jpg"/>
    </Swiper>
    <!-- 热映电影列表  -->
    <div class='film-list'>
      <div class='item' v-bind:key="index"  v-for="(item, index) in playingFilms">
          <img :src='item.cover.origin'
                         placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png"/>
          <div class='info-container'>
            <div>
              <div class='name'>{{item.name}}</div>
              <div class='total'>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</div>
            </div>
            <div class='grade'>
              <div>{{item.grade}}</div>
            </div>
          </div>
      </div>
      <div class='more'>更多热映电影</div>
    </div>
    <!-- 分割线  -->
    <div class='split-line'>
      <div class="split-text">即将上映</div>
    </div>
    <!-- 即将上映列表  -->
    <div class='film-list'>
      <div class='item' v-bind:key="index"  v-for="(item, index) in comingFilms">
          <img :src='item.cover.origin'
                         placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png"/>
          <div class='info-container'>
            <div>
              <div class='name'>{{item.name}}</div>
            </div>
            <div class='time'>{{getTime(item.premiereAt)}}</div>
          </div>
      </div>
      <div class='more'>更多热映电影</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from '@/api';
import dayjs from 'dayjs';
import Swiper from '@/components/Swiper.vue';

@Component({
  components: {
    Swiper,
  },
})
export default class Index extends Vue {
  private playingFilms: object[] = [];
  private comingFilms: object[] = [];
  private billboards: object[] = [];
  public getTime(date: number) {
    return dayjs(date).format('M月DD日上映');
  }
  private mounted() {
    api.getNowPlaying(1, 5).then((res) => {
      this.playingFilms = res.data.films;
    });
    api.getComingSoon(1, 5).then((res) => {
      this.comingFilms = res.data.films;
    });
    api.getHomeBanner().then((res) => {
      this.billboards = res.data.billboards;
    })
  }
}
</script>

<style scoped lang="scss">
.swiper {
  height: 210px;
}

.slide-image {
  width: 100%;
  height: 100%;
}

.film-list {
  .item {
    height: auto;
    margin: 17px;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    background: #fff;
    img {
      width: 100%;
      height: 192px;
    }
    .info-container {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      text-align: left;
      .name {
        font-size: 13px;
      }
      .total {
        font-size: 11px;
        color: #9a9a9a;
      }
      .grade {
        font-size: 13px;
        color: #f78360;
      }
      .time {
        color: #f78360;
        font-size: 13px;
      }
    }
  }
}

.more {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 15px;
  width: 160px;
  height: 30px;
  font-size: 13px;
  color: #616161;
}

.split-line {
  border-bottom: 1px solid #a8a8a8;
  margin: 80px 0;
  .split-text {
    display: flex;
    margin: 0 auto;
    margin-bottom: -10px;
    justify-content: center;
    align-items: center;
    color: #eee;
    background: #a7a7a7;
    width: 65px;
    height: 20px;
    font-size: 13px;
    border-radius: 5px;
  }
}
</style>
