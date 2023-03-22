<template>
  <div class="brand-wrapper">
    <!-- 搜素-->
    <div class="search-form-box">
      <el-form :inline="true" :model="searchParams" class="demo-form-inline">
        <el-form-item label="品牌名称" size="mini">
          <el-input v-model="searchParams.brandName" placeholder="品牌名称"></el-input>
        </el-form-item>
        <el-form-item label="日期选项" size="mini">
          <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="left"
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="chooseTime"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item size="mini">
          <el-button type="primary" @click="selectByPage">查询</el-button>
          <el-button type="warning" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 按钮-->
    <div class="cud-box">
      <el-button type="primary" icon="el-icon-check" size="mini" @click="dialogVisible=true,formData={},imageUrl=''">新建</el-button>
      <el-button type="success" icon="el-icon-edit" size="mini" :disabled="idList.length!=1" @click="dialogVisible=true,findById()">修改</el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteByIds">删除</el-button>
    </div>
    <!--  table-->
    <div class="table-box">
      <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="selectionChange"
      >
        <el-table-column
            type="selection"
            width="55" align="center">
        </el-table-column>
        <el-table-column
            prop="brandName"
            label="品牌名称"
            width="180" align="center">
        </el-table-column>
        <el-table-column
            prop="brandDesc"
            label="品牌描述"
            width="180" align="center">
        </el-table-column>
        <el-table-column
            prop="brandSite"
            label="地址"  align="center">
          <template v-slot="obj">
            <a :href="obj.row.brandSite">{{obj.row.brandSite}}</a>
          </template>
        </el-table-column>
        <el-table-column
            prop="brandLogo"
            label="品牌LOGO" align="center">
          <template v-slot:="obj">
            <img :src="obj.row.brandLogo">
          </template>
        </el-table-column>
        <el-table-column
            prop="address"
            label="操作"  align="center">

          <template v-slot="obj">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible=true,id=obj.row.id,findById()">修改</el-button>
            <!--点击删除，弹框确认，方可删除-->
            <el-popconfirm
                confirm-button-text='确定'
                cancel-button-text='取消'
                icon="el-icon-info"
                icon-color="red"
                title="真的确定删除吗？"
                @confirm="deleteById"
            >
              <el-button slot="reference" type="danger" icon="el-icon-check" size="mini"  @click="id=obj.row.id">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
   <!--分页 -->
    <div class="page-box">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="currentChange"
          :current-page="searchParams.currentPage"
          :page-size="searchParams.pageSize"
      >
      </el-pagination>
    </div>
    <!--对话框-->
    <div class="dialog-box">
      <el-dialog title="创建品牌"
          :visible.sync="dialogVisible"
          width="30%">
        <el-form ref="form" :model="formData" label-width="80px">
          <el-form-item label="品牌名称">
            <el-input placeholder="品牌名称" v-model="formData.brandName"></el-input>
          </el-form-item>
          <el-form-item label="品牌描述">
            <el-input placeholder="品牌描述" v-model="formData.brandDesc"></el-input>
          </el-form-item>
          <el-form-item label="品牌网址">
            <el-input placeholder="品牌网址" v-model="formData.brandSite"></el-input>
          </el-form-item>
          <el-form-item label="品牌LOGO">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :http-request="getBase64Str"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false,saveOrUpdateBrand()" >确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script src="./index.js">
</script>
<style scoped src="./index.css">
</style>