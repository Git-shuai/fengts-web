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
              <el-input type="textarea" :rows="5" placeholder="欢迎提出建议和问题，共同学习" v-model="textarea"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button class="block-textarea" type="success" @click="submitForm('ruleForm')">提交评论</el-button>
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
          <div>
            <div class="message-title">
              <!--            头像-->
              <div>
                <div class="avatar-block">
                  <el-avatar shape="circle" :size="60" :src="require('../../assets/wechar.jpg')"></el-avatar>
                </div>
                <span class="name-block">用户名</span>
              </div>
              <!--            回复功能-->
              <div></div>
            </div>
            <!--            内容-->
            <div class="message-content">回复内容回复内容回复内容回复内容回复内容</div>
            <!--            提示-->
            <div>
              <!--              时间-->
              <div class="time-block">发布于{{ new Date() }}</div>
              <!--              链接-->
              <div class="pull-right link-block">
                <a class="a-class" >赞(1)</a>
                <a class="a-class" @click="isShowReply">回复(12)</a>
              </div>
            </div>

            <div class="reply-block" v-if="isShow">
              <div>
                <div class="reply-title">
                  <!--            头像-->
                  <div>
                    <span class="name-block">用户名:</span><span>内容内容内容内容内容</span>
                  </div>
                  <!--              时间-->
                  <div class="time-block">发布于{{ new Date() }}</div>
                  <!--              链接-->
                  <div class="pull-right link-block">
                    <a class="a-class">赞(1)</a>
                    <a class="a-class" @click="isShowReplyInputStatus">回复(12)</a>
                  </div>
                  <div v-if="isShowReplyInput" class="reply-input">
                    <el-form status-icon class="demo-ruleForm">
                      <el-form-item>
                        <div class="block-textarea">
                          <el-input type="textarea" :rows="1" :placeholder="`回复${isShowReplyInput}`" v-model="textarea"></el-input>
                        </div>
                      </el-form-item>
                      <el-form-item>
                        <el-button class="pull-right" size="small" type="success" @click="submitForm('ruleForm')">提交评论
                        </el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
                <el-divider style="margin: 0 20px"></el-divider>
              </div>
              <div>
                <div class="reply-title">
                  <!--            头像-->
                  <div>
                    <span class="name-block">用户名:</span><span>内容内容内容内容内容</span>
                  </div>
                  <!--              时间-->
                  <div class="time-block">发布于{{ new Date() }}</div>
                  <!--              链接-->
                  <div class="pull-right link-block">
                    <a class="a-class">赞(1)</a>
                    <a class="a-class" @click="isShowReplyInputStatus">回复(12)</a>
                  </div>
                  <div v-if="isShowReplyInput" class="reply-input">
                    <el-form status-icon class="demo-ruleForm">
                      <el-form-item>
                        <div class="block-textarea">
                          <el-input type="textarea" :rows="1" :placeholder="`回复${isShowReplyInput}`" v-model="textarea"></el-input>
                        </div>
                      </el-form-item>
                      <el-form-item>
                        <el-button class="pull-right" size="small" type="success" @click="submitForm('ruleForm')">提交评论
                        </el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
                <el-divider style="margin: 0 20px"></el-divider>
              </div>
              <div>
                <div class="reply-title">
                  <!--            头像-->
                  <div>
                    <span class="name-block">用户名:</span><span>内容内容内容内容内容</span>
                  </div>
                  <!--              时间-->
                  <div class="time-block">发布于{{ new Date() }}</div>
                  <!--              链接-->
                  <div class="pull-right link-block">
                    <a class="a-class">赞(1)</a>
                    <a class="a-class" @click="isShowReplyInputStatus">回复(12)</a>
                  </div>

                  <div v-if="isShowReplyInput" class="reply-input">
                    <el-form status-icon class="demo-ruleForm">
                      <el-form-item>
                        <div class="block-textarea">
                          <el-input type="textarea" :rows="1" :placeholder="`回复${isShowReplyInput}`" v-model="textarea"></el-input>
                        </div>
                      </el-form-item>
                      <el-form-item>
                        <el-button class="pull-right" size="small" type="success" @click="submitForm('ruleForm')">提交评论
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
                      <el-input type="textarea" :rows="1" placeholder="请输入你的观点" v-model="textarea"></el-input>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="pull-right" size="small" type="success" @click="submitForm('ruleForm')">提交评论
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

export default {
  name: "index",
  components: {
    Footer
  },
  data() {
    return {
      textarea: '',
      isShow: false,
      isShowReplyInput: false//后期换成对象中的字段，每个对象都不一样所以就可以分开控制
    }
  },
  methods: {
    isShowReply(){
      //加载回复数据
      //显示回复窗口
      this.isShow = !this.isShow;
    },
    isShowReplyInputStatus(){
      this.isShowReplyInput=!this.isShowReplyInput;
    }

  }
}
</script>

<style lang="scss" scoped>
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
