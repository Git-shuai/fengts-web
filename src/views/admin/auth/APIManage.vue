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
                            <el-form-item label="父级菜单:" prop="parentMenu">
                                <el-input size="small" type="text" v-model="APIForm.parentMenu"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="API中文名:" prop="APIName">
                                <el-input size="small" type="text" v-model="APIForm.APIName"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="请求地址:" prop="urlAddress">
                                <el-input size="small" type="text" v-model="APIForm.urlAddress"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="请求方式:" prop="urlWay" style="height: 45px">
                                <el-checkbox-group :max="1" v-model="APIForm.urlWay">
                                    <el-checkbox label="GET"></el-checkbox>
                                    <el-checkbox label="POST"></el-checkbox>
                                    <el-checkbox label="PUT"></el-checkbox>
                                    <el-checkbox label="DELETE"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>

                            <el-form-item label="排序:" prop="sort">
                                <el-input size="small" type="text" v-model="APIForm.sort" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="说明:" prop="des">
                                <el-input size="small" type="text" v-model="APIForm.des" autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button size="mini" class="button-submit" type="primary"
                                           >添加用户
                                </el-button>
                                <el-button size="mini" class="button-reset" >重置</el-button>
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
                                <el-form-item label="父级菜单:">
                                    <el-select size="mini" v-model="searchForm.parentName" clearable placeholder="请选择">
                                        <el-option :value="1" :label="1"></el-option>
                                        <el-option :value="1" :label="1"></el-option>
                                        <el-option :value="1" :label="1"></el-option>
                                        <el-option :value="1" :label="1"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="API中文名:">
                                    <el-input size="small" v-model="searchForm.APIName"></el-input>
                                </el-form-item>
                                <el-form-item label="请求方式:">
                                    <el-select size="mini" v-model="searchForm.urlWay" clearable placeholder="请选择">
                                        <el-option value="GET" label="GET"></el-option>
                                        <el-option value="POST" label="POST"></el-option>
                                        <el-option value="PUT" label="PUT"></el-option>
                                        <el-option value="DELETE" label="DELETE"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" size="mini" class="search-btn">查询
                                    </el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!--用户列表-->
                        <div>
                            <el-table border :data="userTableData" style="width: 100%">
                                <el-table-column prop="parentMenu" label="父级菜单" width="120"></el-table-column>
                                <el-table-column prop="APIName" label="API中文名" width="120"></el-table-column>
                                <el-table-column prop="urlAddress" label="请求地址" width="150"></el-table-column>
                                <el-table-column prop="urlWay" label="请求方式" width="80"></el-table-column>
                                <el-table-column prop="sort" label="排序" width="80"></el-table-column>
                                <el-table-column prop="des" label="描述" width="250"></el-table-column>
                                <el-table-column prop="address" label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" style="margin-right: 15px">编辑</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？">
                                            <el-button slot="reference" type="text" size="small">删除</el-button>
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
        name: "APIManage",
        data() {
            return {
                APIForm: {
                    parentMenu: "",
                    APIName: '',
                    urlAddress: '',
                    urlWay: [],
                    sort: '',
                    des: ''
                },
                searchForm: {
                    parentName: "",
                    APIName:"",
                    urlWay: ''
                },
                userTableData: []

            }
        },
    }
</script>

<style lang="scss" scoped>

    .api-form{
        margin: 0 15px 0 5px;
        .button-submit{
            float: left;
            width: 47%;
        }
        .button-reset{
            float: right;
            width: 47%;
        }
    }








    /deep/.el-checkbox-group{
        font-size: 14px;
    }
    /deep/.el-checkbox {
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