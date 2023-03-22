<template>
  <div class="main-wrapper">

    <!--布局-->
    <el-container>
      <!--左导航-->
      <el-aside width="200px">
        <!--Logo部分-->
        <div class="aside-logo-wrapper">
          <!--@标识src下-->
          <img src="../../assets/logo.png" alt="">
          <span>Crm管理系统</span>
        </div>
        <!--导航菜单-->

        <el-scrollbar>
          <el-menu
              active-text-color="#F56C6C"
              text-color="#606266"
              default-active="1">
            <!--导航头-->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">系统首页</span>
            </el-menu-item>

            <!--商品相关-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品相关</span>
              </template>
              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">品牌管理</span>
              </el-menu-item>
              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">分类管理</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>


            </el-submenu>

            <!--员工相关-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>员工相关</span>
              </template>
              <el-menu-item index="3-1">
                <i class="el-icon-menu"></i>
                <span slot="title">部门管理</span>
              </el-menu-item>
              <el-menu-item index="3-2">
                <i class="el-icon-menu"></i>
                <span slot="title">员工管理</span>
              </el-menu-item>
            </el-submenu>

            <!--系统管理-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item index="4-1">
                <i class="el-icon-menu"></i>
                <span slot="title">角色管理</span>
              </el-menu-item>
              <el-menu-item index="4-2">
                <i class="el-icon-menu"></i>
                <span slot="title">权限管理</span>
              </el-menu-item>

              <!--日志相关-->
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>日志相关</span>
                </template>
                <el-menu-item index="5-1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">登录日志</span>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">操作日志</span>
                </el-menu-item>
              </el-submenu>

            </el-submenu>

          </el-menu>
        </el-scrollbar>

      </el-aside>
      <!--右导航-->
      <el-container>
        <!--右导航头-->
        <el-header>我是右导航的头crm 管理系统</el-header>
        <!--右主题内容-->
        <el-main>

          <!--动态渲染-->
          <div class="main-box">
            <router-view/>
          </div>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="scss">

.main-wrapper {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;


.aside-logo-wrapper {
  text-align: center;
  background-color: #B3C0D1;
  height: 60px;
  line-height: 60px;

img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
}

span {
  font-weight: 700;
  color: #fff;
  font-family: "华文行楷";
}


}


}

.el-scrollbar {
  height: calc(100% - 60px);
}

.el-main {
  background-color: #E9EEF3;
  color: #606266;
  padding: 6px 0 0 6px;

.main-box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 15px 0px 0px 15px;
  box-sizing: border-box;
}


}

.el-container {
  height: 100%;
}
</style>