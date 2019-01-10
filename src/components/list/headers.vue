<template>
  <div id="headers">
      
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
   <img src="../../assets/logo.png" alt=""  index="1" class="top">
   <router-link to="/index"><el-menu-item index="2">主页</el-menu-item></router-link>   
      <el-submenu index="3">
        <template slot="title">我的工作台</template>
      <router-link to="/user"> <el-menu-item index="3-1">用户管理</el-menu-item></router-link> 
      <router-link to="/news">  <el-menu-item index="3-2">新闻管理</el-menu-item></router-link> 
       <router-link to="/adduser"> <el-menu-item index="3-3">用户添加</el-menu-item></router-link>
       <router-link to="/addnews"><el-menu-item index="3-4">新闻添加</el-menu-item></router-link> 
      </el-submenu>
      <el-menu-item index="4">消息中心</el-menu-item>
       <el-submenu index="5">
        <template slot="title">{{username}}</template>
 <router-link to="/person"> <el-menu-item >我的资料</el-menu-item></router-link> 
 <router-link to="/login">  <el-menu-item index="" @click="exit">退出管理</el-menu-item></router-link> 
      
      </el-submenu>
      <el-row>
    <router-link to="./login"><el-button type="info">登陆</el-button></router-link>    
      <router-link to="./register"><el-button type="info">注册 </el-button></router-link>  
      <!-- <el-button type="info">{{username}} </el-button> -->
     
      </el-row>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      username:$cookies.get('username')?$cookies.get('username'):'未登陆'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    exit(){
      this.$cookies.remove('username')
      // location.reload()
    }
  }
};
</script>
<style scoped>
#headers {
  margin: 0;
  padding: 0;
}
el-menu {
  margin: 0;
  padding: 0;
}
.el-row{
    width: 310px;
    float: right;
    margin-top: 10px;

}
.el-button{
 float: left;
 margin-left: 20px;
}
.top{
    width: 30px;
    height: 30px;
    float: left;
    margin-left: 100px;
    /* line-height: 30px; */
    margin-top: 10px;
}
.el-menu-item{
    width: 80px;
    float: left;
}
.el-submenu__title i {
  color: red ;
}
</style>
