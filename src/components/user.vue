<template>
  <div id="user">
    <table>
      <thead>
        <th>
          <tr>id</tr>
        </th>
        <th>
          <tr>用户名</tr>
        </th>
        <th>
          <tr>权限</tr>
        </th>
        <th>
          <tr>电话</tr>
        </th>
        <th>
          <tr>操作</tr>
        </th>
      </thead>
      <tbody v-for="(item,index) in tableData" :key="index">
        <td>
          <tr>{{item.userId}}</tr>
        </td>
        <td>
          <tr>{{item.userName}}</tr>
        </td>
        <td>
          <tr>{{item.userLevel == 0 ? '管理员':'普通用户'}}</tr>
        </td>
        <td>
          <tr>{{item.phoneNumber}}</tr>
        </td>
        <td>
          <button>编辑</button>
          <button @click="del(item.userId)">删除</button>
        </td>
      </tbody>
    </table>
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
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api/getUser.php")
        .then(res => {
          this.tableData = res.data;
          console.log(res.data);
        });
    },
    del(index) {
      if (confirm("你确定要删除本条信息吗？")) {
        this.axios.get('http://chenjiale.gz01.bdysite.com/api/deleteUser.php',{params: {
     userid:index
    }})

        .then((res)=>{
          console.log(res)
          this.tableData.splice(this.index,1)
        })
      } else {
      }
      // console.log( index)
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
  width: 1000px;
  height: 900px;
  float: left;
  margin-top: 50px;
  margin-left: 10px;
}

table th {
  border: 1px solid #eee;
}
table td {
  border: 1px solid #eee;
  width: 200px;
}
</style>

