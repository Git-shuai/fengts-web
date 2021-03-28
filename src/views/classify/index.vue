<template>
  <div>
    <div class="classify-main">
      <div class="picture-div"></div>
      <!--分类框-->
      <div class="wow fadeInDown classify-black">
        <div class=" classify-title"><i class="icon iconcategory"></i>文章分类</div>
        <div class="classify-tags">
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
          <div class="classify-item">
            <el-button>默认分类</el-button>
          </div>
        </div>

      </div>
      <!-- 分类文章列表-->
      <div class="classify-list">
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <div class="wow fadeInUp classify-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>标签</span>
          </div>
        </div>
        <!--分页-->
        <div class="wow fadeInUp pa-block">
          <div class="pagination-block">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="pagination.pageSizes"
                :page-size="pagination.pageSize"
                layout="prev, pager, next"
                :total="pagination.total">
            </el-pagination>
          </div>
        </div>

      </div>
    </div>
    <div class="wow fadeInUp">    <Footer/>    </div>
  </div>
</template>

<script>
import Footer from '../../components/footer'
import {WOW} from "wowjs";
export default {
  name: "index",
  components:{
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
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      time: '2020-4-1',
      //分页数据
      pagination: {
        currentPage: 1,
        hideOnSinglePage: false,
        pageSizes: [8, 15, 30, 40],
        pageSize: 8,
        total: 50
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-main {
  .picture-div {
    background: #007efd;
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 300px;
  }

  .classify-black {
    position: relative;
    background: #fff;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 60px;
    width: 1300px;
    border-radius: 5px;
    box-shadow: 5px 5px 16px 1px #cfd4d4;
  }

  .classify-list {
    background: #fff;
    margin: 0 auto;
    width: 1300px;
    border-radius: 5px;
  }
}

.classify-title {
  i {
    margin-right: 10px;
  }
  padding-top: 20px;
  width: 150px;
  margin: 20px auto;
  font-size: 27px;
  font-weight: bold;
}

.classify-tags {
  padding-bottom: 20px;
  margin: 20px auto;
  width: 1200px;
  //border: 1px solid #494e41;
}

.classify-item {
  display: inline-block;
  margin: 10px 20px;
}

.classify-list-item {
  border-radius: 5px;
  display: inline-block;
  width: 25%;
  margin: 30px 53px 30px 53px;
  box-shadow: 5px 5px 5px 5px #cfd4d4;
}

.article-title {
  margin: 10px auto;
  font-size: 20px;
  text-align: center
}

.article-time {
  color: #90939a;
  font-size: 18px;

  i {
    margin: 10px;
  }
}

.article-user {
  display: inline-block;
  float: right;
  color: #90939a;
  font-size: 18px;

  i {
    margin: 10px;
  }

  span {
    margin-right: 20px;
  }
}

.article-tags {
  display: inline-block;
  margin: 8px;
  font-size: 14px;

  i {
    margin: 3px;
  }
}

.img-item {
  border-radius: 5px;
}

.pagination-block {
  float: right;
  margin-right: 53px;
  margin-top: 30px;
}
.pa-block{
  height: 100px;
}
/deep/ .el-button {
  background: #e7e8ea;
}

/deep/ .el-divider--horizontal {
  margin: 0;
}
</style>
