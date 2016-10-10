<template>
	<section class='cinema'>
			<div>该页面正在开发中。。。</div>
	</section>
</template>

<style lang='scss'>
	.cinema {
		margin:50px auto;
		text-align: center;
	}
  .toast{
    background-color:blue;
    margin: 0 auto;
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    z-index: 1001;
  }
  .pop-fade-transition {
    transition: opacity 3.3s linear;
  }
  .pop-fade-enter,
  .pop-fade-leave {
    opacity: 0;
  }
</style>

<script>
  export default{
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      showToast(){
        this.isShow=true
      },
      hideToast(){
        this.isShow=false
      }
    }
  }
</script>
