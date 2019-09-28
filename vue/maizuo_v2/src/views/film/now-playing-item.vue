<template>
  <li v-link="{name: 'detail', params: {id: film.id}}">
    <div class="film-item">
      <div class="film-item-img">
        <image-placeholder :src='film.poster.thumbnail'
                           placeholder="http://static.m.maizuo.com/v4/static/app/asset/23568dc30235133ebeec89fbded3863b.png"></image-placeholder>
      </div>
      <div class="film-desc">
        <div class="film-next-arrow">
          <i class="iconfont icon-arrow-right film-next-icon"></i>
        </div>
        <div class="film-grade">{{film.grade}}</div>
        <div class="film-name">{{film.name}}</div>
        <div class="film-intro">{{film.intro}}</div>
        <div class="film-counts">
          <span class="film-count-color1">{{film.cinemaCount}}</span>
          <span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span class="film-count-color1">{{film.watchCount}}</span>
          <span>人购票  </span>
        </div>
      </div>
    </div>
  </li>
</template>
<style lang="scss">
  .film-list .film-item {
    width: 100%;
    padding: 20px 0;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
    .film-item-img {
      width: 60px;
      float: left;
      overflow: hidden;
    }
    .film-desc {
      padding-left: 15px;
      display: inline-block;
      width: 75%;
      .film-next-arrow {
        float: right;
        line-height: 29px;
        color: #c6c6c6;
      }
      .film-grade {
        float: right;
        font-size: 16px;
        line-height: 32px;
        color: #fc7103;
      }
      .film-name {
        font-size: 16px;
        line-height: 32px;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .film-intro {
        height: 24px;
        line-height: 24px;
        color: #8e8e8e;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: inline-block;
      }
      .film-counts {
        line-height: 24px;
        color: #8e8e8e;
        font-size: 12px;
      }
    }
  }
</style>
<script>
  import ImagePlaceholder from '../../components/image-placeholder'
  export default{
    props: {
      film: {
        type: Object,
        required: true
      },
      ready: {
        type: Boolean
      }
    },
    components: {
      ImagePlaceholder
    }
  }
</script>
