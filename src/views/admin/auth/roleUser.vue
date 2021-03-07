<template>
    <div>
        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>角色用户编辑</span>
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
                        <span>用户列表</span>
                    </div>
                    <div>
                        <!--用户列表-->
                        <div>
                            <el-button v-if="warningStatus" size="mini" type="warning" class="warning-btn">
                                正在给【<span style="color: #df5000;font-weight: bold">{{roleObject.roleName}}({{roleObject.des}})</span>】分配用户
                            </el-button>
                            <div class="role-table-16">
                                <el-button v-if="warningStatus" @click="saveMenu" type="primary" size="mini" style="margin-right: 15px;width: 150px">保存配置 </el-button>
                                <el-button v-if="warningStatus" @click="toggleSelection()" type="info" size="mini" style="margin-right: 15px;width: 150px">取消选择 </el-button>
                                <el-button v-if="warningStatus" @click="cancel" type="warning" size="mini" style="margin-right: 15px;width: 150px">取消分配 </el-button>
                                <div style="height: 20px"></div>
                                <el-table
                                        border
                                        ref="multipleTable"
                                        :data="userData"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange">
                                    <el-table-column type="selection" width="80"></el-table-column>
                                    <el-table-column prop="username" label="用户名" width="300"></el-table-column>
                                    <el-table-column prop="des" label="说明" width="300"></el-table-column>
                                    <el-table-column prop="setup" label="设置情况"></el-table-column>
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
    import {addUserRoleList, selectRole, selectUserList, selectUserRoleList} from "../../../api/auth";

    export default {
        name: "roleUser",
        data() {
            return {
                roleObject: {},
                userIdList: [],
                roleData: [],
                userData:[],
                multipleSelection: [],
                //警告框是否显示
                warningStatus: false
            }
        },
        created() {
            //查询用户角色
            this.selectRoleList();
            //查询用户信息
            this.selectUserList();
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
            //查询用户信息
            selectUserList(){
                let data={
                    "page": 1,
                    "size": 100
                };
                selectUserList(data).then((res)=>{
                    this.userData=res.data.data.records;
                }).catch()
            },
            //查看分配按钮
            addMenu(val) {
                this.warningStatus = true;
                this.roleObject=val;
                this.toggleSelection();
                let data={
                    "roleId": this.roleObject.roleId
                }
                selectUserRoleList(data).then((res)=>{
                    let userList = res.data.data;
                    let data =this.userData.filter(item=>{
                        item.setup="";
                        for(let i=0;i<userList.length;i++){
                            if (item.userId===userList[i].userId){
                                item.setup="已设置";
                                return item;
                            }
                        }
                    });
                    this.toggleSelection(data);
                }).catch()
            },
            //保存配置按钮
            saveMenu() {
                let data={
                    "roleId": this.roleObject.roleId,
                    "userIds": this.userIdList
                };
                addUserRoleList(data).then((response)=>{
                    console.log(response.data);
                    this.$message.success(response.data.message);
                    this.warningStatus = false;
                }).catch()
            },
            cancel(){
                this.warningStatus=false;
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
                this.userIdList=val.map(item => {return item.userId});
            }
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