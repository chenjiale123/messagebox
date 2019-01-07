<template>
  <div id="person">
    <div class="top">
      <img :src="userAvatar">
      <h2>{{username =='' ? '您未登录':username}}</h2>
      <p>{{userLevel == 0 ? '管理员':'普通用户'}}</p>
      <small>联系电话：{{phoneNumber}}</small>
    </div>
    <ul>
      <router-link to="/newchat">
        <li>
          <img src="../assets/fabu.png" alt>
          <span>发布新的聊天室</span>
        </li>
      </router-link>
      <li>
        <img src="../assets/xiugai.png" alt>
        <span @click="diss">修改信息</span>
        <div class="set" v-if="flg">
          <div class="set_in">
            <!-- <form action> -->
            <label for>输入手机号</label>
            <input type="text" placeholder="输入手机号" v-model="phone">
            <button @click="setout">修改</button>
            <button @click="setto">取消</button>
            <!-- </form> -->
          </div>
        </div>
      </li>
      <li>
        <img src="../assets/mima.png" alt>
        <span @click="xiu">修改密码</span>
        <div class="xiugai" v-if="flag">
          <div class="xiugai_in">
            <!-- <form action> -->
            <label for>输入原密码</label>
            <input type="text" placeholder="输入原密码" v-model="oldpass">
            <label for>输入修改后的密码</label>
            <input type="text" placeholder="输入修改后的密码" v-model="newpass">
             <label for>输入确认后的密码</label >
            <input type="text" placeholder="输入确认后的密码" v-model="querpass">
            <button @click="gai">修改</button>
            <button @click="setin">取消</button>
            <!-- </form> -->
          </div>
        </div>
      </li>
      <li>
        <img src="../assets/help.png" alt>
        <span>帮助说明</span>
      </li>
      <li>
        <img src="../assets/zhuxiao.png" alt>
        <span>注销账户</span>
      </li>
    </ul>
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "person",
  data() {
    return {
      username: "",
      userId: "",
      userAvatar: require("../assets/logo.png"),
      phoneNumber: "",
      phone:"",
      userAvatar: "",
      userLevel: "",
      flag: false,
      flg: false,
      value: "",
      oldpass:"",
      newpass:'',
      querpass:''
    };
  },
  created() {
    let obj = {
      userId: this.userId
    };
    let foo = qs.stringify(obj);
    this.axios
      .get("http://chenjiale.gz01.bdysite.com/api/getUser.php", foo)
      .then(res => {
        let data = res.data;
        console.log(res.data);
        //   console.log(this.$cookies.get("username"))
        data.forEach(val => {
          if (val.userName == this.$cookies.get("username")) {
            this.userId = val.userId;
            this.username = val.userName;
            this.userAvatar =
              "http://chenjiale.gz01.bdysite.com" + val.userAvatar.slice(2);
            this.userLevel = val.userLevel;
            this.phoneNumber = val.phoneNumber;
            console.log(this.userAvatar);
            // userAvatar,userLevel,phoneNumber
          }
          // console.log(this.username);
        });
      });
  },
  methods: {
    diss() {
      this.flg = !this.flg;
    },
    xiu() {
      this.flag = !this.flag;
    },
    setout() {
 
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api/editUserSave.php?send=1&&phoneNumber="+this.phone)
        .then(res => {
          console.log(res.data.message);
        });
    },
      gai() {
     let obj={
       send:1,
       oldPassword:this.oldpass,
       newPassword:this.newpass,
       checkPassword:this.querpass
     }
      let data=qs.stringify(obj)
     console.log(data)
      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api/password.php",data)
        .then(res => {
          console.log(res.data.message);
        });
    },
    setto() {
      this.flg = false;
    },
     setin() {
      this.flag = false;
    }
  }
};
</script>
<style scoped>
#person {
  width: 800px;
  height: auto;
  margin-left: 400px;
}
#person .top {
  width: 100%;
  height: 130px;
  position: relative;
  border: 1px solid #eee;
}
#person .top img {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50px;
  top: 30px;
}
#person .top h2 {
  font-size: 18px;
  position: absolute;
  left: 130px;
  top: 15px;
}
#person .top p {
  font-size: 15px;
  position: absolute;
  left: 130px;
  top: 50px;
}
#person .top small {
  font-size: 15px;
  /* font-size: 15px; */
  position: absolute;
  left: 130px;
  top: 90px;
}
#person ul {
  margin-top: 30px;
}
#person ul li {
  width: 100%;
  margin-top: 10px;
  box-shadow: 0px 1px #eee;
  height: 125px;
}
#person ul li img {
  width: 25px;
  height: 25px;
  margin-left: 50px;
  margin-top: 45px;
}
#person ul li span {
  margin-left: 20px;
  line-height: 130px;
  position: relative;
  /* top: px; */
}
.xiugai {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 160%;
  background: rgba(0, 0, 0, 0.7);
}
.xiugai_in {
  width: 300px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top:  -225px;
  margin-left: -150px;
  background: #fff;
  text-align: center;
}
.xiugai_in label {
  font-size: 16px;
  margin-top: 20px;
  display: inline-block;
}
.xiugai_in input {
  width: 70%;
  height: 50px;
  display: block;

  border-radius: 3px;
  margin: 15px auto;
}
.xiugai_in button {
  background: rgb(93, 255, 29);
  border: 1px solid rgb(93, 255, 29);
  width: 50px;
  color: #fff;
}
.set {
  position: absolute;
  top: 0;
  left: -100px;
  width: 100%;
  height: 150%;
  background: rgba(0, 0, 0, 0.7);
  margin-left: 100px;
}
.set_in {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -150px -150px;
  background: #fff;
  text-align: center;
}
.set_in label {
  font-size: 16px;
  margin-top: 20px;
  display: inline-block;
}
.set_in input {
  width: 70%;
  height: 50px;
  display: block;

  border-radius: 3px;
  margin: 15px auto;
}
.set_in button {
  background: rgb(93, 255, 29);
  border: 1px solid rgb(93, 255, 29);
  width: 50px;
  color: #fff;
}
a{
  color: #000;
}
</style>
