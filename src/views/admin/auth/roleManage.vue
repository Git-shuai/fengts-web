<template>
    <div class="role-manage">

        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>角色管理</span>
                    </div>
                    <div>
                        <el-form :model="roleForm" status-icon ref="roleForm" label-width="80px"
                                 class="user-form">
                            <el-form-item label="角色编码:" prop="roleName">
                                <el-input size="small" type="text" v-model="roleForm.roleName"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="编码说明:" prop="des">
                                <el-input size="small" type="textarea" :rows="3" placeholder="请输入内容"
                                          v-model="roleForm.des"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button v-if="editRoleStatus" size="mini" class="btn-submit" type="warning" @click="updateRole">修改角色</el-button>
                                <el-button v-else size="mini" class="btn-submit" type="primary" @click="addRole">添加角色</el-button>
                                <el-button size="mini" class="btn-reset" @click="resetForm('roleForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <!--列表-->
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header">
                        <span>角色列表</span>
                    </div>
                    <div>
                        <!--用户列表-->
                        <div>
                            <el-table border :data="roleTableData" style="width: 100%">
                                <el-table-column prop="roleName" label="角色名" width="200"></el-table-column>
                                <el-table-column prop="des" label="描述" width="250"></el-table-column>
                                <el-table-column prop="createTime" label="创建时间" width="250"></el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button  type="primary" size="small" style="margin-right: 15px" @click="editRole(scope.row)">编辑</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteRole(scope.row)">
                                            <el-button slot="reference" type="warning" size="small">删除</el-button>
                                        </el-popconfirm>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="pagination-loa">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="pagination.currentPage"
                                        :page-sizes="pagination.pageSizes"
                                        :page-size="pagination.pageSize"
                                        background
                                        layout="prev, pager, next"
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
    import {addRole, deleteRole, editRole, selectRole} from "../../../api/auth";

    export default {
        name: "roleManage",
        data(){
            return{
                roleForm: {
                    roleId: '',
                    roleName: '',
                    des: ''
                },
                roleTableData: [],
                //分页组件
                pagination: {
                    currentPage: 1,
                    pageSize: 10,
                    total: 50
                },
                editRoleStatus: false
            }
        },
        created() {
            this.selectRoleList();
        },
        methods:{
            //加载角色列表
            selectRoleList(){
                let data={
                  "page": this.pagination.currentPage,
                  "size": this.pagination.pageSize
                };
                selectRole(data).then((res)=>{
                    this.roleTableData=res.data.data.records;
                    this.pagination.total=res.data.data.total;
                }).catch()
            },
            //添加用户
            addRole() {
                let data={
                    "roleName": this.roleForm.roleName,
                    "des": this.roleForm.des
                };
                addRole(data).then((res)=>{
                    this.$message.success(res.data.message);
                    this.selectRoleList();
                    this.roleForm={};
                }).catch()
            },
            resetForm(userForm) {
                this.$refs[userForm].resetFields();
            },
            //删除角色
            deleteRole(row){
                deleteRole(row.roleId).then((res)=>{
                    this.$message.success(res.data.message);
                    this.selectRoleList();
                }).catch()
            },
            editRole(row){
                this.editRoleStatus=true;
                this.roleForm=row;
            },
            updateRole(){
                let data={
                    "roleId": this.roleForm.roleId,
                    "roleName": this.roleForm.roleName,
                    "des": this.roleForm.des
                };
                editRole(data).then((res)=>{
                    this.$message.success(res.data.message);
                    this.selectRoleList();
                    this.roleForm={};
                }).catch()
                this.editRoleStatus=false;
            },
            //页面大小
            handleSizeChange(val) {
                this.pagination.pageSize=val;
            },
            // 每页变化时改变currentPage
            handleCurrentChange(val) {
                this.pagination.currentPage=val;
                this.selectRoleList();
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
    .search-btn{
        margin-left: 25px;
    }
</style>