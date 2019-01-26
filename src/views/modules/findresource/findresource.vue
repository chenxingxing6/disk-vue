<template>
  <div class="container site-content">
    <div class="row">
      <div class="col-md-12">
        <div class="alert alert-danger alert-dismissible fade in" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span>
          </button>
          <h4>搜索到的结果如下：</h4>
          <p>共有23条记录...</p>
          <p>
            <button type="button" class="btn btn-danger" data-dismiss="alert">我知道了</button>
          </p>
        </div>
      </div>
    </div>
    <el-row>
      <el-col :span="24">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="文件类型">
            <el-option label="图片" value="1"></el-option>
            <el-option label="文档" value="2"></el-option>
            <el-option label="视频" value="3"></el-option>
            <el-option label="音乐" value="3"></el-option>
            <el-option label="其他" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <div class="row">
      <div class="col-md-12">
        <el-row>
          <el-col :span="24">
            <el-table
              ref="multipleTable"
              :data="tableData3"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                fixed
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="文件名"
                width="280">
                <template slot-scope="scope">
                  <i class="el-icon-document"></i>
                  <span style="margin-left: 10px" @click="handleSelect(scope.$index, scope.row)" class="a-click">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="大小"
                width="150">
              </el-table-column>
              <el-table-column
                prop="address"
                label="修改日期"
                show-overflow-tooltip>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </div>
    </div>
    <br>
    <div class="row" style="text-align: center;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        select: '',
        tableData3: [{
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }, {
          date: '我的资源',
          name: '-',
          address: '2018-10-12'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleSelect (index, row) {
        console.log(row.name)
        console.log(index, row)
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

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

  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .a-click:hover {
    color: blue;
    cursor: pointer;
  }

  .tab-font {
    font-size: 10px;
  }

  .el-card__body {
    padding: 0px;
  }
</style>
