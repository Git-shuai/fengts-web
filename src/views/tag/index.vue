<template>
  <div>
    <div class="tag-main">
      <div class="picture-div"></div>
      <!--标签框-->
      <div class="wow fadeInDown tag-black">
        <div class="tag-title"><i class="icon iconcategory"></i>文章标签</div>
        <div class="tag-tags">
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
          <div class="tag-item">
            <el-button>默认标签</el-button>
          </div>
        </div>

      </div>
      <!-- 标签文章列表-->
      <div class="tag-list">
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <div class="wow fadeInUp tag-list-item">
          <el-image class="img-item" :src="src"></el-image>
          <div class="article-title">文章标题</div>
          <div>
            <div class="article-user"><i class="el-icon-user"></i><span>作者</span></div>
            <div class="article-time"><i class="el-icon-time"></i>{{ time }}</div>
          </div>
          <el-divider></el-divider>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
          <div class="article-tags">
            <i class="el-icon-collection-tag"></i><span>分类</span>
          </div>
        </div>
        <!--分页-->
        <div class="pa-block">
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
.tag-main {
  .picture-div {
    background: #00fda4;
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 300px;
  }

  .tag-black {
    position: relative;
    background: #fff;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 60px;
    width: 1300px;
    border-radius: 5px;
    box-shadow: 5px 5px 16px 1px #cfd4d4;
  }

  .tag-list {
    background: #fff;
    margin: 0 auto;
    width: 1300px;
  }
}

.tag-title {
  i {
    margin-right: 10px;
  }
  padding-top: 20px;
  width: 150px;
  margin: 20px auto;
  font-size: 27px;
  font-weight: bold;
}

.tag-tags {
  padding-bottom: 20px;
  margin: 20px auto;
  width: 1200px;
  //border: 1px solid #494e41;
}

.tag-item {
  display: inline-block;
  margin: 10px 20px;
}

.tag-list-item {
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
