<template>
  <!-- 主体 -->
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-danger alert-dismissible fade in" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
          <h4>更多模块！</h4>
          <p>当前版本程序(V1.22)存在严重安全问题，容易造成攻击，请即可修复！</p>
          <p>
            <button type="button" class="btn btn-danger">立即修复</button>
            <button type="button" class="btn btn-default"  data-dismiss="alert"  >稍后处理</button>
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">服务器状态</div>
          <div class="panel-body">
            <p>内存使用率：40%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"></div>
            </div>
            <p>数据库使用率：20%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"></div>
            </div>
            <p>磁盘使用率：60%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
            </div>
            <p>CPU使用率：80%</p>
            <div class="progress">
              <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"></div>
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
          <div style="padding: 10px;">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 主体 -->
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style>
  .mod-home {
    line-height: 1.5;
  }
</style>

