<template>
    <div class="background">
        <el-card class="box-card">
            <div slot="header">
                <span>账号设置</span>
            </div>
            <div>
                <div class="user-info">
                    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
                        <el-form-item label="用户名 :">
                            <el-input size="small" style=" width: 250px;" disabled v-model="userInfo.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="mini" type="primary" @click="editUsernameBtn">更改用户名</el-button>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
                        <el-form-item label="密  码 :">
                            <el-input size="small" disabled v-model="userInfo.password" placeholder="**********"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="mini" type="primary" @click="editPasswordBtn">更改密码</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-card>

        <div>
            <el-dialog title="修改用户名" :visible.sync="dialogVisibleUsername" width="30%" :before-close="handleCloseUsername">
                <div>
                    <el-form :inline="true" :model="newUser" class="demo-form-inline">
                        <el-form-item label="新的用户名 :">
                            <el-input size="small" style="width: 200px;" v-model="newUser.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="mini" type="primary" @click="editUsername">更改用户名</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
            <el-dialog title="修改密码" :visible.sync="dialogVisiblePassword" width="30%" :before-close="handleClosePassword">
                <div>
                    <el-form :rules="rules" :model="newUser" class="demo-form-inline">
                        <el-form-item label="新密码 :" prop="newPassword">
                            <el-input type="password" size="small" v-model="newUser.newPassword"></el-input>
                        </el-form-item>
                        <el-form-item label="重新输入新密码 :" prop="newPassword2">
                            <el-input type="password" size="small" v-model="newUser.newPassword2"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="mini" type="primary" @click="editPassword">更改密码</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {queryUserByUsername,  updateUserByUsernamePassword} from "../../../api/auth";
    import {getUsername, setToken, setUsername} from "../../../utils/app";
    import {validatePwd} from "../../../utils/validate";

    export default {
        name: "perInfo",
        data() {
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
                } else if (value !== this.newUser.newPassword) {
                    callback(new Error('密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                userInfo: {
                    userId: '',
                    username: '',
                    password: ''
                },
                newUser:{
                    userId: '',
                    username: '',
                    newPassword: '',
                    newPassword2: '',
                },
                dialogVisibleUsername:false,
                dialogVisiblePassword:false,
                //登陆表单验证
                rules: {
                    newPassword: [
                        {validator: validatePassword, trigger: 'blur'}
                    ],
                    newPassword2: [
                        {validator: validateNewPassword, trigger: 'blur'}
                    ]
                },
            }
        },
        created() {
            this.selectUserByUsername();
        },
        methods: {
            //加载用户
            selectUserByUsername(){
                let userName=getUsername();
                queryUserByUsername(userName).then((res)=>{
                    this.userInfo=res.data.data;
                }).catch()
            },
            //按钮
            editUsernameBtn() {
                //修改弹窗
                this.dialogVisibleUsername=true;
            },
            //修改i用户名
            editUsername(){
                let data={
                    "userId": this.userInfo.userId,
                    "username": this.newUser.username
                };
                updateUserByUsernamePassword(data).then((res)=>{
                    this.$message.success(res.data.message);
                    this.dialogVisibleUsername=false;
                    this.userInfo.username=this.newUser.username;
                    setUsername(this.newUser.username);
                    setToken(res.data.data)
                    this.newUser={};
                }).catch()
            },
            editPassword(){
                let data={
                    "userId": this.userInfo.userId,
                    "password": this.newUser.newPassword
                };
                updateUserByUsernamePassword(data).then((res)=>{
                    this.$message.success(res.data.message);
                    this.dialogVisiblePassword=false;
                    this.newUser={};
                }).catch()
            },
            //按钮
            editPasswordBtn() {
                this.dialogVisiblePassword=true;
            },
            handleCloseUsername() {
                this.dialogVisibleUsername=false;
            },
            handleClosePassword() {
                this.dialogVisiblePassword=false;
            }
        }
    }
</script>

<style lang="scss" scoped>

    .user-info {
        ul {
            li {
                height: 43px;
                line-height: 43px;
                border-bottom: 1px solid #bfbfbf;

                .edit-btn {
                    float: right;
                }
            }
        }
    }

    .box-card {
        width: 40%;
    }
</style>