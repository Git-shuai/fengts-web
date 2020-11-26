<template xmlns:el-col="http://www.w3.org/1999/html">
    <div class="login-content">
        <!--头部-->
        <div class="header-content">
            <el-row :gutter="10">
                <el-col :offset="2" :span="1">
                    <div class="logo">
                        <img src="../../assets/logo.png" alt="LOGO" height="100%" width="100%">
                    </div>
                </el-col>
                <div class="segmentation"></div>
                <el-col :span="5">
                    <h1 class="h1-login">个人网站登录</h1>
                </el-col>
            </el-row>

        </div>
        <!--内容-->
        <div class="main-content">
            <el-row :gutter="60">
                <el-col :span="7">
                    <div class="img-content">
<!--                        <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" width="100%" height="100%" alt="">-->
                    </div>
                </el-col>
                <el-col :offset="3" :span="10">
                    <div class="login-main">
                        <el-tabs  type="card" v-model="activeName" @tab-click="resetForm('ruleForm')">
                            <el-tab-pane   label="登录"  name="login">
                                <div class="login-form">
                                    <!--登录表单-->
                                    <el-form
                                            :rules="rules"
                                            label-position="top"
                                            :model="ruleForm"
                                            status-icon
                                            ref="ruleForm"
                                            label-width="100px"
                                            class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input type="username" v-model="ruleForm.username" placeholder="邮箱、手机" autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="ruleForm.password" placeholder="6-18位数字、字母组合" autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="code">
                                            <el-row :gutter="20">
                                                <el-col :span="16">
                                                    <el-input type="code" v-model="ruleForm.code" placeholder="6位数字" autocomplete="off" clearable></el-input>
                                                </el-col>
                                                <el-col :span="8">
                                                    <el-button type="success" class="block" @click="submitForm('ruleForm')">获取验证码</el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                        <div class="placeholder-div"></div>
                                        <el-form-item>
                                            <el-row :gutter="10">
                                                <el-col :span="24">
                                                    <el-button class="block" type="danger" @click="submitForm('ruleForm')">登录</el-button>
                                                </el-col>
<!--                                                <el-col :span="12">-->
<!--                                                    <el-button class="block" @click="resetForm('ruleForm')">重置</el-button>-->
<!--                                                </el-col>-->
                                            </el-row>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <div class="fast-login">
                                    <el-row>
                                        <el-col :span="5">
                                            <h1 class="h1-fast">快人一步</h1>

                                        </el-col>
                                        <el-col :span="1">
                                            <div class="fast-fg"></div>
                                        </el-col>
                                        <el-col :span="16">
                                           <span class="icon iconweixin h1-fast"></span>
                                           <span class="icon iconqq h1-fast"></span>
                                           <span class="icon icongithub h1-fast"></span>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane   label="注册" name="registered">
                                <div class="login-form">
                                    <!--登录表单-->
                                    <el-form
                                            :rules="rules"
                                            label-position="top"
                                            :model="ruleForm"
                                            status-icon
                                            ref="ruleForm"
                                            label-width="100px"
                                            class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input type="username" v-model="ruleForm.username" placeholder="邮箱、手机" autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="ruleForm.password" placeholder="6-18位数字、字母组合" autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="确认密码" prop="newPassword">
                                            <el-input type="newPassword" v-model="ruleForm.newPassword" placeholder="6-18位数字、字母组合" autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="code">
                                            <el-row :gutter="20">
                                                <el-col :span="16">
                                                    <el-input type="code" v-model="ruleForm.code" placeholder="" autocomplete="off" clearable></el-input>
                                                </el-col>
                                                <el-col :span="8">
                                                    <el-button type="success" class="block" @click="submitForm('ruleForm')">获取验证码</el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                        <div class="placeholder-div"></div>
                                        <el-form-item>
                                            <el-row :gutter="10">
                                                <el-col :span="12">
                                                    <el-button class="block" type="danger" @click="submitForm('ruleForm')">登录</el-button>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-button class="block" type="info" @click="resetForm('ruleForm')">重置</el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                    </el-form>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-col>
            </el-row>


        </div>
    </div>
</template>

<script>
    import {validateEmail,validatePwd,validateCode} from "../../utils/validate";
    export default {
        name: "login",
        data() {
            //判断用户名
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                }else if(validateEmail(value)){
                    callback(new Error('用户名格式错误'));
                }else {
                    if (this.ruleForm.password !== '') {
                        this.$refs.ruleForm.validateField('username');
                    }
                    callback();
                }
            };
            //判断密码
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if(validatePwd(value)){
                    callback(new Error('密码格式错误'));
                } else {
                    if (this.ruleForm.password !== '') {
                        this.$refs.ruleForm.validateField('password');
                    }
                    callback();
                }
            };
            //判断确认密码
            let validateNewPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'));
                }else if(validatePwd(value)){
                    callback(new Error('密码格式错误'));
                }else if(value !== this.ruleForm.password){
                    callback(new Error('密码不一致'));
                }else {
                    if (this.ruleForm.password !== '') {
                        this.$refs.ruleForm.validateField('newPassword');
                    }
                    callback();
                }
            };
            //判断验证码
            let validateVCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                }else if (validateCode(value)){
                    callback(new Error('验证码格式错误'));
                }else {
                    if (this.ruleForm.password !== '') {
                        this.$refs.ruleForm.validateField('code');
                    }
                    callback();
                }
            };

            return {
                ruleForm: {
                    username: '',
                    password: '',
                    newPassword:"",
                    code: ""
                },
                //登陆表单验证
                rules: {
                    username: [
                        { validator: validateUsername, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    newPassword: [
                        { validator: validateNewPassword, trigger: 'blur' }
                    ],
                    code: [
                        { validator: validateVCode, trigger: 'blur' }
                    ]
                },
                activeName: 'login',
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";

    .login-content {
        width: 100%;
        height: 100vh;
        background-color: #f5f5f6;
        background-image: url("../../assets/backg.jpg");
    }

    .header-content {
        height: $navMenu;
        background-color: $mainColor;

        .logo {
            width: $navMenu * 0.9;
            height: $navMenu;
            display: inline-block;
        }

        .segmentation {
            float: left;
            border: .1px solid #847e85;
            height: $navMenu - 30;
            margin: 15px 5px;
        }

        .h1-login {
            font-size: 35px;
            line-height: $navMenu;
            font-family: "华文琥珀";
            color: #847e85;
        }
    }

    .main-content {
        .img-content {
            margin: 60px;
            width: 600px;
            height: 600px;
        }

        .login-main {
            margin-top: 150px;
            background-color: $mainColor;
            opacity: 85%;
            width: 500px;
            height: auto;
        }
    }
    .login-form{
        margin: 20px 65px 65px 65px;
        .block{
            width: 100%;
            display: inline-block;
        }

        .placeholder-div{
            height: 20px;
            width: 100%;
        }
    }
    .fast-login{
        width: 100%;
        height: 60px;
        margin-bottom: 0;
        /*background-color: #847e85;*/
        .h1-fast{
            font-size: 20px;
            line-height: 60px;
            margin-left: 20px;
        }
        .fast-fg{
            display: inline-block;
            border: 0.1px solid #847e85;
            height:  30px;
            margin: 15px 5px;
        }
    }
</style>
