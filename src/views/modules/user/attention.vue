<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="input-group">
          <input type="text" placeholder="查找用户" class="input form-control">
          <span class="input-group-btn">
                        <button type="button" class="btn btn btn-primary"> <i class="fa fa-search"></i> 搜索</button>
                    </span>
        </div>
        <div class="col-md-12 a-center" style="margin-top: 20px;">
          <div class="panel panel-default">
            <div class="panel-heading">已关注的用户</div>
            <div class="panel-body">
              <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="20"><div class="grid-content bg-purple-light"></div></el-col>
              </el-row>

            </div>
          </div>
        </div>
        <div class="col-md-12 a-center" style="margin-top: 20px;">
          <div class="panel panel-default">
            <div class="panel-heading">已关注的用户</div>
            <div class="panel-body">
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>取消关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-md-12 a-center" style="margin-top: 20px;">
          <div class="panel panel-default">
            <div class="panel-heading">未关注的用户</div>
            <div class="panel-body">
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-box">
                  <a href="profile.html">
                    <div class="col-sm-4">
                      <div class="text-center">
                        <img alt="image" class="img-circle a-responsive"
                             src="https://static.dingtalk.com/media/lADPBbCc1gF_eM7NAbPNAbA_432_435.jpg">
                        <div class="m-t-xs font-bold">xxx</div>
                      </div>
                    </div>
                  </a>
                  <div class="col-sm-8"><a href="profile.html">
                    <el-row>
                      <el-button type="success" round>点击关注</el-button>
                    </el-row>
                    <br>
                    <p><i class="fa fa-map-marker"></i> 甘肃·兰州</p>
                  </a>
                    <address><a href="profile.html">
                      <strong>Baidu, Inc.</strong><br>
                      E-mail:xxx@baidu.com<br>
                      Weibo:</a><a href="#">http://weibo.com/xxx</a><br>
                      <abbr title="Phone">Tel:</abbr> (123) 456-7890
                    </address>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style type="text/css">
  .contact-box {
    background-color: #fff;
    border: 1px solid #e7eaec;
    padding: 20px;
    margin-bottom: 20px;
  }
  .a-center{
    text-align: center;
  }

  @media (min-width: 868px) {
    .col-sm-4 {
      width: 33.33333333%;
    }
    .a-responsive{
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 868px) {
    .col-sm-4, .col-sm-8 {
      float: left;
    }
    .a-responsive{
      display: block;
      width: 50%;
      height: auto;
    }
  }

  .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
