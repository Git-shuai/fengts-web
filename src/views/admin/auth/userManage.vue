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
                                <el-input size="small" type="text" v-model="userForm.username"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="密码:" prop="password">
                                <el-input size="small" type="password" v-model="userForm.password"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="说明:" prop="des">
                                <el-input size="small" type="textarea" :rows="3" placeholder="请输入内容"
                                          v-model="userForm.des"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="mini" class="btn-submit" type="primary"
                                           @click="submitForm('userForm')">添加用户
                                </el-button>
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
                                    <el-input size="small" v-model="searchForm.username" ></el-input>
                                </el-form-item>
                                <el-form-item label="创建时间:">
                                    <div>
                                        <el-date-picker
                                                size="small"
                                                v-model="searchTime"
                                                type="datetimerange"
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" size="mini" class="search-btn" @click="onSubmit">查询</el-button>
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
                                        <el-button  type="primary" size="small" style="margin-right: 15px">编辑</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteBlog(scope.row)">
                                            <el-button slot="reference" type="warning" size="small">删除</el-button>
                                        </el-popconfirm>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                       
                    </div>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: "userManage",
        data() {
            return {
                userForm: {
                    username: '',
                    password: '',
                    des: ''
                },
                searchForm: {
                    user: '',
                    region: ''
                },
                searchTime: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
                userTableData: [{
                    username: '2016-05-02',
                    des: '王小虎',
                    createTime: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]

            }
        },
        methods: {
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
            resetForm(userForm) {
                this.$refs[userForm].resetFields();
            },
            onSubmit(){

            }
        }
    }
</script>

<style lang="scss" scoped>
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
    .search-btn{
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