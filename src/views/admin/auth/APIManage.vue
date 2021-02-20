<template>
    <div class="API-manage">

        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>后端API编辑</span>
                    </div>
                    <div>
                        <el-form :model="APIForm" status-icon ref="APIForm" label-width="80px"
                                 class="api-form">

                            <el-form-item label="API名称:" prop="perName">
                                <el-input size="small" type="text" v-model="APIForm.perName"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="APIUrl:" prop="perApiUrl">
                                <el-input size="small" type="text" v-model="APIForm.perApiUrl"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="请求方式:" prop="perMethod" style="height: 45px">
                                <el-checkbox-group :max="1" v-model="APIForm.perMethod">
                                    <el-checkbox label="GET"></el-checkbox>
                                    <el-checkbox label="POST"></el-checkbox>
                                    <el-checkbox label="PUT"></el-checkbox>
                                    <el-checkbox label="DELETE"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>


                            <el-form-item label="说明:" prop="des">
                                <el-input size="small" type="text" v-model="APIForm.des"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button v-if="editApiBtn" size="mini" class="button-submit" type="warning"
                                           @click="editAPIBtn">编辑API
                                </el-button>
                                <el-button v-else size="mini" class="button-submit" type="primary" @click="addAPI">
                                    添加API
                                </el-button>
                                <el-button size="mini" class="button-reset">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <!--列表-->
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header">
                        <span>后端API列表</span>
                    </div>
                    <div>
                        <div class="search-div">
                            <!--查询条件-->
                            <el-form :inline="true" :model="searchForm">
                                <el-form-item label="API名称:">
                                    <el-input size="small" v-model="searchForm.perName"></el-input>
                                </el-form-item>
                                <el-form-item label="请求方式:">
                                    <el-select size="mini" v-model="searchForm.perMethod" clearable placeholder="请选择">
                                        <el-option value="GET" label="GET"></el-option>
                                        <el-option value="POST" label="POST"></el-option>
                                        <el-option value="PUT" label="PUT"></el-option>
                                        <el-option value="DELETE" label="DELETE"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" size="mini" class="search-btn" @click="selectAPI">查询
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!--用户列表-->
                        <div>
                            <el-table border :data="APITableData" style="width: 100%">
                                <el-table-column prop="perName" label="API中文名" width="180"></el-table-column>
                                <el-table-column prop="perApiUrl" label="请求地址" width="250"></el-table-column>
                                <el-table-column prop="perMethod" label="请求方式" width="100"></el-table-column>
                                <el-table-column prop="des" label="描述" width="250"></el-table-column>
                                <el-table-column prop="address" label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" style="margin-right: 15px"
                                                   @click="editAPI(scope.row)">编辑
                                        </el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deletePermission(scope.row)">
                                            <el-button slot="reference" type="text" size="small">删除</el-button>
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
    import {
        addPermission,
        deletePermission,
        editPermission,
        selectPermission,
        selectPermissionByParam
    } from "../../../api/auth";

    export default {
        name: "APIManage",
        data() {
            return {
                APIForm: {
                    perId: '',
                    perName: '',
                    perApiUrl: '',
                    perMethod: [],
                    parentPerId: '',
                    des: ''
                },
                searchForm: {
                    perName: '',
                    perMethod: ''
                },
                APITableData: [],
                //分页组件
                pagination: {
                    currentPage: 1,
                    pageSizes: [10, 20, 30, 40],
                    pageSize: 10,
                    total: 50
                },
                editApiBtn: false

            }
        },
        created() {
            this.selectAPIList();
        },
        methods: {
            //查询
            selectAPIList() {
                let data = {
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize
                };
                selectPermission(data).then((res) => {
                    this.APITableData = res.data.data.records;
                    this.pagination.total = res.data.data.total;
                }).catch()


            },
            //删除API
            deletePermission(row) {
                deletePermission(row.perId).then((res) => {
                    this.$message.success(res.data.message);
                    this.selectAPIList();
                }).catch()
            },
            //查询
            selectAPI() {
                let data = {
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize,
                    "perName": this.searchForm.perName,
                    "perMethod": this.searchForm.perMethod,
                };
                selectPermissionByParam(data).then((res)=>{
                    this.APITableData = res.data.data.records;
                    this.pagination.total = res.data.data.total;
                }).catch()
            },
            //重置
            resetApiForm() {
                this.APIForm.perId = '';
                this.APIForm.perName = '';
                this.APIForm.perApiUrl = '';
                this.APIForm.perMethod = [];
                this.APIForm.parentPerId = '';
                this.APIForm.des = '';
            },
            //编辑按钮
            editAPI(row) {
                this.APIForm = row;
                this.APIForm.perMethod = [row.perMethod];
                this.editApiBtn = true;
                console.log(this.APIForm);
            },
            //编辑API
            editAPIBtn() {
                let data = {
                    "perId": this.APIForm.perId,
                    "perName": this.APIForm.perName,
                    "perApiUrl": this.APIForm.perApiUrl,
                    "perMethod": this.APIForm.perMethod[0],
                    "parentPerId": this.APIForm.parentPerId,
                    "des": this.APIForm.des
                };
                // console.log(data);
                // return false;
                editPermission(data).then((res) => {
                    this.$message.success(res.data.message);
                    this.resetApiForm();
                    this.selectAPIList();
                    this.editApiBtn = false;
                }).catch()
            },
            //添加API函数
            addAPI() {
                let data = {
                    "perName": this.APIForm.perName,
                    "perApiUrl": this.APIForm.perApiUrl,
                    "perMethod": this.APIForm.perMethod[0],
                    "parentPerId": this.APIForm.parentPerId,
                    "des": this.APIForm.des
                };
                addPermission(data).then((res) => {
                    this.$message.success(res.data.message)
                    this.resetApiForm();
                    this.selectAPIList();
                }).catch()
            },
            //页面大小
            handleSizeChange(val) {
                this.pagination.pageSize = val;
            },
            // 每页变化时改变currentPage
            handleCurrentChange(val) {
                this.pagination.currentPage = val;
                if (this.searchForm.perName!==""&& this.searchForm.perName!==""){
                    this.selectAPI();
                }else {
                    this.selectAPIList();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination-loa {
        float: right;
        margin: 15px;
    }

    .api-form {
        margin: 0 15px 0 5px;

        .button-submit {
            float: left;
            width: 47%;
        }

        .button-reset {
            float: right;
            width: 47%;
        }
    }

    /deep/ .el-checkbox-group {
        font-size: 14px;
    }

    /deep/ .el-checkbox {
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin-right: 30px;
    }
</style>