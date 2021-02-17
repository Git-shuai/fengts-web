<template>
    <div class="role-manage">

        <el-row :gutter="30">
            <!--查询表单-->
            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header">
                        <span>前端菜单管理</span>
                    </div>
                    <div>
                        <el-form :model="menuForm" status-icon ref="menuForm" label-width="85px"
                                 class="user-form">
                            <el-form-item label="父级菜单:" prop="parentId">
                                <el-select style="width: 100%" v-model="menuForm.parentId" size="small"
                                           placeholder="没有上级">
                                    <el-option
                                            v-for="item in parentMenuOption"
                                            :key="item.menuId"
                                            :label="item.menuName"
                                            :value="item.menuId">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="菜单名称:" prop="menuName">
                                <el-input size="small" type="text" v-model="menuForm.menuName"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="菜单ICON:" prop="iconName">
                                <el-input size="small" type="text" v-model="menuForm.iconName"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="页面链接:" prop="menuUrl">
                                <el-input size="small" type="text" v-model="menuForm.menuUrl"
                                          autocomplete="off"></el-input>
                            </el-form-item>

                            <el-form-item label="说明:" prop="menuDes">
                                <el-input type="textarea" :rows="2" placeholder="请输入内容"
                                          v-model="menuForm.menuDes"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="mini" class="btn-submit" type="primary" @click="addMenu">添加用户
                                </el-button>
                                <el-button size="mini" class="btn-reset" @click="resetForm('menuForm')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <!--列表-->
            <el-col :span="16">
                <el-card class="box-card">
                    <div slot="header">
                        <span>前端菜单列表</span>
                    </div>
                    <div>
                        <!--用户列表-->
                        <div>
                            <el-table border :span-method="objectSpanMethod" :data="menuTableData" style="width: 100%">
                                <el-table-column prop="parentName" label="父级菜单" width="120"></el-table-column>
                                <el-table-column prop="menuName" label="菜单名称" width="120"></el-table-column>
                                <el-table-column prop="iconName" label="菜单icon" width="150"></el-table-column>
                                <el-table-column prop="menuUrl" label="页面链接" width="150"></el-table-column>
                                <el-table-column prop="menuDes" label="说明" width="160"></el-table-column>
                                <el-table-column width="120" label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" style="margin-right: 15px">编辑</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteBlog(scope.row)">
                                            <el-button slot="reference" type="text">删除</el-button>
                                        </el-popconfirm>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="parentName" label="父操作">
                                    <template slot-scope="scope">
                                        <el-button type="text" style="margin-right: 15px">编辑</el-button>
                                        <el-button type="text" style="margin-right: 15px">添加子菜单</el-button>
                                        <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteBlog(scope.row)">
                                            <el-button slot="reference" type="text">删除</el-button>
                                        </el-popconfirm>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div class="pagination-loa">
                                <el-pagination
                                        background
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="pagination.currentPage"
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
    import {addMenu, selectMenuList, selectMenuParentList} from "../../../api/auth";

    export default {
        name: "menuManage",
        data() {
            return {
                //菜单列表
                menuForm: {
                    parentId: '',
                    menuName: '',
                    menuUrl: '',
                    iconName: '',
                    menuDes: ''
                },
                menuTableData: [],
                parentMenuOption: [],
                //分页组件
                pagination: {
                    currentPage: 1,
                    pageSize: 10,
                    total: 50
                },
            }
        },
        created() {
            this.parentMenu();
            this.selectMenuList();

        },
        mounted() {
        },
        methods: {
            //添加到下拉框内
            parentMenu() {
                selectMenuParentList().then((res) => {
                    this.parentMenuOption = res.data.data;
                }).catch()
            },
            //添加菜单
            addMenu() {
                let data = {
                    "parentId": this.menuForm.parentId,
                    "menuName": this.menuForm.menuName,
                    "menuUrl": this.menuForm.menuUrl,
                    "iconName": this.menuForm.iconName,
                    "menuDes": this.menuForm.menuDes
                }
                addMenu(data).then((res) => {
                    this.$message.success(res.data.message);
                    this.menuForm = {};
                }).catch();
                this.parentMenu();
            },
            //重置表单
            resetForm(userForm) {
                this.$refs[userForm].resetFields();
            },
            //加载菜单列表
            selectMenuList() {
                let data = {
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize
                };
                selectMenuList(data).then((res)=>{
                    this.menuTableData=res.data.data.records;
                    this.pagination.total=res.data.data.total;
                    //表格合并
                    this.mergeCells();
                }).catch()
            },
            editRole() {

            },
            //合并单元格
            //里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex 四个属性
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex === 0) {
                    return {
                        rowspan: row.rowspan,
                        colspan: 1
                    };
                }
                if (columnIndex === 6) {
                    return {
                        rowspan: row.rowspan,
                        colspan: 1
                    };
                }

            },
            //返回单元格需要合并到数据
            mergeCells() {
                // 先给所有的数据都加一个v.rowspan = 1
                this.menuTableData.forEach(v => {
                    v.rowspan = 1;
                });
                // 双层循环
                for (let i = 0; i < this.menuTableData.length; i++) {
                    // 内层循环，上面已经给所有的行都加了v.rowspan = 1
                    // 这里进行判断
                    // 如果当前行的id和下一行的id相等
                    // 就把当前v.rowspan + 1
                    // 下一行的v.rowspan - 1
                    for (let j = i + 1; j < this.menuTableData.length; j++) {
                        //此处可根据相同字段进行合并，此处是根据的id
                        if (this.menuTableData[i].parentName === this.menuTableData[j].parentName) {
                            this.menuTableData[i].rowspan++;
                            this.menuTableData[j].rowspan--;
                        }
                    }
                    // 这里跳过已经重复的数据
                    i = i + this.menuTableData[i].rowspan - 1;
                }
            },
            //页面大小
            handleSizeChange(val) {
                this.pagination.pageSize = val;
            },
            // 每页变化时改变currentPage
            handleCurrentChange(val) {
                this.pagination.currentPage = val;
                if (this.searchForm.username !== "" || this.searchForm.createTime !== "") {
                    // this.searchUser();
                } else {
                    this.selectMenuList();
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