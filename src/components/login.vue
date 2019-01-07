<template>
    <div id="login">
       
  
    <div class="mian">

        <div class="zc">
            <label for="">账号：</label>
          <el-input v-model="user.username" placeholder="请输入账号"></el-input>
             <label for="">密码 ：</label>
          <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
           <el-button type="success" plain  @click="denglu">登陆</el-button>
            <router-link to="/register"><el-button type="success" plain >注册 </el-button></router-link>

        </div>
    </div>
    </div>

</template>


<script>
import qs from 'qs'
  export default {
    data() {
      return {
          user:{
      username:'',
      password:'',
      send:1,
      userId:""
    //   userId=''
      }
      }
    },
    methods: {
     denglu(){
         var data=qs.stringify(this.user)
        this.$cookies.set('username',this.user.username, 3600) 
                this.$cookies.set('userId',this.user.userId, 3600) 
         this.axios.post('http://chenjiale.gz01.bdysite.com/api/loginSave.php',data)
         .then(res=>{
            //  alert(res.data.message)
             if(res.data.valid){
                 this.$router.push('/')
                 location.reload()
             
                
             }
         })
     },
      comm() {
    
      this.axios.get("http://chenjiale.gz01.bdysite.com/api/getchatAll.php")
      .then(res => {
        let data = res.data.message;
        // console.log(data);
        // console.log(this.$cookies.get("username"))
        data.forEach(val => {
          if (val.userName == this.$cookies.get("username")) {
            this.user.userId = val.userId;
            //  console.log(this.userId);
          }
        
        })
      })
    }
  },
  created() {
      this.comm()
     this. denglu()
  },
  }
</script>
<style scoped>
#sidebar{
    width: 250px;
    float: left;
}
#login{
    width: 800px;
    height: 500px;
    float: left;
}
.mian{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0);
    left: 0;
    top: 0;
    z-index: 999;
}
.zc{
    width: 300px;
    height: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
     margin-top: -125px;
     background: rgb(221, 221, 221);
     z-index: 99999999;

}
label{
  line-height: 80px;
  margin-left: 5px;

}
.el-input{
    width: 80%;
    float: right;
     margin-top: 25px;
    
}
.el-button{
    margin-left: 60px;
}
</style>


