<template>
  <div class="container">
    <div class="row" style="margin-bottom: 5px;">
      <el-row>
        <el-col :span="14">
          <div>
            <el-button type="primary"><i class="el-icon-delete el-icon--left"></i>删除</el-button>
          </div>
        </el-col>
        <el-col :span="10">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="我的分享" value="1"></el-option>
              <el-option label="收到分享" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="row">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-share"></i> 我的分享</span>
          <div>
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
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-on"></i> 收到分享</span>
          <div>
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
          </div>
        </el-tab-pane>
      </el-tabs>
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
  .mod-home {
    line-height: 1.5;
  }
</style>

