<template>
    <div>

        <div class="main-content">
            <!--轮播图-->
            <Swiper :pictureList="this.carouselList"/>
            <!--介绍页面-->
            <div class="font-content">
                网站在做什么
            </div>
            <div class="wow bounceInLeft res-content">
                <div>
                    <el-image class="img-block" :fit="'fill'" :src="src"></el-image>
                    <div class="introduction-content pull-right">
                        博客介绍
                    </div>
                </div>
            </div>
            <div style="height: 100px"></div>
            <div class="wow bounceInRight res-content">
                <div>
                    <div class="introduction-content pull-left">
                        自我介绍
                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="src"></el-image>

                </div>
            </div>

            <div style="height: 100px"></div>
            <div class="wow bounceInLeft res-content">
                <div>
                    <div class="introduction-content pull-right">
                        留言交流区
                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="src"></el-image>

                </div>
            </div>
            <div style="height: 100px"></div>
            <div class="wow bounceInRight res-content">
                <div>
                    <div class="introduction-content pull-left">
                        联系我们
                    </div>
                    <el-image class="img-block" :fit="'fill'" :src="src"></el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "../../components/Swiper";
    import {WOW} from 'wowjs'

    export default {
        name: "homeIndex",
        components: {
            Swiper
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
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
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
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";

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
        background-color: #ffdac4;
        margin-top: 45px;
        margin-right: 100px;
        width: 320px;
        height: 250px;
    }

    .box {
        width: 500px;
        height: 500px;
        line-height: 500px;
        text-align: center;
        font-size: 50px;
        color: red;
        border: 1px solid;
    }
</style>
