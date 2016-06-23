<template>
  <div class="film-list">
    <ul>
      <coming-soon-item v-for="film in comingSoonFilms" :film="film"></coming-soon-item>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import ComingSoonItem from './coming-soon-item'
  import {getComingSoonFilms} from '../../vuex/getters'
  import {fetchComingSoonLists} from '../../vuex/actions'
  export default{
    vuex:{
      getters:{
        comingSoonFilms:getComingSoonFilms,
      },
      actions:{
        fetchComingSoonLists
      }
    },
    ready(){
      this.fetchComingSoonLists(1,10)
    },
    components:{
      ComingSoonItem
    }
  }
</script>
