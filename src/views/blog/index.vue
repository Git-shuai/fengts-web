<template>
  <div class="blog-block">
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
                <p>{{articleAndTag.blogCount}}</p>
              </div>
            </div>
            <div class="font-right ">
              <div>
                <span>标签</span>
                <p>{{articleAndTag.tagsCount}}</p>
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
                <div v-for="item in classifyList" class="classify-title" :key="item.id">
                  <el-avatar class="avatar" shape="square" :size="27" :src="squareUrl"></el-avatar>
                  <span class="font-title">{{ item.classifyName }}</span>
                  <span class="font-num">{{item.count}}篇</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class=" blog-center">
          <!--走马灯-->
          <div>
            <div class="block">
              <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <el-image style="height: 150px" :fit="contain" :src="squareUrl"></el-image>
                </el-carousel-item>
              </el-carousel>
            </div>

            <div class="wow bounceInUp blog-list">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>博客列表</span>
                </div>
                <div>
                  <!--每一个-->
                  <div v-for="item in blogDataList"  class="blog-one" :key="item.id">
                    <div class="blog-title">
                      <i class="el-icon-reading"></i><span>{{ item.title }}</span>
                      <el-button v-if="item.isOriginal===0" class="blog-btn" size="mini" type="warning" plain>原创</el-button>
                      <el-button v-else-if="item.isOriginal===1" class="blog-btn" size="mini" type="success" plain>转载</el-button>
                      <el-button v-else eclass="blog-btn" size="mini" type="primary" plain>翻译</el-button>
                    </div>
                    <el-row :gutter="60">
                      <el-col :span="8">
                        <el-image class="blog-image" fit="fit" :src="squareUrl"></el-image>
                      </el-col>
                      <el-col :span="16">
                        <div class="blog-content">{{item.content}}</div>
                        <div class="ava-time">
                          <el-avatar class="pull-left" :size="40" :src="squareUrl"></el-avatar>
                          <span class="auth-name">{{ item.auth }}</span>
                          <span class="auth-name">{{ item.createTime }}</span>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="pagination-block">
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.currentPage"
                        :page-sizes="pagination.pageSizes"
                        :page-size="pagination.pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="pagination.total">
                    </el-pagination>
                  </div>
                </div>
              </el-card>

            </div>
          </div>
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
                <div v-for="item in newArticleList" class="classify-title" :key="item.id">
                  <el-avatar class="avatar" shape="square" :size="27" :src="squareUrl"></el-avatar>
                  <span class="font-title">{{ item.title }}</span>
                  <span class="font-num"><i class="el-icon-view eyes-i"></i>{{ item.readNum }}</span>
                </div>

              </div>
            </el-card>
          </div>
          <div class="popular-article">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>热门文章</span>
              </div>
              <div>
                <div v-for="item in holeArticleList" class="classify-title" :key="item.id">
                  <el-avatar class="avatar" shape="square" :size="27" :src="squareUrl"></el-avatar>
                  <span class="font-title">{{ item.title }}</span>
                  <span class="font-num"><i class="el-icon-view eyes-i"></i>{{ item.readNum }}</span>
                </div>

              </div>
            </el-card>
          </div>
          <div class="tag-cloud">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>标签云</span>
              </div>
              <div>
                <tag-cloud :data="hotTag" @clickTag="clickTagItem"></tag-cloud>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
    </el-row>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/footer";
import {WOW} from 'wowjs'
import {articleAndTagNum, blogList, classifyOfArticleNum, holdArticle, newArticle, tagCloud} from "api";

export default {
  name: "index",
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
    wow.init()
  },
  data() {
    return {
      squareUrl: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      time: '2020-3-24',
      hotTag: [],
      newArticleList: [],
      classifyList: [],
      blogDataList:[],
      articleAndTag:[],
      holeArticleList: [],
      //分页数据
      pagination: {
        currentPage: 1,
        hideOnSinglePage: false,
        pageSizes: [8, 15, 30, 40],
        pageSize: 8,
        total: 50
      }
    }
  },
  created() {
    this.newArticle();
    this.tagCloud();
    this.classifyOfArticleNum();
    this.blogList();
    this.articleAndTagNum();
    this.holdArticle();
  },
  methods: {
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
    classifyOfArticleNum(){
      classifyOfArticleNum().then(res => {
        this.classifyList=res.data.data;
      }).catch()
    },
    articleAndTagNum(){
      articleAndTagNum().then(res => {
        this.articleAndTag=res.data.data;
      }).catch()
    },
    blogList(){
      let data={
        "page": this.pagination.currentPage,
        "size":this.pagination.pageSize
      };
      blogList(data).then(res => {
        this.blogDataList=res.data.data.records;
        this.pagination.total=res.data.data.total;
      }).catch()
    },
    holdArticle(){
      holdArticle().then(res => {
        this.holeArticleList=res.data.data.records;
      }).catch()
    },







    handleSizeChange(val) {
      this.pagination.pageSize=val;
      this.blogList();
    },
    handleCurrentChange(val) {
      this.pagination.currentPage=val;
      this.blogList();
    },
    clickTagItem(tag) {
      console.log(tag);
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .eyes-i{
    margin-right: 5px;
  }

  margin: 15px;
}

//博客列表
.blog-list {
  margin-top: 30px;
  margin-bottom: 60px;
}

.blog-one {
  margin: 30px 45px 30px 45px;
  height: 200px;
  background-color: #fcf7f7;
}

.pagination-block {
  float: right;
  margin-bottom: 20px;
  margin-right: 20px;
}

.blog-title {
  margin: 0 15px 15px 15px;
  padding-top: 15px;

  i {
    margin-left: 10px;
    font-size: 20px;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
  }
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

.blog-content {
  height: 52px;
  width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
</style>
