<template>
    <div style="background-color: #fff">

        <div class="main-content">
            <!--轮播图-->
            <Swiper :pictureList="this.carouselList"/>
            <!--介绍页面-->
            <div class="font-content">
                网站在做什么
            </div>
            <div class="wow bounceInLeft res-content">
                <div>
                    <el-image class="img-block" :fit="'fill'" :src="blogSrc" @click="toRouter('blog')"></el-image>
                    <div class="introduction-content pull-right" @click="toRouter('blog')">
                        <span class="title-font">我的博客</span>
                        <div class="content-font">
                            <p>写好Blog,为自己创造机会!</p>

                            <p>写文章如同写程序,程序是由电脑运行的,文章是由人脑运行的!</p>

                            <p>你可以不发表文章, 但你发表的每一篇文章都是你水平、修养、素质的综合体现!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 100px"></div>
            <div class="wow bounceInRight res-content">
                <div>
                    <div class="introduction-content pull-left" @click="toRouter('contact')">
                        <span class="title-font">自我介绍</span>
                        <div class="content-font">
                            <p>本人天秤座</p>

                            <p>来自河南安阳</p>

                            <p>谢谢！</p>
                        </div>
                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="ziwoSrc" @click="toRouter('contact')"></el-image>

                </div>
            </div>

            <div style="height: 100px"></div>
            <div class="wow bounceInLeft res-content">
                <div>
                    <div class="introduction-content pull-right" @click="toRouter('message')">
                        <span class="title-font">留言交流区</span>
                        <div class="content-font">
                            <p>欢迎大家来网站游览</p>

                            <p>如果有什么做的不好的,也请大家在留言区多多交流</p>

                            <p>如果你有什么好点子也可以多多交流,大家辛苦了！</p>
                        </div>

                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="liuyanSrc" @click="toRouter('message')"></el-image>
                </div>
            </div>
            <div style="height: 100px"></div>
            <div class="wow bounceInRight res-content" @click="toRouter('contact')">
                <div>
                    <div class="introduction-content pull-left">
                        <span class="title-font">联系我们</span>
                        <div class="content-font">
                            <p>欢迎大家来网站游览</p>

                            <p>这里是我的联系方式如果有趣味相投的小伙伴也可以联系我一起学习一起进步</p>

                        </div>
                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="lianxiSrc" @click="toRouter('contact')"></el-image>
                </div>
            </div>
        </div>
        <div style="height: 100px"></div>
        <!--底部页脚-->
        <Footer/>
    </div>
</template>

<script>
    import Swiper from "../../components/Swiper";
    import Footer from "../../components/footer";
    import {WOW} from 'wowjs'

    export default {
        name: "homeIndex",
        components: {
            Swiper,
            Footer
        },
        data() {
            return {
                //轮播图数据
                carouselList: [
                    {url: "/image/mojave_dynamic_1.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_2.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_3.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_4.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_5.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_6.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_7.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_8.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_9.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_10.jpeg", jumpPath: {paramId: "123456", type: "life",}}
                ],
                blogSrc: require('../../assets/blog.jpg'),
                lianxiSrc: require('../../assets/lianxi.jpg'),
                liuyanSrc: require('../../assets/liuyan.jpg'),
                ziwoSrc: require('../../assets/ziwo.jpg'),
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            }
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
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";

    .icon-icon {
        cursor: pointer;
    }


    .title-font {
        display: inline-block;
        margin: 0 auto;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .content-font {
        font-size: 20px;
        font-family: "楷体";

        p {
            margin: 5px;
        }
    }

    .main-content {
        background-color: $mainColor;
        width: 100%;

    }

    .font-content {
        font-size: 3rem;
        font-weight: bold;
        font-family: "华文彩云";
        margin: 30px 200px;
        animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1s; /* don't forget to set a duration! */
    }

    .res-content {
        margin: 0 330px;
        height: 350px;

        .img-block {
            width: 750px;
            height: 350px;
            border-radius: 8px;
            display: inline-block;
        }
    }

    .introduction-content {
        margin-top: 45px;
        margin-right: 100px;
        width: 320px;
        height: 250px;
    }



</style>
