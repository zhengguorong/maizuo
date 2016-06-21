<template>
<div class="img-responsive" v-bind:style="{'background-image':'url('+placeholder+')'}" style="background-size:100%;" >
  <img :src="src" v-on:load="loaded" style="width: 100%; transition: all 1.2s ease;" v-bind:style="{'opacity':ready?1:0}">
</div>
</template>


<script>
	export default{
		data(){
      return {
        ready:false
      }
		},

		methods:{
      loaded(){
        const self=this;
        setTimeout(function(){
          self.ready=true
        },100)
      }
		},
		props:{
      src:{
				type:String,
				required:true
			},
      placeholder:{
        type:String
      }
		}
	}
</script>
