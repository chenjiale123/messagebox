<template>
  <div id="register">
    <div class="mian">
      <div class="zc">
        <div class="input">
          <input type="file" @change="upload($event)">
          <img :src="baseData.src" style="width:100px;height:100px">
          <input type="hidden" v-model="baseData.src">
        </div>
        <div class="item">
        <label for>输入 账号：</label>
        <el-input v-model="username" placeholder="请输入账号"></el-input>
        <label for>输入密码 ：</label>
        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>

        <router-link to="/"><el-button type="success" plain>取消</el-button> </router-link>
        <el-button type="success" plain @click="res">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import qs from 'qs'
export default {
  data() {
    return {
      username: "",
      password: "",
     
      baseData: {
  
       
       src:require('../assets/logo.png')
     
      }
    };
  },
  methods: {
    upload(e) {
      var that = this;
      console.log(that,this)
      var file = e.target.files[0];
      console.log(file)
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        console.log(this);
        that.baseData.base = e.target.result;
        that.baseData.src = reader.result;
     
      };
    },
    res() {
      let obj={
        send:1,
        userAvatar:this.baseData.src,
        username:this.username,
          password:this.password
      }
       let data=qs.stringify(obj)
      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api/registerSave.php", data)
        .then(res => {
         alert(res.data.message);
         if(res.data.valid==false){
           this.$router.push('./register')
         }else{
this.$router.push('./login')
         }
         
        });
    }
  }
};
</script>
<style scoped>
#sidebar {
  width: 250px;
  float: left;
}
#register {
  width: 800px;
  height: 500px;
  float: left;
}
.mian {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0);
  left: 0;
  top: 0;
  z-index: 999;
}
.zc {
  width: 500px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -125px;
  background: rgb(221, 221, 221);
  z-index: 99999999;
}
label {
  line-height: 80px;
  margin-left: 5px;
}
.item{
  margin-top: 80px;
}
.el-input {
  width: 80%;
  float: right;
  margin-top: 25px;
}
.el-button {
  margin-left: 100px;
}
.kyc {
  width: 100px;
  height: 100px;
}
.input{
  position: relative;
}
.input  input{
opacity: 0;
position: absolute;
left: 195px;
top: 20px;
z-index: 100;
width: 80px;
height: 50px;


}
.input img{
  position: absolute;
  left: 50%;
  margin-left: -50px;
}
</style>


