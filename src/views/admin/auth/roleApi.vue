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
                            <el-table-column prop="address" label="角色编码" width="150">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column prop="name" label="角色名称" width="150"></el-table-column>
                            <el-table-column label="分配API">
                                <template>
                                    <el-button @click="addMenu" size="mini" style="margin-right: 15px;width: 150px">查看分配</el-button>
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
                            <el-button v-if="warningStatus"  size="mini" type="warning" class="warning-btn">正在给【】进行菜单配置</el-button>
                            <div class="role-table-16">
                                <el-button @click="saveMenu" size="mini" style="margin-right: 15px;width: 150px">保存配置</el-button>
                                <div style="height: 20px"></div>
                                <el-table
                                        border
                                        ref="multipleTable"
                                        :data="roleData"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        @selection-change="handleSelectionChange">
                                    <el-table-column
                                            type="selection"
                                            width="60">
                                    </el-table-column>
                                    <el-table-column prop="address" label="父级" width="200">
                                        <template slot-scope="scope">{{ scope.row.date }}</template>
                                    </el-table-column>
                                    <el-table-column prop="name" label="菜单名称" width="200"></el-table-column>
                                    <el-table-column prop="name" label="说明" width="300"></el-table-column>
                                    <el-table-column prop="name" label="设置情况"></el-table-column>
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
    export default {
        name: "roleApi",
        data() {
            return {
                roleData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: [],
                //警告框是否显示
                warningStatus: false
            }
        },
        methods: {
            addMenu(){
                this.warningStatus=true;
            },
            saveMenu(){
                this.warningStatus=false;
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
                this.multipleSelection = val;
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