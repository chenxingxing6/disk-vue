<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" v-if="!loading">
      <div class="container">
        <!--小屏幕导航按钮和logo-->
        <div class="navbar-header">
          <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a @click="$router.push({ name:'home' })" class="navbar-brand"> 企业网盘管理系统</a>
        </div>
        <!--小屏幕导航按钮和logo-->
        <!--导航-->
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="home"> <span class="glyphicon glyphicon-file"/> &nbsp;&nbsp;首页</router-link></li>
            <li><router-link to="disk"><span class="glyphicon glyphicon-file"></span>&nbsp;&nbsp;网盘</router-link></li>
            <li><router-link to="share"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;分享</router-link></li>
            <li><router-link to="findresource"><span class="glyphicon glyphicon-search"></span>&nbsp;&nbsp;找资源</router-link></li>
            <li><router-link to="attention"><span class="glyphicon glyphicon-search"></span>&nbsp;&nbsp;关注用户</router-link></li>
            <li><router-link to="more"><span class="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;更多</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="img user-info">
                <img src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg"
                     class="img-circle userbar-avatar" alt="admin">
              </div>
            </li>
            <li class="dropdown">
              <a id="lable" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                admin &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="lable">
                <li><a href="index.html"><span class="glyphicon glyphicon-cog"></span>&nbsp;&nbsp;个人中心</a></li>
                <li><a @click="updatePasswordHandle" title="修改密码"><i class="fa fa-file"></i>&nbsp;&nbsp;修改密码</a></li>
                <li><a @click="logoutHandle" title="我的文章"><i class="fa fa-file"></i>&nbsp;&nbsp;退出</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!--导航-->
      </div>
      <!-- 弹窗, 修改密码 -->
      <update-password v-if="updatePassowrdVisible" ref="updatePassowrd"></update-password>
    </nav>
  </div>
</template>

<script>
  import UpdatePassword from './main-navbar-update-password'
  import {clearLoginInfo} from '@/utils'

  export default {
    data () {
      return {
        updatePassowrdVisible: false
      }
    },
    components: {
      UpdatePassword
    },
    computed: {
      userName: {
        get () {
          return this.$store.state.user.name
        }
      }
    },
    methods: {
      // 修改密码
      updatePasswordHandle () {
        this.updatePassowrdVisible = true
        this.$nextTick(() => {
          this.$refs.updatePassowrd.init()
        })
      },
      // 退出
      logoutHandle () {
        this.$confirm(`确定进行[退出]操作?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
            url: this.$http.adornUrl('/api/logout'),
            method: 'get',
            data: this.$http.adornData()
          }).then(({data}) => {
            if (data && data.code === 0) {
              clearLoginInfo()
              this.$router.push({name: 'login'})
            }
          })
        }).catch(() => {
        })
      }
    }
  }
</script>


<!-- css -->
<style lang="scss">
  .active{
    color: white !important;
  }
</style>
