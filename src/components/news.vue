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
      <div class="top">
          <h1>聊天评论内容</h1>
        <input type="text" placeholder="搜索" v-model="search"/> 
  	<!-- <button @click="btn">搜索</button> -->
        </div>
    <div v-for="(item,index) in table" :key="index" class="com">
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
      // search:'',
      search:"",
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
  computed:{
  	table:function(){
  		return this.tableData.filter((item) =>{
  			return item.title.match(this.search);
  		})
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
  position: relative;
}
.top{
  width: 100%;
  height: 80px;
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
 text-align: left;

}
#news input{
  position: absolute;
/* float: right; */
  width: 200px;
  height: 50px;
  left: 400px;
  top: 15px;
}
#news .top> button{
  width: 50px;
  height: 52px;
  background: rgb(88, 253, 46);
  color: #fff;
  text-align: center;
  /* float: right; */
  position: absolute;
  left: 553px;
  top: -4px;
}
#news .com{
  width: 600px;
  height: 220px;
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
  width: 80px;
  height: 50px;
  background: rgb(54, 252, 54);
  color: #fff;
  text-align: center;
  margin-top: 20px;
  /* background: rgb(54, 252, 54); */
  border: 1px  solid rgb(54, 252, 54);

}
</style>

