<template>
    <div class="login-content">
        <div class="header-content">
            <el-row :gutter="10">
                <el-col :offset="2" :span="2">
                    <div class="logo">
                        <img src="../../assets/logo.png"  alt="LOGO" height="100%" width="100%">
                    </div>
                </el-col>
                <el-col :span="5">
                    个人网站后台系统登录
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";

    .login-content {
        width: 100%;
        height: 100vh;
        background-color: $mainColor1;
    }
    .header-content{
        height: $navMenu;
        background-color: #847e85;
        .logo{
            width: $navMenu * 0.9;
            height: $navMenu;
            display: inline-block;
        }
    }
</style>
