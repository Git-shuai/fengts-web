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
                        <el-form :model="menuForm" status-icon ref="menuForm" label-width="73px"
                                 class="user-form">
                            <el-form-item label="父级菜单:" prop="username">
                                <el-input size="small" type="text" v-model="menuForm.username"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="菜单名称:" prop="username">
                                <el-input size="small" type="text" v-model="menuForm.username"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="页面链接:" prop="password">
                                <el-input size="small" type="password" v-model="menuForm.password"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="排序:" prop="des">
                                <el-input size="small" type="password" v-model="menuForm.password"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="说明:" prop="des">
                                <el-input size="small" type="password" v-model="menuForm.password"
                                          autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="mini" class="btn-submit" type="primary"
                                           @click="submitForm('menuForm')">添加用户
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
                            <el-table id="menuTableData" border :span-method="objectSpanMethod" :data="menuTableData"
                                      style="width: 100%">
                                <el-table-column prop="parentName" label="父级菜单" width="120"></el-table-column>
                                <el-table-column prop="menuName" label="菜单名称" width="120"></el-table-column>
                                <el-table-column prop="menuUrl" label="页面链接" width="200"></el-table-column>
                                <el-table-column prop="sort" label="排序" width="100"></el-table-column>
                                <el-table-column prop="des" label="说明" width="250"></el-table-column>
                                <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button type="primary" size="small" style="margin-right: 15px">编辑</el-button>
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
        name: "menuManage",
        data() {
            return {
                menuForm: {
                    username: '',
                    password: '',
                    des: ''
                },
                menuTableData: [{
                    parentName: "C",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                },{
                    parentName: "C!",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                },{
                    parentName: "C!",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                },{
                    parentName: "C@",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                },{
                    parentName: "C@",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                },{
                    parentName: "C%",
                    menuName: "王小虎",
                    menuUrl: "/blog/blogList",
                    sort: "100",
                    des:"说明"
                }]

            }
        },
        created() {
            this.mergeCells();
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
            onSubmit() {

            },
            //合并单元格
            //里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex 四个属性
            objectSpanMethod({row, column, rowIndex, columnIndex}) {
                if (columnIndex===0){
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