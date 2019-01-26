<template>
  <!-- 主体 -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in items" :key="item">
            <img width="100%" height="100%" :src="item.url"/>
          </el-carousel-item>
        </el-carousel>
        <br>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">服务器状态</div>
          <div class="panel-body">
            <p>内存使用率：40%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40"
                   aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
            </div>
            <p>数据库使用率：20%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20"
                   aria-valuemin="0" aria-valuemax="100" style="width: 20%"></div>
            </div>
            <p>磁盘使用率：60%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60"
                   aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
            </div>
            <p>CPU使用率：80%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80"
                   aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">今日访客统计</div>
          <div class="panel-body">
            <canvas id="canvas" class="col-md-12"></canvas>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">团队留言板</div>
          <div class="panel-body">
            <div class="col-md-7">
              <div class="media well">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object wh64" src="images/a.png" alt="卓大哥">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">卓大哥</h4>
                  技术大哥，今晚请把网站程序升级一下哈，现在的系统有漏洞，安全起见！
                </div>
              </div>
              <div class="media well">
                <div class="media-body text-right">
                  <h4 class="media-heading">技术大哥</h4>
                  收到，今晚凌晨2点准时升级！
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object wh64" src="images/b.png" alt="技术大哥">
                  </a>
                </div>
              </div>
              <div class="media well">
                <div class="media-body text-right">
                  <h4 class="media-heading">技术大哥</h4>
                  你先在站点发布一下通知哈！
                </div>
                <div class="media-right">
                  <a href="#">
                    <img class="media-object wh64" src="images/b.png" alt="技术大哥">
                  </a>
                </div>
              </div>
              <div class="media well">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object wh64" src="images/a.png" alt="卓大哥">
                  </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">卓大哥</h4>
                  好嘞。
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <form action="#">
                <div class="form-group">
                  <label for="text1">输入留言内容</label>
                  <textarea class="form-control" id="text1" rows="5" cols="10" placeholder="请输入留言内容"></textarea>
                  <button type="submit" class="btn btn-default mar_t15">留言</button>
                </div>
              </form>
              <div class="panel panel-default">
                <div class="panel-heading">团队联系手册</div>
                <div class="panel-body">
                  <ul class="list-group">
                    <li class="list-group-item">站长(李小龙)：<span class="glyphicon glyphicon-phone"></span>&nbsp;&nbsp;13134848615
                    </li>
                    <li class="list-group-item">技术(大牛哥)：<span class="glyphicon glyphicon-phone"></span>&nbsp;&nbsp;13456127694
                    </li>
                    <li class="list-group-item">推广(张二哥)：<span class="glyphicon glyphicon-phone"></span>&nbsp;&nbsp;13457815482
                    </li>
                    <li class="list-group-item">客服(王女士)：<span class="glyphicon glyphicon-phone"></span>&nbsp;&nbsp;13134567782&nbsp;&nbsp;<span
                      class="glyphicon glyphicon-phone-alt"></span>&nbsp;&nbsp;028-888888
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 主体 -->
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {url: 'https://assets.2dfire.com/frontend/4b97f6194ce25108d9f0dc5d9a69d1ad.png'},
          {url: 'https://assets.2dfire.com/frontend/dd946ed55ed15c1de012ee0b4faf1fd5.png'},
          {url: 'https://assets.2dfire.com/frontend/eaa447fee8e265293058831aa1e69498.jpg'}]
      }
    }
  }
</script>

<style>
  .mod-home {
    line-height: 1.5;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

