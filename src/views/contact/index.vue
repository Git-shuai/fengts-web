<template>
  <div class="contact-main">
    <div class="pull-left">
      <div class="left-contact">
        <!--      头像-->
        <div>
          <el-image class="img-avg" fit="fill" :src="src"></el-image>
        </div>
        <!--      信息-->
        <div class="name-span"><p>站主: <span>冯天帅</span></p></div>
        <!--      文章信息-->
        <div class="blog-blog">
          <div class="left-blog">
            <span>文章</span>
            <p>123</p>
          </div>
          <div class="right-blog">
            <span>标签</span>
            <p>123</p>
          </div>
        </div>
        <!--      图标-->
        <div class="icon-group">
          <i class="icon icongithub2"></i>
          <i class="icon iconyouxiang1"></i>
          <i class="icon iconqq1"></i>
          <i class="icon iconweixin"></i>
        </div>

      </div>
      <div class="clear"></div>
      <div class="time-block">
        <el-calendar v-model="timeValue">
        </el-calendar>
      </div>
    </div>
    <div class="right-contact">
      <div class="contact-title">关于我们</div>
      <el-divider></el-divider>
      <!--      内容-->
      <div class="font-p">
        <p>每日都尽力在与时俱进。担任本站站长.</p>

        <p>爱好-看书听歌，关注国家大事</p>

        <p>努力学习各种知识，不脱离时代潮流，俗话说得好:活到老学到老。</p>


        <p>欢迎大家一起来讨论。</p>

        <p>冯站长:</p>

        <p>90后，IT专业人士，担任本站技术志愿者。</p>

        <p>好奇心重，乐于接触尝试新鲜事物，学习各种新知识。曾留学生活在英国，自助游欧洲各地，博客中会与大家分享各种见闻和Tips。</p>
      </div>
      <el-divider></el-divider>
<!--      网站技术-->
      <div style="margin: 50px">尽情期待......</div>
    </div>

    <div style="clear: both"></div>
    <div style="height: 100px"></div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../../components/footer";
export default {
  name: "index",
  components:{
    Footer
  },
  data() {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      timeValue: new Date(),
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.contact-main {
  background-color: #f7f7f7;
  .left-contact {
    background-color: #FFF;
    border-style: outset;
    width: 350px;
    height: 320px;
    margin: 60px 0 0 200px;
  }

  .clear {
    clear: both;
  }

  .time-block {
    border-style: outset;
    margin: 60px 0 0 200px;
    width: 350px;
    height: 448px;
  }

  .right-contact {
    box-shadow:0px 0px 2px 2px #a5a5a5;
    background-color: #fff;
    margin: 60px 250px 0 0;
    float: right;
    width: 1000px;
    height: 1000px; //以后删除
  }
}

.img-avg {
  width: 150px;
  height: 100px;
  margin: 10px 100px;
  border-radius: 10px;
}

.name-span {
  margin-left: 120px;
  font-size: 16px;
}

.left-blog {
  margin: 20px 0 10px 100px;
  float: left;

}

.blog-blog {
  span {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }
}

.right-blog {
  margin: 20px 100px 10px 0;
  float: right;
}

.icon-group {
  margin-top: 100px;
  margin-left: 70px;

  i {
    font-size: 32px;
    margin-left: 15px;
  }
}

.contact-title {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;
  margin-left: 450px;
}

.font-p {
  p {
    margin: 20px 50px 0 50px;
    font-size: 15px;
  }
}
/deep/.el-calendar-table .el-calendar-day{
  box-sizing: border-box;
  padding: 8px;
  height: 50px;
}
</style>
