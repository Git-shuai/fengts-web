<template>
    <div>
        <swiper class="carousel" :options="swiperOption">
            <swiper-slide v-for="(item,index) in carouselList" :key="index">
                <img alt="轮播图" width="100%" height="100%" :src="item.url" @dblclick="jump(item.jumpPath)"/>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import {swiper, swiperSlide} from "vue-awesome-swiper";
    import "swiper/swiper-bundle.css";

    export default {
        name: "index",
        components: {
            swiper,
            swiperSlide
        },
        props:{
            //轮播图图片的数组（父组件）
            pictureList: Array
        },
        data() {
            return {
                /**
                 * 轮播图选项
                 */
                swiperOption: {
                    loop: true,
                    // slidesPerView: 1,
                    // spaceBetween: 30,
                    //点击事件
                    preventClicksPropagation: false,
                    autoplay: {
                        delay: 10000,
                        stopOnLastSlide: true,
                        disableOnInteraction: true
                    },
                    // 显示分页
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true //允许分页点击跳转
                    },
                    // 设置点击箭头
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                },
                /**
                 * 轮播图数组
                 * url 图片存在的路径
                 * locationUrl：点击图片将要跳转到的路径，
                 */
                carouselList: this.pictureList
            };
        },
        methods: {
            //跳转到图片指定的路径
            jump: function (value) {
                this.$router.push({
                    name: value.type,
                })
            },
            next: function (value) {
                console.log(value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-element {
        animation: backInUp; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 500ms; /* don't forget to set a duration! */
    }

    .carousel {
        width: 100%;
        height: 400px;
        /*animation: zoomIn; !* referring directly to the animation's @keyframe declaration *!
        animation-duration: 1s; !* don't forget to set a duration! *!*/
    }
</style>
