<template xmlns:el-col="http://www.w3.org/1999/html">
    <div class="login-content">
        <!--头部-->
        <div class="header-content">
            <el-row>
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
            <el-row>
                <el-col :offset="14" :span="10">
                    <div class="login-main">
                        <el-tabs type="card" v-model="activeName" @tab-click="resetForm('ruleForm')">
                            <el-tab-pane label="登录" name="login">
                                <div class="login-form">
                                    <!--登录表单-->
                                    <el-form
                                            :rules="rules"
                                            label-position="top"
                                            :model="ruleForm"
                                            ref="ruleForm"
                                            label-width="100px"
                                            class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input type="username" v-model="ruleForm.username" placeholder="邮箱、手机"
                                                      autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="ruleForm.password"
                                                      placeholder="6-18位数字、字母组合" autocomplete="off"
                                                      clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="code">
                                            <el-row :gutter="20">
                                                <el-col :span="16">
                                                    <el-input type="code" v-model="ruleForm.code" placeholder="6位数字"
                                                              autocomplete="off" clearable></el-input>
                                                </el-col>
                                                <el-col :span="8">
                                                    <el-button type="success" class="block"
                                                               @click="getCode(ruleForm.username)"
                                                               :loading="sendCode.sendCodeStatus"
                                                               :disabled="sendCode.sendCodeDisabled"
                                                    >{{sendCode.sendCodeText}}
                                                    </el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                        <el-form-item prop="remember-me">
                                            <el-checkbox v-model="ruleForm.rememberMe">记住我</el-checkbox>
                                        </el-form-item>

                                        <el-form-item>
                                            <el-row :gutter="10">
                                                <el-col :span="24">
                                                    <el-button class="block" type="danger"
                                                               @click="submitForm(ruleForm)">登录
                                                    </el-button>
                                                </el-col>
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
                            <el-tab-pane label="注册" name="registered">
                                <div class="login-form">
                                    <!--注册表单-->
                                    <el-form
                                            :rules="rules"
                                            label-position="top"
                                            :model="ruleForm"
                                            ref="ruleForm"
                                            label-width="100px"
                                            class="demo-ruleForm">
                                        <el-form-item label="用户名" prop="username">
                                            <el-input type="username" v-model="ruleForm.username" placeholder="邮箱、手机"
                                                      autocomplete="off" clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="密码" prop="password">
                                            <el-input type="password" v-model="ruleForm.password"
                                                      placeholder="6-18位数字、字母组合" autocomplete="off"
                                                      clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="确认密码" prop="newPassword">
                                            <el-input type="password" v-model="ruleForm.newPassword"
                                                      placeholder="6-18位数字、字母组合" autocomplete="off"
                                                      clearable></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="code">
                                            <el-row :gutter="20">
                                                <el-col :span="16">
                                                    <el-input type="code" v-model="ruleForm.code" placeholder=""
                                                              autocomplete="off" clearable></el-input>
                                                </el-col>
                                                <el-col :span="8">
                                                    <el-button type="success" class="block"
                                                               @click="getCode(ruleForm.username)"
                                                               :loading="sendCode.sendCodeStatus"
                                                               :disabled="sendCode.sendCodeDisabled"
                                                    >{{sendCode.sendCodeText}}
                                                    </el-button>
                                                </el-col>
                                            </el-row>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-row :gutter="10">
                                                <el-col :span="12">
                                                    <el-button class="block placeholder-div" type="danger"
                                                               @click="registered(ruleForm)">注册
                                                    </el-button>
                                                </el-col>
                                                <el-col :span="12">
                                                    <el-button class="block placeholder-div" type="info"
                                                               @click="resetForm('ruleForm')">
                                                        重置
                                                    </el-button>
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
    import {validateCode, validateEmail, validatePwd} from "../../utils/validate";
    import {getCode, registeredUser, login} from "../../api/user";
    import {setToken, setUsername} from "../../utils/app";

    export default {
        name: "login",
        data() {
            //判断用户名
            let validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else if (validateEmail(value)) {
                    callback(new Error('用户名格式错误'));
                } else {
                    callback();
                }
            };
            //判断密码
            let validatePassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (validatePwd(value)) {
                    callback(new Error('密码格式错误'));
                } else {
                    callback();
                }
            };
            //判断确认密码
            let validateNewPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'));
                } else if (validatePwd(value)) {
                    callback(new Error('密码格式错误'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('密码不一致'));
                } else {
                    callback();
                }
            };
            //判断验证码
            let validateVCode = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if (validateCode(value)) {
                    callback(new Error('验证码格式错误'));
                } else {
                    callback();
                }
            };

            return {
                //表单数据
                ruleForm: {
                    username: '',
                    password: '',
                    newPassword: "",
                    code: "",
                    rememberMe: false
                },
                //登陆表单验证
                rules: {
                    username: [
                        {validator: validateUsername, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePassword, trigger: 'blur'}
                    ],
                    newPassword: [
                        {validator: validateNewPassword, trigger: 'blur'}
                    ],
                    code: [
                        {validator: validateVCode, trigger: 'blur'}
                    ]
                },
                //标签页默认选中
                activeName: 'login',
                //验证码
                sendCode: {
                    //验证码按钮状态
                    sendCodeDisabled: false,
                    //验证码加载状态
                    sendCodeStatus: false,
                    //验证码按钮文本
                    sendCodeText: "获取验证码"
                }
            };
        },
        methods: {
            //登录函数
            submitForm(formName) {
                formName.newPassword = formName.password;
                if (!this.judgmentInput(formName)) {
                    return false;
                }
                let data = {
                    "username": formName.username,
                    "password": formName.password,
                    "code": formName.code
                };
                login(data).then((response) => {
                    let data = response.data;
                    //设置token和用户名
                    setToken(data.data.token);
                    setUsername(data.data.username);
                    this.$message.success(data.message);
                    //跳转到后台首页
                    this.$router.push({
                        name: "admin"
                    });
                }).catch();
            },
            //注册函数
            registered(formName) {
                if (!this.judgmentInput(formName)) {
                    return false;
                }
                let data = {
                    "username": formName.username,
                    "password": formName.password,
                };
                registeredUser(data).then((response) => {
                    let data = response.data;
                    console.log(data);
                    setToken(data.data.token);
                    setUsername(data.data.username);
                    this.$message.success(data.message);
                    //跳转到后台首页
                    this.$router.push({
                        name: "admin"
                    });
                }).catch(() => {
                });
            },
            //判断输入框函数
            judgmentInput(formName) {
                console.log(formName);
                if (formName.username === "") {
                    this.$message.warning("用户名为空");
                    return false;
                }
                if (formName.password === "") {
                    this.$message.warning("密码为空为空");
                    return false;
                }
                if (formName.newPassword === "") {
                    this.$message.warning("确认密码为空");
                    return false;
                }
                if (formName.code === "") {
                    this.$message.warning("验证码为空");
                    return false;
                }
                return true;
            },
            //重置函数
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            /**
             * 设置验证码状态函数
             * @param val1 是否禁用
             * @param val2 是否加载
             * @param val3 按钮文本信息
             */
            setCodeStatus(val1, val2, val3) {
                if (val1 !== "") this.sendCode.sendCodeDisabled = val1;
                if (val2 !== "") this.sendCode.sendCodeStatus = val2;
                if (val3 !== "") this.sendCode.sendCodeText = val3;
            },
            //获取验证码
            getCode(value) {
                if (!value) {
                    this.$message.warning("用户名为空");
                    return false;
                }
                //获取验证码的操作
                let data = {
                    "username": value
                };
                getCode(data).then((response) => {
                    console.log(response.data.data);
                    this.$message.success("验证码是 " + response.data.data.code);
                }).catch((error) => {
                    console.log(error);
                });
                this.countDown(60);
            },
            //计时器
            countDown(number) {
                //定时器
                if (timer) {
                    clearInterval(timer);
                }
                this.setCodeStatus(true, false, "获取验证码");
                let num = number;
                let timer = setInterval(() => {
                    num--;
                    if (num === 0) {
                        clearInterval(timer);
                        this.setCodeStatus(false, false, "重新发送");
                    } else {
                        this.sendCode.sendCodeText = `倒计时${num}秒`;
                    }
                }, 1000)
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
        background-image: url("https://community-fts.oss-cn-beijing.aliyuncs.com/god-oss-upload/%E7%94%BB%E7%AC%94%E7%BE%8E%E5%A5%B3.png");
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
            color: #847e85;
        }
    }

    .main-content {
        .login-main {
            margin-top: 70px;
            background-color: $mainColor;
            opacity: 90%;
            width: 500px;
            height: auto;
        }
    }

    .login-form {
        margin: 20px 65px 65px 65px;

        .block {
            width: 100%;
            display: inline-block;
        }

        .placeholder-div {
            margin-top: 15px;
        }
    }

    .fast-login {
        width: 100%;
        height: 60px;
        margin-bottom: 0;
        /*background-color: #847e85;*/
        .h1-fast {
            font-size: 20px;
            line-height: 60px;
            margin-left: 20px;
        }

        .fast-fg {
            display: inline-block;
            border: 0.1px solid #847e85;
            height: 30px;
            margin: 15px 5px;
        }
    }
</style>
