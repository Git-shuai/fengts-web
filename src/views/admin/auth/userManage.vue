<template>
    <div class="user-manage">

        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>用户管理</span>
                    </div>
                    <div>
                        <el-form :model="userForm" status-icon ref="userForm" label-width="60px"
                                 class="user-form">
                            <el-form-item label="用户名:" prop="username">
                                <el-input size="small" type="text" v-model="userForm.username" :disabled="usernameDisabled"
                                          ></el-input>
                            </el-form-item>
                            <el-form-item label="密码:" prop="password">
                                <el-input size="small" type="password" v-model="userForm.password" :disabled="passwordDisabled"
                                          ></el-input>
                            </el-form-item>
                            <el-form-item label="说明:" prop="des">
                                <el-input size="small" type="textarea" :rows="3" placeholder="请输入内容"
                                          v-model="userForm.des"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button v-if="editUserStatus" size="mini" class="btn-submit" type="warning" @click="editUser">修改用户</el-button>
                                <el-button v-else  size="mini" class="btn-submit" type="primary" @click="addUser">添加用户</el-button>
                                <el-button size="mini" class="btn-reset" @click="resetForm('userForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <!--列表-->
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header">
                        <span>用户列表</span>
                    </div>
                    <div>
                        <div class="search-div">
                            <!--查询条件-->
                            <el-form :inline="true" :model="searchForm">
                                <el-form-item label="用户名:">
                                    <el-input clearable size="small" v-model="searchForm.username"></el-input>
                                </el-form-item>
                                <el-form-item label="创建时间:">
                                    <div>
                                        <el-date-picker
                                                clearable
                                                size="small"
                                                v-model="searchForm.createTime"
                                                type="datetimerange"
                                                value-format="yyyy-MM-dd HH:mm:ss"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" size="mini" class="search-btn" @click="searchUser">查询
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!--用户列表-->
                        <div>
                            <el-table border :data="userTableData" style="width: 100%">
                                <el-table-column prop="username" label="用户名" width="200"></el-table-column>
                                <el-table-column prop="des" label="描述" width="250"></el-table-column>
                                <el-table-column prop="createTime" label="创建时间" width="250"></el-table-column>
                                <el-table-column prop="address" label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="small" style="margin-right: 15px" @click="editUserBtn(scope.row)">编辑</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteUser(scope.row)">
                                            <el-button slot="reference" type="warning" size="small">删除</el-button>
                                        </el-popconfirm>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <!--分页-->
                            <div class="pagination-loa">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="pagination.currentPage"
                                        :page-sizes="pagination.pageSizes"
                                        :page-size="pagination.pageSize"
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :total="pagination.total">
                                </el-pagination>
                            </div>
                        </div>

                    </div>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    import sha1 from "js-sha1";
    import {deleteUser, registeredUser, selectUserList, selectUserListByParam, updateUser} from "../../../api/auth";

    export default {
        name: "userManage",
        data() {
            return {
                //用户表单
                userForm: {
                    userId :"",
                    username: '',
                    password: '',
                    headurl: '',
                    des: ''
                },
                //查询用户表单
                searchForm: {
                    username: '',
                    createTime: ''
                },
                // 用户列表
                userTableData: [],
                //分页组件
                pagination: {
                    currentPage: 1,
                    pageSizes: [10, 20, 30, 40],
                    pageSize: 10,
                    total: 50
                },
                editUserStatus: false,
                usernameDisabled: false,
                passwordDisabled: false

            }
        },
        created() {
            this.selectUserList();
        },
        methods: {
            //加载用户列表
            selectUserList() {
                let data={
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize
                };
                selectUserList(data).then((res)=>{
                    this.userTableData=res.data.data.records;
                    this.pagination.total=res.data.data.total;
                }).catch()
            },
            //添加用户
            addUser() {
                let data={
                    "username": this.userForm.username,
                    "password": sha1(this.userForm.password),
                    "des": this.userForm.des,
                    "headurl": this.userForm.headurl,
                }
                console.log(data);
                registeredUser(data).then((res)=>{
                    this.$message.success(res.data.message);
                    //重置表单
                    this.userForm={};
                    //重新加载用户列表
                    this.selectUserList();
                }).catch()
            },
            //删除用户
            deleteUser(val){
                deleteUser(val.userId).then((res)=>{
                    this.$message.success(res.data.message);
                    this.selectUserList();
                }).catch()

            },
            //修改用户
            editUserBtn(row){
                this.editUserStatus=true;
                this.usernameDisabled=true;
                this.passwordDisabled=true;
                this.userForm.des=row.des;
                this.userForm.userId=row.userId;
                this.userForm.username=row.username;
            },
            editUser(){
                let data={
                    "userId": this.userForm.userId,
                    "des": this.userForm.des
                }
                updateUser(data).then((res)=>{
                    this.$message.success(res.data.message);
                    this.userForm={};
                    this.editUserStatus=false;
                    this.usernameDisabled=false;
                    this.passwordDisabled=false;

                }).catch()
                this.selectUserList();
            },
            resetForm(userForm) {
                this.$refs[userForm].resetFields();
            },
            //查询用户条件函数
            searchUser() {
                let data={
                    "username": this.searchForm.username,
                    "createTime": this.searchForm.createTime,
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize
                };
                console.log(data);
                selectUserListByParam(data).then((res)=>{
                    this.userTableData=res.data.data.records;
                    this.pagination.total=res.data.data.total;
                    // console.log(res.data.data.records);
                }).catch();
            },
            //页面大小
            handleSizeChange(val) {
                this.pagination.pageSize=val;
            },
            // 每页变化时改变currentPage
            handleCurrentChange(val) {
                this.pagination.currentPage=val;
                if (this.searchForm.username!=="" || this.searchForm.createTime!=="" ) {
                    this.searchUser();
                }else {
                    this.selectUserList();
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination-loa{
        float: right;
        margin: 15px;
    }
    .btn-submit {
        width: 47%;
        float: left;
    }

    .btn-reset {
        width: 47%;
        float: right;
    }

    .user-form {
        margin: 0 23px 15px 10px;
    }

    .search-input {
        margin-left: 15px;
    }

    .search-btn {
        margin-left: 25px;
    }


    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>