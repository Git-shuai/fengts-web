<template>
  <div>
    <div class="message-main">
      <el-card class="input-block">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px;font-weight: bold">留言板</span>
        </div>

        <el-form status-icon class="demo-ruleForm">
          <el-form-item>
            <div class="block-textarea">
              <el-input type="textarea" :rows="5" placeholder="欢迎提出建议和问题，共同学习" v-model="oneReply.content"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="block-mail">
              <el-input size="small" placeholder="请输入内容" v-model="oneReply.mailAddress" class="input-with-select">
                <template slot="prepend">邮箱</template>
                <el-select size="small" v-model="oneReply.mailAddressPrepend" slot="append">
                  <el-option label="@163.com" value="@163.com"></el-option>
                  <el-option label="@qq.com" value="@qq.com"></el-option>
                  <el-option label="@gmail.com" value="@gmail.com"></el-option>
                </el-select>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="block-textarea" size="mini" type="success" @click="addReply()">提交评论</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <el-card class="message-block">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px;font-weight: bold">留言区</span>
        </div>
        <!--        留言区-->
        <div>
          <!--          每一个回复-->
          <div v-for="item in replyList" :key="item.id">
            <div class="message-title">
              <!--            头像-->
              <div>
                <div class="avatar-block">
                  <el-avatar shape="circle" :size="60" :src="require('../../assets/wechar.jpg')"></el-avatar>
                </div>
                <span class="name-block">{{ item.username }}</span>
              </div>
              <!--            回复功能-->
              <div></div>
            </div>
            <!--            内容-->
            <div class="message-content">{{ item.content }}</div>
            <!--            提示-->
            <div>
              <!--              时间-->
              <div class="time-block">发布于{{ item.createTime }}</div>
              <!--              链接-->
              <div class="pull-right link-block">
<!--                <a class="a-class" >赞({{ item.praiseNum }})</a>-->
                <a class="a-class" @click="isShowReply(item)">回复({{item.sum}})</a>
              </div>
            </div>
            <!-- 回复留言-->
            <div class="reply-block" v-if="item.replyStatus">
              <div v-for="item2 in item.reply2List" :key="item2.id">
                <div class="reply-title">
                  <!--            头像-->
                  <div>
                    <span class="name-block">{{ item2.username }}:</span><span>{{ item2.content }}</span>
                  </div>
                  <!--              时间-->
                  <div class="time-block">发布于{{ item2.createTime }}</div>
                  <!--链接-->
                  <div class="pull-right link-block">
<!--                    <a class="a-class">赞({{ item2.praiseNum }})</a>-->
                    <a class="a-class" @click="isShowReplyInputStatus(item2)">回复</a>
                  </div>
                  <!--回复留言的留言-->
                  <div v-if="item2.replyStatus" class="reply-input">
                    <el-form status-icon class="demo-ruleForm">
                      <el-form-item>
                        <div class="block-textarea">
                          <el-input type="textarea" :rows="1" :placeholder="`回复`"
                                    v-model="threeReply.content"></el-input>
                        </div>
                      </el-form-item>
                      <el-form-item>
                        <div class="block-mail">
                          <el-input size="small" placeholder="请输入内容" v-model="threeReply.mailAddress" class="input-with-select">
                            <template slot="prepend">邮箱</template>
                            <el-select size="small" v-model="threeReply.mailAddressPrepend" slot="append">
                              <el-option label="@163.com" value="@163.com"></el-option>
                              <el-option label="@qq.com" value="@qq.com"></el-option>
                              <el-option label="@gmail.com" value="@gmail.com"></el-option>
                            </el-select>
                          </el-input>
                        </div>
                      </el-form-item>
                      <el-form-item>
                        <el-button class="pull-right" size="small" type="success" @click="addReply(item,item2)">提交评论
                        </el-button>
                      </el-form-item>
                    </el-form>
                  </div>

                </div>
                <el-divider style="margin: 0 20px"></el-divider>
              </div>
              <!--回复功能实现-->
              <div class="reply-input">
                <el-form status-icon class="demo-ruleForm">
                  <el-form-item>
                    <div class="block-textarea">
                      <el-input type="textarea" :rows="1" placeholder="请输入你的观点" v-model="twoReply.content"></el-input>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <div class="block-mail">
                      <el-input size="small" placeholder="请输入内容" v-model="twoReply.mailAddress" class="input-with-select">
                        <template slot="prepend">邮箱</template>
                        <el-select size="small" v-model="twoReply.mailAddressPrepend" slot="append">
                          <el-option label="@163.com" value="@163.com"></el-option>
                          <el-option label="@qq.com" value="@qq.com"></el-option>
                          <el-option label="@gmail.com" value="@gmail.com"></el-option>
                        </el-select>
                      </el-input>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="pull-right" size="small" type="success" @click="addReply(item,undefined)">提交评论
                    </el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>

            <el-divider></el-divider>
          </div>
        </div>
      </el-card>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../../components/footer"
import {addReply, selectReplyListParentIsNotNull, selectReplyListParentIsNull} from "api/reply";

export default {
  name: "index",
  components: {
    Footer
  },
  data() {
    return {
      //保存一下一级留言的ID
      oneId: '',
      replyList: [],
      oneReply:{
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      },
      twoReply:{
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      },
      threeReply:{
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      },
    }
  },
  created() {
    this.selectReplyList();
  },
  methods: {
    //加载次级留言
    selectReplyListParentIsNotNull(row){
      //加载回复数据
      let data = {
        "replyId": row.id
      };
      selectReplyListParentIsNotNull(data).then(response => {
        row.reply2List = response.data.data;
        this.$forceUpdate();
      }).catch()

    },
    isShowReply(row) {
      this.oneId=row.id;
      this.selectReplyListParentIsNotNull(row);
      //显示回复窗口
      if (row.replyStatus === 1) {
        row.replyStatus = 0;
      } else {
        row.replyStatus = 1;
      }
      this.$forceUpdate();
    },
    isShowReplyInputStatus(row)  {
      if (row.replyStatus === 1) {
        row.replyStatus = 0;
      } else {
        row.replyStatus = 1;
      }
      this.$forceUpdate();
    },
    clearInfo(){
      this.oneReply={
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      };
      this.twoReply={
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      };
      this.threeReply={
        content: '',
        mailAddress: '',
        mailAddressPrepend: '@163.com',
      };
    },
    //添加留言
    addReply(onerow,perow) {
      let parentId='';
      let username='';
      let content='';
      if (onerow===undefined){
        content= this.oneReply.content;
        username=this.oneReply.mailAddress !== '' ? (this.oneReply.mailAddress + this.oneReply.mailAddressPrepend) : "默认用户";
      }else if(perow===undefined){
        content= this.twoReply.content;
        username=this.twoReply.mailAddress !== '' ? (this.twoReply.mailAddress + this.twoReply.mailAddressPrepend) : "默认用户";
        parentId=onerow.id;
      }else {
        content= this.threeReply.content;
        username=this.threeReply.mailAddress !== '' ? (this.threeReply.mailAddress + this.threeReply.mailAddressPrepend) : "默认用户";
        parentId=perow.id;
      }
      let data = {
        "parentId":parentId,
        "username": username,
        "content": content
      };
      addReply(data).then((response) => {
        this.$message.success(response.data.message)
        this.clearInfo();
        if (onerow===undefined){
          this.selectReplyList();
        }else {
          this.selectReplyListParentIsNotNull(onerow);
        }
      }).catch()

    },
    //加载留言
    selectReplyList() {
      selectReplyListParentIsNull().then((res) => {
        this.replyList = res.data.data;
        this.$forceUpdate();
      }).catch()
    }

  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-select .el-input {
  width: 130px;
}

.block-mail {
  width: 400px;
  margin: 5px;
}

.message-main {
  .input-block {
    margin-top: 30px;
    margin-left: 375px;
    margin-bottom: 20px;
    width: 60%;
  }

  .block-textarea {
    margin: 5px;
  }

  .message-block {
    width: 60%;
    margin-left: 375px;
    margin-bottom: 60px;
  }
}

.name-block {
  display: inline-block;
  line-height: 53px;
  margin-left: 20px;
  margin-right: 30px;
}

.avatar-block {
  margin-left: 20px;
  display: inline-block;
  float: left;
}

.message-content {
  margin: 20px 50px 20px 70px;
}

.time-block {
  color: #999;
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 10px;
}

.link-block {
  margin-right: 20px;
}

.a-class {
  color: #55a532;
  font-size: 12px;
  display: inline-block;
  margin-right: 12px;
  cursor: pointer;
}

.reply-block {
  background-color: #eff0f2;
  margin: 20px 90px 20px 90px;
}

.reply-title {

}

.reply-input {
  padding: 1px;
  margin: 10px 20px 0 10px;
}

/deep/ .el-card__body {
  padding: 10px;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}
</style>
