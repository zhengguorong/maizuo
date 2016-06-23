<template>
  <div class="film-list">
    <ul>
        <now-playing-item v-for="film in nowPlayingFilms" :film="film"></now-playing-item>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NowPlayingItem from './now-playing-item'
  import {getNowPlayingFilms} from '../../vuex/getters'
  import {fetchNowPlayingLists} from '../../vuex/actions'
  export default{
    vuex:{
      getters:{
        nowPlayingFilms:getNowPlayingFilms
      },
      actions:{
        fetchNowPlayingLists
      }
    },
    ready(){
      this.fetchNowPlayingLists(1,10)
    },
    components:{
      NowPlayingItem
    }
  }
</script>
