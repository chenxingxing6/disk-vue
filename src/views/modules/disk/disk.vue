<template>
  <div class="container">
    <div class="row">
      <el-row>
        <el-col :span="14">
          <div>
            <el-button type="primary"><i class="el-icon-upload el-icon--left"></i>上传</el-button>
            <el-button><i class="el-icon-delete el-icon--left"></i>删除</el-button>
            <el-button><i class="el-icon-share el-icon--left"></i>分享</el-button>
            <el-button><i class="el-icon-sort el-icon--left"></i>移动</el-button>
            <el-button icon="el-icon-circle-plus-outline">新建文件夹</el-button>
          </div>
        </el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="文件名" value="1"></el-option>
              <el-option label="大小" value="2"></el-option>
              <el-option label="修改日期" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="row">
        <el-row>
          <el-col :span="24">
            <div class="panel-heading">
              <el-breadcrumb separator-class="el-icon-arrow-right" class="tab-font">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>全部文件</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <el-table
              ref="multipleTable"
              border
              :data="tableData3"
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
        <div class="row" style="text-align: center;">
          <br>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
          <br>
        </div>
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
</style>
