<template>
  <section class="content film-view">
    <div class="film-img-wrap">
      <image-placeholder :src='film.cover&&film.cover.origin||""' placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png"></image-placeholder>
    </div>
    <div>
      <div class="player_mask hide">
        <div id="youkuplayer" class="prevue-player"></div>
      </div>
    </div>
    <div class="film-intro">
      <div class="film-word1">影片简介</div>
      <div class="film-word2">
        <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
        <span>{{film.director}}</span>
      </div>
      <div class="film-word2">
        <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
        <span>{{actors}}</span></div>
      <div class="film-word2">
        <span>地区语言：</span>
        <span>{{film.nation}}</span>
        <span>(</span><span>{{film.language}}</span><span>)</span>
      </div>
      <div class="film-word2">
        <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>
        <span>{{film.category}}</span>
      </div>
      <div class="film-word2">
        <span>上映日期：</span>
        <span>{{getTime(film.premiereAt)}}</span>
      </div>
      <div class="film-word3">{{film.synopsis}}</div>
    </div>
    <div class="operation">
    <button class="cpn-primary-button ">立即购票</button></div></section>
</template>

<style lang="scss">
  .film-view {
  .film-img-wrap {
    overflow: hidden;
  }

  .film-intro {
    line-height: 18px;
    -webkit-user-select: text;
    user-select: text;

  .film-word1 {
    margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 16px;
    padding-left: 4px;
  }

  .film-word2 {
    height: 18px;
    overflow: hidden;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  .film-word3 {
    text-overflow: ellipsis;
    margin-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
  }

  }
  .operation {
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }

  .cpn-primary-button {
    font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    margin: 0;
    border-radius: 18px;
    color: #fff;
    -webkit-transition: 0.5s ease;
  }

}
</style>

<script>
  import moment from 'moment'
  import ImagePlaceholder from '../../components/image-placeholder'
  export default{
    ready(){
      this.getDetail(this.$route.params.id)
    },
    data(){
      return{
        film:{}
      }
    },
    computed:{
      actors:function(){
        let actors="";
          this.film.actors&&this.film.actors.forEach(actor => {
            actors += actor.name + " | "
        })
        return actors
      }
    },
    methods:{
      getDetail(id){
        const self = this
        self.$http.get('http://m.maizuo.com/v4/api/film/'+id,{_t: new Date().getTime()}).then(response =>{
          let data = response.data
          //数据对象
          let json = data.data
          if (data.status === 0) {
          self.film = json.film
        }
      },(response)=>{console.log(response)})
      },
      getTime(date){
        return moment(date).format('M月DD日上映');
      }
    },
    components:{
      ImagePlaceholder
    }
  }
</script>
