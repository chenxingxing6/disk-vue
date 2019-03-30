<template>
  <div>
    <div class="container">
      <header class="navbar navbar-static-top smart-nav navbar-fixed-top manual-header" role="banner">
        <div class="container">
          <div class="navbar-header col-sm-12 col-md-6 col-lg-5">
            <a href="https://doc.iminho.me" class="navbar-brand">企业网盘管理系统</a>
          </div>
        </div>
      </header>
      <div class="container manual-body">
        <div class="row login">
          <div class="login-body">
            <form role="form" method="post" @submit="dataFormSubmit">
              <input v-model="uuid" type="hidden">
              <h3 class="text-center">用户登录</h3>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-user"></i>
                  </div>
                  <input type="text" class="form-control" placeholder="邮箱 / 用户名" v-model="username">
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-lock"></i>
                  </div>
                  <input type="password" class="form-control" placeholder="密码" v-model="password">
                </div>
              </div>
              <div class="checkbox">
                <a href="find_password.html" style="display: inline-block;float: right">忘记密码？</a>
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-success" style="width: 100%"
                        autocomplete="off" @click="dataFormSubmit()">立即登录
                </button>
              </div>
              <div class="form-group">
                还没有账号？<a href="register.html" title="立即注册">立即注册</a>
              </div>
            </form>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row text-center border-top">
          <span><a href="https://www.iminho.me" target="_blank">官方网站</a></span>
          <span>&nbsp;·&nbsp;</span>
          <span><a href="https://github.com/lifei6671/mindoc/issues" target="_blank">意见反馈</a></span>
          <span>&nbsp;·&nbsp;</span>
          <span><a href="https://github.com/lifei6671/mindoc" target="_blank">项目源码</a></span>
          <span>&nbsp;·&nbsp;</span>
          <span><a href="https://www.iminho.me/wiki/docs/mindoc/" target="_blank">使用手册</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- css -->
<style lang="scss">
  .container {
    a {
      color: #23527c;

      :focus {
        color: red;
      }
    }
  }
  .login{
    margin-top: -20px;
  }
</style>


<script>
  import {getUUID} from '@/utils'
  export default {
    data () {
      return {
          username: '',
          password: '',
          uuid: ''
      }
    },
    methods: {
      // 提交表单
      dataFormSubmit () {
        console.log(this.username)
        if (this.username === null || this.username === '') {
          this.$message.warning('账号不能为空')
          return false
        }
        if (this.password === null || this.password === '') {
          this.$message.warning('密码不能为空')
          return false
        }
        this.$http({
          url: this.$http.adornUrl('/api/login'),
          method: 'post',
          data: this.$http.adornData({
            'username': this.username,
            'password': this.password,
            'uuid': this.uuid,
          })
        }).then(({data}) => {
          if (data && data.code === 0) {
            this.$cookie.set('token', data.token)
            this.$router.replace({name: 'home'})
          } else {
            this.$message.error(data.msg)
          }
        })
      }
    }
  }
</script>


