<template>
  <div class="index">
    <Banner :billboards="billboards"></Banner>
    <!-- 热映电影列表  -->
    <div class='film-list'>
      <div class='item' :key="index"  v-for="(item, index) in playingFilms">
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
import api from '@/utils/api';
import dayjs from 'dayjs';
import Navbar from '@/components/navbar.vue';
import Banner from '@/components/banner.vue';

@Component({
  components: {
    Navbar,
    Banner,
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
    });
  }
}
</script>

<style lang="scss">
.film-list {
  .item {
    height: auto;
    margin: rem(17);
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    background: #fff;
    img {
      width: 100%;
      height: rem(192);
    }
    .info-container {
      padding: rem(10);
      display: flex;
      justify-content: space-between;
      text-align: left;
      .name {
        font-size: rem(13);
      }
      .total {
        font-size: rem(11);
        line-height: 2;
        color: #9a9a9a;
      }
      .grade {
        font-size: rem(13);
        color: #f78360;
      }
      .time {
        color: #f78360;
        font-size: rem(13);
      }
    }
  }
}

.more {
  display: flex;
  margin: rem(40) auto;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: rem(15);
  width: rem(160);
  height: rem(30);
  font-size: rem(13);
  color: #616161;
}

.split-line {
  border-bottom: 1px solid #a8a8a8;
  margin: rem(40) 0;
  .split-text {
    display: flex;
    margin: 0 auto;
    margin-bottom: rem(-10);
    justify-content: center;
    align-items: center;
    color: #eee;
    background: #a7a7a7;
    width: rem(65);
    height: rem(20);
    font-size: rem(13);
    border-radius: rem(5);
  }
}
</style>
