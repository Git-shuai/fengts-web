<template>
    <div>
        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>角色管理</span>
                    </div>
                    <div class="role-table-8">
                        <el-table
                                border
                                ref="multipleTable"
                                :data="roleData"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
                            <el-table-column prop="roleName" label="角色编码" width="150"></el-table-column>
                            <el-table-column prop="des" label="角色名称" width="150"></el-table-column>
                            <el-table-column label="分配用户">
                                <template slot-scope="scope">
                                    <el-button @click="addMenu(scope.row)" size="mini" style="margin-left: 6px;width: 150px">
                                        查看分配
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
            <!--列表-->
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header">
                        <span>API列表</span>
                    </div>
                    <div>
                        <!--用户列表-->
                        <div>
                            <el-button v-if="warningStatus"  size="mini" type="warning" class="warning-btn">
                                正在给【<span style="color: #df5000;font-weight: bold">{{roleObject.roleName}}({{roleObject.des}})</span>】进行前端菜单配置
                            </el-button>
                            <div class="role-table-16">
                                <el-button v-if="warningStatus" @click="saveMenu" type="primary" size="mini" style="margin-right: 15px;width: 150px">保存配置 </el-button>
                                <el-button v-if="warningStatus" @click="toggleSelection()" type="info" size="mini" style="margin-right: 15px;width: 150px">取消选择 </el-button>
                                <el-button v-if="warningStatus" @click="cancel" type="warning" size="mini" style="margin-right: 15px;width: 150px">取消分配 </el-button>
                                <div style="height: 20px"></div>
                                <el-table
                                        border
                                        ref="multipleTable"
                                        :data="APIData"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange">
                                    <el-table-column
                                            type="selection"
                                            width="60">
                                    </el-table-column>
                                    <el-table-column prop="perName" label="API中文名" width="200"></el-table-column>
                                    <el-table-column prop="perApiUrl" label="请求地址" width="250"></el-table-column>
                                    <el-table-column prop="perMethod" label="请求方式" width="120"></el-table-column>
                                    <el-table-column prop="des" label="描述"></el-table-column>
                                </el-table>
                            </div>
                        </div>

                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {addAPIExp, selectAPIListExp, selectPermission, selectRole} from "../../../api/auth";

    export default {
        name: "roleApi",
        data() {
            return {
                roleObject:{},
                apiIdList:[],
                roleData: [],
                APIData:[],
                multipleSelection: [],
                //警告框是否显示
                warningStatus: false
            }
        },
        created() {
            this.selectRoleList();
            this.selectAPIList();
        },
        methods: {
            //查询用户角色
            selectRoleList(){
                let data={
                    "page": 1,
                    "size": 1000
                };
                selectRole(data).then((res)=>{
                    this.roleData=res.data.data.records;
                }).catch()
            },
            //查询API信息
            selectAPIList(){
                let data = {
                    "page": 1,
                    "size": 1000
                };
                selectPermission(data).then((res)=>{
                    this.APIData=res.data.data.records;
                }).catch()
            },
            addMenu(val){
                this.warningStatus = true;
                this.roleObject = val;
                this.toggleSelection();
                let data = {
                    "roleId": this.roleObject.roleId
                }
                selectAPIListExp(data).then((res) => {
                    let apiList = res.data.data;
                    let data = this.APIData.filter(item => {
                        for (let i = 0; i < apiList.length; i++) {
                            if (item.perId === apiList[i].perId) {
                                return item;
                            }
                        }
                    });
                    this.toggleSelection(data);
                }).catch()
            },
            saveMenu(){
                let data = {
                    "roleId": this.roleObject.roleId,
                    "apiIds": this.apiIdList
                };
                addAPIExp(data).then((response) => {
                    this.$message.success(response.data.message);
                    this.warningStatus = false;
                }).catch()
                this.toggleSelection();
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                    this.apiIdList = val.map(item => {
                        return item.perId
                    });
            },
            cancel(){
                this.warningStatus=false;
                this.toggleSelection();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .warning-btn {
        width: 100%;
    }

    /deep/ .el-card__body {
        padding: 0;
    }

    .role-table-8 {
        padding: 20px;
    }

    .role-table-16{
        padding: 20px;
    }
</style>