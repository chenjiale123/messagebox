<template>
  <div class="newview">
    <div class="wrap view">
      <ul class="comments">
        <h1>聊天评论内容</h1>
        <li v-for="(val,index) in newsview" :key="index">
          <div class="card">
            <div class="card-header">
              <h4 class="card-header-title">
                <div class="userAvatar">
                  <img v-if="val.userAvatar!=null" :src="userAvatar+val.userAvatar" alt>
                </div>
                <h3 class="userName">
                  <em>{{ val.userName }}</em>
                  <em>{{ val.createTime }}</em>
                </h3>
              </h4>
            </div>
            <div class="card-body" v-html="val.chatBody"></div>
          </div>
        </li>
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
        <button class="byn" @click="puc">评论</button>
        <h6 v-if="commentslength>newsview.length" class="onloadMore" @click="onloadmore()">加载更多</h6>
        <h6 v-else-if="commentslength==0" class="onloadMore">我是有底线的</h6>
      </ul>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import qs from "qs";

export default {
  name: "newview",
  components: {
    quillEditor
  },
  data() {
    return {
      content: "",
      editorOption: {},
      id: this.$route.params.id,
      userId: "",
      newsview: [],
      commentslength: 0,
      newsContent: {},
      userAvatar: "https://wx.hzbiz.net/",
      start: 0,
      end: 10,
      
    };
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件

    comm() {
      // if(this.$cookies.get('username')){

      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api/getchatAll.php")
        .then(res => {
          let data = res.data.message;
          // console.log(data);
          // console.log(this.$cookies.get("username"))
          data.forEach(val => {
            if (val.userName == this.$cookies.get("username")) {
              this.userId = val.userId;
              //  console.log(this.userId);
            }
          });
        });

      // } else{
      //   alert('你还没有登录')
      //   this.$router.push('/login')
      // }
    },
    puc() {
      let obj = {
        chatId: this.id,
        content: this.content,
        userId: this.userId
      };
      let fu = qs.stringify(obj);
      // console.log(fu);
      this.axios
        .post("http://chenjiale.gz01.bdysite.com/api/messageAdd.php", fu)
        .then(res => {
          if (res.data.valid) {
            alert("添加成功");
          } else {
          }
          this.getChatall(this.start, this.end);
        });
    },
   onloadmore() {
      let more = 10;
      if (this.commentslength - this.newsview.length < 10) {
        more = this.commentslength - this.newsview.length;
      }
      this.end = this.end += more;
      this.getChatall(0, this.end);
    },
    getChatall(start, end) {
      start == "" ? 0 : parseInt(start);
      end == "" ? 10 : parseInt(end);
      this.axios
        .get("http://chenjiale.gz01.bdysite.com/api/getchatAll.php?chatId=" + this.id)
        .then(res => {
          // reverse
          this.commentslength = res.data.message.length;
          this.newsview = res.data.message.reverse().splice(start, end);
          this.newsContent = this.newsview[0];
        });
    }
  },
  created() {
    this.getChatall(this.start, this.end);

    this.comm();
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>

<style scoped>
.view {
  width: 1000px;
  margin-top: 25px;
}
.comments {
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  background: rgb(255, 255, 255);
  padding: 15px;
}
.comments h1 {
  font-size: 13px;
  font-weight: normal;
  margin-bottom: 35px;
  padding: 10px;
  border-bottom: 1px solid rgb(92, 163, 22);
  color: rgb(92, 163, 22);
}
.comments li {
  height: auto;
}
.card {
  background: rgb(255, 255, 255);
  border: 1px solid #eee;
}
.card-body {
  min-height: 120px;
  font-size: 20px;
  text-align: center;
}
.card-header-title {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  padding: 15px 15px;
}
.comments .userAvatar {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0px 15px 0 0;
  box-shadow: 0px 0px 5px slategray;
}
.comments .userAvatar img {
  width: 100%;
}
.comments .userName {
  font-size: 14px;
  font-weight: normal;
  display: flex;
  width: calc(100% - 50px);
  justify-content: space-between;
}
.comments .userName em {
  font-style: normal;
  margin-right: 15px;
  line-height: 50px;
}
.comments .userName em:first-child {
  font-size: 17px;
  color: teal;
}
.onloadMore {
  text-align: center;
  font-size: 15px;
  background: rgb(25, 99, 2);
  border-radius: 5px;
  width: 150px;
  padding: 15px 0;
  color: #fff;
  cursor: pointer;
  margin: 15px auto;
}
.onloadMore:hover {
  background: rgba(125, 199, 0, 1);
}
.byn {
  background: rgb(25, 99, 2);
  height: 25px;
  border: 1px solid rgb(25, 99, 2);
  color: #fff;
}
</style>