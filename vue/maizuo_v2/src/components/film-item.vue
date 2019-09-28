<template>
  <li v-link="{name: 'detail', params: {id: film.id}}">
    <div class="movie-item">
      <div class="movie-item-img">
        <image-placeholder :src='film.cover&&film.cover.origin' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
      </div>
      <div class="desc">
        <div class="left">
          <div class="film-name">{{film.name}}</div>
          <div class="count" v-if="type=='NOW_PLAYING'">
            <span>{{film.cinemaCount}}</span>
            <span>家影院上映</span>
            <span>{{film.watchCount}}</span>
            <span>人购票</span>
          </div>
        </div>
        <div class="right">
            <span class="score" v-if="type=='NOW_PLAYING'">{{film.grade}}</span>
            <span class="score" style="font-size: 12px" v-if="type=='COMING_SOON'">{{getTime(film.premiereAt)}}</span>
        </div>
      </div>
    </div>
  </li>
</template>
<style lang="scss">
  .movie li{
    margin: 0 17px 17px 17px;
    background-color: #f9f9f9;
    box-shadow: 0.5px 0.5px 1px #a8a8a8;
    cursor: pointer;
  }
  .movie-item img{
    width:100%;
  }
  .desc{
    overflow:hidden;
    /*height: 50px;*/
    .left{
      padding:13px 0 13px 13px;
      float: left;
      .film-name{
        font-size: 12px;
        line-height: 15px;;
      }
      .count{
        font-size: 8px;
        color: #9a9a9a;
        line-height: 15px;
      }
    }
    .right{
      float: right;
      padding-top: 13px;
      padding-right: 13px;
      color: #f78360;
      .score{
        font-size: 18px;
      }
    }
  }
</style>
<script>
    import moment from 'moment'
    import ImagePlaceholder from './image-placeholder'
    export default{
        props:{
          film:{
            type:Object,
            required:true
          },
          type:{
            type:String,
            default:'NOW_PLAYING'
          }
        },
        methods:{
          getTime(date){
            return moment(date).format('M月DD日上映');
          }
        },
        data(){
            return{
            }
        },
        components:{
          ImagePlaceholder
        }
    }
</script>
