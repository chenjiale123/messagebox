<template>
  <div id="newchat">
    <!-- <form action=""> -->
    <label for>聊天室名称</label>
    <input type="text" placeholder="请输入聊天室名称" v-model="chat.title">
    <label for>聊天室介绍</label>
    <textarea name id cols="30" rows="10" v-model="chat.body" placeholder="请输入聊天室介绍"></textarea>
    <button @click="create">创建聊天室</button>
    <!-- </form> -->
  </div>
</template>
<script>
import qs from "qs";

export default {
  name: "newchat",
  data() {
    return {
      chat: {
        send: 1,
        title: "",
        body: ""
        //   createDate:""
      }
    };
  },
  methods: {
    create() {
      let data = qs.stringify(this.chat);

      console.log(data);
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api/chatAddSave.php?"+ data)
        .then(res => {
          console.log(res.data.message);
        });
    }
  }
};
</script>
<style scoped>
#newchat {
  width: 800px;
  height: auto;
  margin-left: 400px;
  margin-top: 50px;
}
#newchat label {
  font-size: 30px;
}
#newchat input {
  width: 100%;
  height: 50px;
  background: rgb(193, 238, 212);
  margin-top: 20px;
}
#newchat textarea {
  width: 100%;
  height: 100px;
  margin-top: 20px;
}
#newchat button {
  width: 100%;
  height: 30px;
  text-align: center;
  color: #fff;
  border: 1px solid rgb(5, 255, 18);
  background: rgb(5, 255, 18);
  margin-top: 30px;
}
</style>
