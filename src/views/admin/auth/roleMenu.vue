<template>
    <div>
        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>角色菜单管理</span>
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
                                    <el-button @click="addMenu(scope.row)" size="mini"
                                               style="margin-left: 6px;width: 150px">
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
                        <span>角色菜单列表</span>
                    </div>
                    <div>
                        <!--用户列表-->
                        <div>
                            <el-button v-if="warningStatus" size="mini" type="warning" class="warning-btn">
                                正在给【<span style="color: #df5000;font-weight: bold">{{roleObject.roleName}}({{roleObject.des}})</span>】进行前端菜单配置
                            </el-button>
                            <div class="role-table-16">
                                <el-button v-if="warningStatus" @click="saveMenu" type="primary" size="mini"
                                           style="margin-right: 15px;width: 150px">保存配置
                                </el-button>
                                <el-button v-if="warningStatus" @click="toggleSelection()" type="info" size="mini"
                                           style="margin-right: 15px;width: 150px">取消选择
                                </el-button>
                                <el-button v-if="warningStatus" @click="cancel" type="warning" size="mini"
                                           style="margin-right: 15px;width: 150px">取消分配
                                </el-button>
                                <div v-if="warningStatus" style="height: 20px"></div>
                                <el-table
                                        border
                                        ref="multipleTable"
                                        :data="menuData"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange">
                                    <el-table-column
                                            type="selection"
                                            width="60">
                                    </el-table-column>
                                    <el-table-column prop="parentName" label="父级" width="200">
                                    </el-table-column>
                                    <el-table-column prop="menuName" label="菜单英文名称" width="150"></el-table-column>
                                    <el-table-column prop="menuItemName" label="菜单中文名称" width="120"></el-table-column>
                                    <el-table-column prop="menuDes" label="说明" width="250"></el-table-column>
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
    import {
        addExp,
        addUserRoleList,
        selectMenuList,
        selectRole,
        selectRoleMenuList
    } from "../../../api/auth";

    export default {
        name: "userMenu",
        data() {
            return {
                roleObject: {},
                menuIdList: [],
                roleData: [],
                menuData: [],
                multipleSelection: [],
                //警告框是否显示
                warningStatus: false
            }
        },
        created() {
            this.selectRoleList();
            this.selectMenuList();
        },
        methods: {
            //查询角色信息
            selectRoleList() {
                let data = {
                    "page": 1,
                    "size": 1000
                };
                selectRole(data).then((res) => {
                    this.roleData = res.data.data.records;
                }).catch()
            },
            //查询菜单信息
            selectMenuList() {
                let data = {
                    "page": 1,
                    "size": 1000
                };
                selectMenuList(data).then((res) => {
                    console.log(res.data.data.records);
                    this.menuData = res.data.data.records;
                }).catch()
            },
            addMenu(val) {
                this.warningStatus = true;
                this.roleObject = val;
                this.toggleSelection();
                let data = {
                    "roleId": this.roleObject.roleId
                }
                selectRoleMenuList(data).then((res) => {
                    let menuList = res.data.data;
                    let data = this.menuData.map(item => {
                        item.setup = "";
                        for (let i = 0; i < menuList.length; i++) {
                            if (item.menuId === menuList[i].menuId) {
                                item.setup = "已设置";
                                return item;
                            }
                        }
                    });
                    this.toggleSelection(data);
                }).catch()
            },
            saveMenu() {
                let data = {
                    "roleId": this.roleObject.roleId,
                    "menuIds": this.menuIdList
                };
                addExp(data).then((response) => {
                    this.$message.success(response.data.message);
                    this.warningStatus = false;
                }).catch()
                this.toggleSelection();
            },
            cancel() {
                this.toggleSelection();
                this.warningStatus = false;
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
                if (val===null) {
                    this.menuIdList = val.map(item => {
                        return item.menuId
                    });
                }
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

    .role-table-16 {
        padding: 20px;
    }
</style>