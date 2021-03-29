<template>
  <div>
    <div class="blog-info">
      <el-row :gutter="30">
        <el-col :span="7">
          <div class="wow bounceInLeft blog-left">
            <div class="user-info">
              <el-image class="ava-block" :src="squareUrl" :fit="'fit'"></el-image>
              <p class="p-name">大帅的网站</p>
              <el-divider></el-divider>
              <div class="font-left">
                <div>
                  <span>文章</span>
                  <p>{{ articleAndTag.blogCount }}</p>
                </div>
              </div>
              <div class="font-right ">
                <div>
                  <span>标签</span>
                  <p>{{ articleAndTag.tagsCount }}</p>
                </div>
              </div>
              <el-divider></el-divider>
              <!--      图标-->
              <div class="icon-group">
                <i class="icon icongithub2"></i>
                <i class="icon iconyouxiang1"></i>
                <i class="icon iconqq1"></i>
                <i class="icon iconweixin"></i>
              </div>
            </div>
            <div class="classify-block">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>分类专栏</span>
                </div>
                <div>
                  <div v-for="item in classifyList" class="classify-title" :key="item.id" @click="toClassify(item)">
                    <el-avatar class="avatar" shape="square" :size="27" :src="squareUrl"></el-avatar>
                    <span class="font-title">{{ item.classifyName }}</span>
                    <span class="font-num">{{ item.count }}篇</span>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class=" blog-center">
            <!--走马灯-->
            <div class="blog-content">
              <div class="blog-title">
                {{blogData.title}}
              </div>
              <div class="blog-info-div">
                <span>作者:{{ blogData.auth }}</span>
                <span>日期:{{ blogData.createTime }}</span>
                <span>阅读量:{{ blogData.readNum }}</span>
              </div>
              <el-divider></el-divider>
              <div class="classify-tag">
                <div class="back-classifyTag" v-for="item in blogData.classifyName" :key="item.id"><i class="icon iconcategory"></i>{{ item }}</div>
                <div class="back-classifyTag" v-for="item in blogData.tagName" :key="item.id"><i class="el-icon-collection-tag"></i>{{ item }}</div>
              </div>
              <div class="btn-original">
                <el-button v-if="true" size="mini" type="primary">原创</el-button>
                <el-button v-else-if="false" size="mini" type="success">翻译</el-button>
                <el-button v-else size="mini" type="info">转载</el-button>
              </div>
              <div class="blog-content-content clear">
                <mavon-editor
                    class="mavon-editor"
                    ref="md"
                    :subfield="false"
                    :defaultOpen="'preview'"
                    :toolbarsFlag="false"
                    :editable="false"
                    :scrollStyle="true"
                    :box-shadow="false"
                    :codeStyle="toolbarsOption.codeStyle"
                    :fontSize="toolbarsOption.fontSize"
                    :ishljs="true"
                    :toolbars="toolbarsOption"
                    v-model="blogData.content"
                />
              </div>

            </div>
<!--            <div class="comment-block">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>评论</span>
                </div>
                <div class="input-block">
                  <el-form status-icon>
                    <el-form-item>
                      <div class="block-textarea">
                        <el-input type="textarea" :rows="3" v-model="replyData.content"
                                  placeholder="欢迎提出建议和问题，共同学习"></el-input>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <div class="block-mail">
                        <el-input size="small" placeholder="例如:12345@163.com" v-model="replyData.address">
                          <template slot="prepend">邮箱</template>
                        </el-input>
                      </div>
                    </el-form-item>
                    <el-form-item>
                      <el-button class="block-textarea" size="mini" type="success" @click="toComment">提交评论</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </el-card>
            </div>
            <div class="comment-block">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>评论内容</span>
                </div>
                <div>
                  评论内容
                  评论内容
                  评论内容
                  评论内容
                </div>
              </el-card>
            </div>-->
          </div>
        </el-col>
        <el-col :span="7">
          <div class="wow bounceInRight blog-right">

            <div class="new-article">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>最新文章</span>
                </div>
                <div>
                  <div v-for="item in newArticleList" class="classify-title" :key="item.id" @click="toBlog(item)">
                    <el-avatar class="avatar" shape="square" :size="27" :src="squareUrl"></el-avatar>
                    <span class="font-title">{{ item.title }}</span>
                    <span class="font-num"><i class="el-icon-view eyes-i"></i>{{ item.readNum }}</span>
                  </div>

                </div>
              </el-card>
            </div>
<!--            <div class="tag-cloud">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>目录</span>
                </div>
                <div class="js-toc">
                </div>
              </el-card>
            </div>-->
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
        <div
            style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
        >
          TOP
        </div>
      </el-backtop>
    </div>
    <div>
      <Footer/>
    </div>

  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css"
import Footer from "@c/footer";
import {WOW} from "wowjs";
import {articleAndTagNum, classifyOfArticleNum, holdArticle, newArticle, tagCloud} from "api";
import { selectBlogByIdId} from "api/blog";
export default {
  name: "blogInfo",
  components: {
    Footer
  },
  mounted() {
    let wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 40,
      mobile: true,
      live: true,
    })
    wow.init();
  },
  data() {
    return {
      toolbarsOption: {
        background: "#fff",
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        // fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
        codeStyle: "atom-one-dark",
        fontSize: "15px",
      },
      squareUrl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      time: '2020-3-24',
      replyData: {
        content: '',
        address: '',
      },
      newArticleList: [],
      classifyList: [],
      articleAndTag: [],
      holeArticleList: [],
      blogId: this.$route.query.id,
      blogData: {}
    }
  },
  created() {
    this.newArticle();
    this.tagCloud();
    this.classifyOfArticleNum();
    this.articleAndTagNum();
    this.holdArticle();
    this.loadBlog(this.blogId);
  },
  watch: {
    $route() {
      this.loadBlog(this.$route.query.id);
    }
  },
  methods: {
    //加载博客
    loadBlog(val){
      let data={
        "blogId": val
      };
      selectBlogByIdId(data).then(res=>{
        this.blogData=res.data.data;
        console.log(res);
      }).catch()
    },
    //标签云
    tagCloud() {
      tagCloud().then((res) => {
        this.hotTag = res.data.data;
      }).catch()
    },
    newArticle() {
      newArticle().then((res) => {
        this.newArticleList = res.data.data.records;
      }).catch()
    },
    classifyOfArticleNum() {
      classifyOfArticleNum().then(res => {
        this.classifyList = res.data.data;
      }).catch()
    },
    articleAndTagNum() {
      articleAndTagNum().then(res => {
        this.articleAndTag = res.data.data;
      }).catch()
    },
    holdArticle() {
      holdArticle().then(res => {
        this.holeArticleList = res.data.data.records;
      }).catch()
    },

    toComment() {
      console.log(this.replyData)
    },
    toClassify(val) {
      this.$router.push({
        name: "classify",
        query: {
          "id": val.id
        }
      });
    },
    toBlog(val) {
      this.$router.push({
        name: "blogInfo",
        query: {
          "id": val.id
        }
      });
    },

  }
}
</script>

<style lang="scss" scoped>
.mavon-editor{
  min-height: 600px;
  padding-bottom: 30px;
}
.back-classifyTag{
  background-color: #ecefef;
  padding: 5px;
  border-radius: 5px;
}
.block-mail {
  width: 400px;
  margin: 5px;
}

.input-block {
  margin: 20px;
}

.comment-block {
  margin-top: 30px;
}

.classify-tag {
  float: left;
  margin: 10px 0 10px 30px;
  font-size: 14px;
  color: #656a6f;

  div {
    display: inline-block;

    i {
      margin-right: 5px;
    }

    margin-right: 10px;
  }
}

.classify-tag:hover {
  cursor: pointer;
}

.btn-original {
  float: right;
  margin: 10px;
}

.blog-content-content {
  margin: 20px;
}

.blog-info-div {
  margin-top: 10px;
  text-align: center;

  span {
    display: inline-block;
    margin: 20px;
    color: #949497;
  }
}

.blog-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
}


.blog-info {
  margin-top: 30px;
}

.clear {
  clear: both;
}

.blog-block {
  margin-top: 30px;

  .blog-left {
  }

  .blog-center {
  }

  .blog-right {
  }
}

.blog-content {
  border-radius: 5px;
  width: 100%;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px #cfd4d4;
}

//用户信息
.user-info {
  border-radius: 5px;
  margin-left: 250px;
  width: 280px;
  height: 300px;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px #cfd4d4;
}

.ava-block {
  width: 100px;
  height: 80px;
  border-radius: 5px;
  margin: 10px 90px;
}

.p-name {
  margin: 0 100px 20px 100px;
}

.font-left {
  width: 140px;
  float: left;
  border-right: 1px solid #bfc6bf;

  div {
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;

    span {
      font-size: 20px;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 20px;
      font-weight: 400;
    }
  }
}

.font-right {
  div {
    margin-left: 185px;
    margin-top: 20px;
    margin-bottom: 20px;

    span {
      font-size: 20px;
      font-weight: 500;
    }

    p {
      margin-top: 5px;
      font-size: 20px;
      font-weight: 400;
    }
  }
}

.icon-group {
  margin-left: 40px;
  margin-top: 20px;

  i {
    cursor: pointer;
    font-size: 32px;
    margin-left: 15px;
  }

  i:hover {
    color: #007efd;
  }
}

//分类专栏
.classify-block {
  margin-top: 60px;
  margin-left: 250px;
  width: 280px;
  box-shadow: 5px 5px 5px 5px #cfd4d4;
}

.classify-title {
  .avatar {
    float: left;
  }

  .font-title {
    margin-left: 10px;
    line-height: 27px;
  }

  .font-num {
    float: right;
    line-height: 27px;
    color: #8b9195;
  }

  .eyes-i {
    margin-right: 5px;
  }

  margin: 15px;
}

.classify-title:hover {
  cursor: pointer;
}


.classify-font {
  font-size: 11px !important;
  color: #7f8284;

  i {
    font-size: 14px;
    margin-right: 5px;
  }

}

.blog-btn {
  float: right;
  width: 60px;
  height: 30px;
}

.blog-image {
  width: 200px;
  height: 130px;
  margin-left: 20px;
  border-radius: 5px;
}


.ava-time {
  height: 40px;
  margin-top: 30px;

  span {
    line-height: 40px;
    margin-left: 10px;

  }
}

.span-tag {
  i {
    margin-right: 8px;
    font-size: 20px;
    color: #4b8fe7;
  }

  margin-right: 20px;
}

.auth-name {
  color: #a9afb6;
  font-size: 11px;
}

.new-article {
  width: 300px;
}

.popular-article {
  margin-top: 60px;
  width: 300px;
}

.tag-cloud {
  margin-top: 60px;
  width: 300px;
}

.fixedElement {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}

/deep/ .el-card__header {
  padding: 10px;
  font-weight: bold;
}

/deep/ .el-card__body {
  padding: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
/deep/.v-note-wrapper{
  border: none;
}
</style>