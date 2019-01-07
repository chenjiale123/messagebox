<template>
  <div id="news">
    <!-- <table>
      <thead>
        <th>
          <tr>id</tr>
        </th>
        <th>
          <tr>时间</tr>
        </th>
        <th>
          <tr>标题</tr>
        </th>
        <th>
          <tr>内容</tr>
        </th>
         <th>
          <tr>操作</tr>
        </th>
      </thead>
      <tbody v-for="(item,index) in tableData" :key="index">
        <td>
          <tr>{{item.chatId}}</tr>
        </td>
        <td>
          <tr>{{item.createDate}}</tr>
        </td>
        <td>
          <tr>{{item.title}}</tr>
        </td>
        <td>
          <tr>{{item.body}}</tr>
        </td>
        <td>
   <router-link :to={path:/NewView/+item.chatId}> <button>查看</button></router-link>       
          <button>删除</button>
        </td>
      </tbody>
    </table> -->
    <h1>聊天室</h1>
    <div v-for="(item,index) in tableData" :key="index" class="com">
      <span> {{item.createDate}}</span>
      <div class="content">
        <h2>{{item.title}}</h2>
        <p>{{item.body}}</p>
   <router-link :to={path:/NewView/+item.chatId}> <button>查看</button></router-link>       

      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
 
    getNewsList() {
      this.axios.get("http://chenjiale.gz01.bdysite.com/api/getChatList.php").then(res => {
        this.tableData = res.data;
        // console.log(res.data);
      });
    }
  },
  created() {
    this.getNewsList();
  }
};
</script>
<style scoped>
#news {
  /* margin-left: 20%; */
  width: 900px;
  height: 900px;
  float: left;
  margin-top: 50px;
  margin-left: 10px;
}

/* table th{
 border: 1px solid #eee;
}
table td{
 border: 1px solid #eee;
 width: 200px;

} */
#news h1{
  font-size: 20px;

}
#news .com{
  width: 600px;
  height: 200px;
  position: relative;
  margin-top: 30px;
  background: #fff;
  border:1px solid #eee;
}
#news .com span{
width: 80px;
height: 50px;
display: inline-block;
background: rgb(49, 240, 91);
color: #fff;
text-align: center;

}
#news .com .content{
  width: 500px;
  margin-left: 20px;
  height: 100%;
  float: left;
  
}
button{
  width: 50px;
  height: 30px;
  background: green;
  color: #fff;
  text-align: center;
}
</style>

