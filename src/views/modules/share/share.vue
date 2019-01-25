<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">分享</div>
          <div class="panel-body">
            <div class="col-md-7">

              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="panel-body" style="padding: 15px 0;">
                      <ul class="nav nav-tabs">
                        <li class="active"><a href="#list" aria-controls="machine" role="tab" data-toggle="tab">机器列表</a></li>
                        <li><a href="#form" aria-controls="machine" role="tab" data-toggle="tab">添加机器</a></li>
                      </ul>
                    </div>
                    <div class="tab-content">
                      <div role="tabpanel" class="tab-pane active" id="list">
                        <div class="panel-body">
                          <div class="row">
                            <form>
                              <div class="col-md-3 col-lg-offset-9">
                                <div class="input-group">
                                  <input class="form-control" type="text" value="" placeholder="用户名" name="keyword">
                                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary"><i class="glyphicon glyphicon-search"></i></button>
                  </span>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="panel panel-default">
                          <div class="table-responsive">
                            <table class="table table-bordered">
                              <thead>
                              <tr>
                                <th class="w8p">id</th>
                                <th class="w18p">域名</th>
                                <th class="w18p">ip</th>
                                <th class="w13p">sphinx路径</th>
                                <th class="w10p">备注</th>
                                <th class="w15p">创建时间</th>
                                <th class="w15p">操作</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                <td class="center">1</td>
                                <td>sphinx.test.com.cn</td>
                                <td>192.168.128.12</td>
                                <td>/usr/local/sphinx</td>
                                <td class="center">主机</td>
                                <td class="center">2017-03-28 12:21:09</td>
                                <td class="center"><a name="remove" onclick="Common.confirm('确认要删除吗？')"><i class="glyphicon glyphicon-remove"></i>删除</a></td>
                              </tr>
                              <tr>
                                <td class="center">2</td>
                                <td>sphinx.test.com.cn</td>
                                <td>192.168.128.13</td>
                                <td>/usr/local/sphinx</td>
                                <td class="center">备机</td>
                                <td class="center">2017-03-28 12:21:09</td>
                                <td class="center"><a name="remove" onclick="Common.confirm('确认要屏蔽吗？')"><i class="glyphicon glyphicon-remove"></i>删除</a></td>
                              </tr>
                              <tr>
                                <td class="center">3</td>
                                <td>sphinx.video.com.cn</td>
                                <td>192.168.158.13</td>
                                <td>/usr/local/sphinx</td>
                                <td class="center">主机</td>
                                <td class="center">2017-03-28 12:21:09</td>
                                <td class="center"><a name="remove" onclick="Common.confirm('确认要屏蔽吗？')"><i class="glyphicon glyphicon-remove"></i>删除</a></td>
                              </tr>
                              <tr>
                                <td class="center">4</td>
                                <td>sphinx.test.com.cn</td>
                                <td>192.168.158.14</td>
                                <td>/usr/local/sphinx</td>
                                <td class="center">备机</td>
                                <td class="center">2017-03-28 12:21:09</td>
                                <td class="center"><a name="remove" onclick="Common.confirm('确认要屏蔽吗？')"><i class="glyphicon glyphicon-remove"></i>删除</a></td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="panel-footer">
                            <div class="row">
                              <div class="col-md-8 m-pagination" id="paginator">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" class="tab-pane" id="form">
                        <div class="panel-body">
                          <form class="form-horizontal">
                            <div class="form-group">
                              <label class="col-sm-1 control-label"><span class="text-danger"></span>域名</label>
                              <div class="col-sm-4">
                                <input type="text" name="username" class="form-control" placeholder="机器域名" required>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-1 control-label"><span class="text-danger"> * </span>IP</label>
                              <div class="col-sm-4">
                                <input type="email" name="email" class="form-control" placeholder="机器ip" required>
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-1 control-label"><span class="text-danger"> * </span>Sphinx<br>安装目录</label>
                              <div class="col-sm-4">
                                <input type="text" name="sphinx_path" class="form-control" placeholder="sphinx安装目录">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="col-sm-1 control-label"><span class="text-danger"></span>备注信息</label>
                              <div class="col-sm-4">
                                <input type="text" class="form-control" placeholder="备注" required>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-1 col-sm-10">
                                <button type="submit" onclick="" class="btn btn-success">保存</button>
                              </div>
                            </div>
                          </form>
                          <hr>
                        </div>
                      </div>
                    </div>
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

<script>
  export default {
  }
</script>

<style>
  .mod-home {
    line-height: 1.5;
  }
</style>

