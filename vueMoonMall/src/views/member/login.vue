<template>
  <section class="login-view">
    <form>
      <div class="form-group">
        <input type="text" name="username" class="form-control" placeholder="请输入手机/邮箱">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="text" name="password" class="form-control" PLACEHOLDER="请输入密码">
        <div class="input-bg"></div>
      </div>
      <button type="submit" @click="login" class="submit">登录</button>
    </form>
  </section>
</template>

<style lang="scss">
  .login-view {
    padding-top: 50px;
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f6f6f6;

  form {
    padding: 0px 31px 0px 31px;

  .form-group {
    margin: 30px 0 0;
    height: 34px;
    position: relative;

  .form-control {
    border: none;
    background-color: #f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
  }

  .input-bg {
    position: absolute;
    top: 20px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
  }

  }
  .submit {
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    margin-top: 45px;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  }

  }
</style>

<script>
  import Navbar from '../../components/navbar'
  export default{
    methods: {
      login(){
        alert("功能尚未完善")
        return false
      }
    },
    components: {
    }
  }

</script>
