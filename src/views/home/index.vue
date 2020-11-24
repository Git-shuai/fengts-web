<template>
    <div>
        <!--轮播图-->
        <Swiper :pictureList="this.carouselList"/>
        <!--介绍页面-->
        <div class="main-content">
            介绍页面
        </div>
    </div>
</template>

<script>
    import Swiper from "../../components/Swiper"

    export default {
        name: "homeIndex",
        components: {
            Swiper
        },
        data(){
            return{
                //轮播图数据
                carouselList:[
                    {url: "/image/mojave_dynamic_1.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_2.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_3.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_4.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_5.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_6.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_7.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_8.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_9.jpeg", jumpPath: {paramId: "123456", type: "life",}},
                    {url: "/image/mojave_dynamic_10.jpeg",jumpPath: {paramId: "123456", type: "life",}}
                ]
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";
.main-content{
    background-color: $mainColor;
    width: 100%;
    height: 200px;
}
</style>
