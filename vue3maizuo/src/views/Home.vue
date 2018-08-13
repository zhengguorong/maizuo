<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import api from '../api';

@Component({
  components: {
    HelloWorld,
  },
  async mounted() {
    const res = await api.getNowPlaying(0, 2);
  },
})
export default class Home extends Vue {}
</script>
