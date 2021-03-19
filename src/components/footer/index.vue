<template>
    <div class="bottom-content">
        <!--左部分-->
        <div class="left-content">
            <!--LOGO-->
            <div>
                <el-image class="img-logo" :fit="'fill'" :src="require('../../assets/logo2.png')"></el-image>
            </div>
            <!--文字描述-->
            <div class="bottom-font">
                <p>
                    <el-link type="info">技术支持</el-link>
                </p>
                <p>
                    <el-link href="https://www.aliyun.com/purchasing/2021?utm_content=se_1008711494" target="_blank"
                             type="info">阿里云服务器
                    </el-link>
                </p>
                <p>
                    <el-link href="https://cloud.tencent.com/act/domainsales" target="_blank" type="info">腾讯域名
                    </el-link>
                </p>
                <p>
                    <el-link @click="toRouter('contact')" type="info">关于我们</el-link>
                </p>
            </div>
            <div class="bottom-font-right">
                <p>
                    <el-link type="info">网站介绍</el-link>
                </p>
                <p>
                    <el-link type="info">用户帮助</el-link>
                </p>
                <p>
                    <el-link @click="toRouter('contact')" type="info">联系我们</el-link>
                </p>
                <p>
                    <el-link @click="toRouter('contact')" type="info" >关于我们</el-link>
                </p>
            </div>
        </div>
        <div style="float:left;width: 1px;height: 240px; background: #cbc7c7;margin: 20px"></div>
        <!--右部分-->
        <div class="right-content">
            <!--链接-->
            <div class="icon-group">
                <div class="icon-icon" @click="toOther('1873461847')"><i class="icon iconqq1"></i>1873461847</div>
                <div class="icon-icon" @click="toOther('fengts@163.com')"><i class="icon iconyouxiang1"></i>fengts@163.com</div>
                <div class="icon-icon" @click="toOther('')"><i class="icon icongithub2"></i></div>
            </div>
            <!--微信-->
            <div>
                <img class="img-wechar" src="../../assets/wechar.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            toOther(val){
                console.log(val);
                if (val==='1873461847'){
                    window.location.href='https://w.qq.com/'
                }else if (val==='fengts10@163.com'){
                    window.location.href='https://mail.163.com/'
                }else {
                    window.location.href='https://github.com/Git-shuai/fengts-web'
                }
            },
            toRouter(val){
                this.$router.push({
                    name: val
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bottom-content {
        background-color: #ebf2f2;
        height: 280px;
    }

    .left-content {
        float: left;
        width: 600px;
        height: 230px;
        margin: 25px 260px 25px 200px;
    }

    .right-content {
        float: right;
        width: 500px;
        height: 230px;
        margin: 25px 200px 25px 0;

        i {
            font-size: 30px;
            margin-right: 10px;
        }

        div {
            margin: 20px;
        }
    }

    .img-logo {
        display: inline-block;
        width: 100px;
        height: 80px;
        border-radius: 6px;
    }

    .bottom-font {
        margin-top: 28px;
        float: left;
        font-size: 15px;

        p {
            cursor: pointer;
            color: #534f4f;
            margin: 15px 0 10px 15px;
        }
    }

    .bottom-font-right {
        font-size: 15px;
        margin-top: 45px;

        p {
            cursor: pointer;
            color: #534f4f;
            margin: 15px 0 10px 300px;
        }
    }

    .icon-group {
        float: left;
    }

    .img-wechar {
        margin: 25px;
        display: inline-block;
        float: right;
        width: 150px;
        height: 150px;
        border-radius: 5px;
    }
</style>