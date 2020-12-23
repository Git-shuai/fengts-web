<template>
    <div class="blogList-content">
        <!--搜索-->
        <div class="search-content">
            <el-form :inline="true" ref="formInline" :model="searchTerm" class="demo-form-inline">
                <el-form-item class="search-form-item" label="关键字:" prop="keyword">
                    <el-input size="small" v-model="searchTerm.keyword"></el-input>
                </el-form-item>
                <el-form-item class="search-form-item" label="博客状态:" prop="blogStatus">
                    <el-select size="small" v-model="searchTerm.blogStatus">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="search-form-item" label="博客分类:" prop="classification">
                    <el-select size="small" v-model="searchTerm.classification">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button size="small" type="primary" @click="submitForm('formInline')">立即创建</el-button>
                    <el-button size="small" @click="resetForm('formInline')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--写文章-->
        <div class="write-button">
            <el-button size="mini" type="primary" @click="toWrite">写文章</el-button>
        </div>

        <!--博客列表-->
        <div class="blog-list">
            <el-table :default-sort = "{prop: 'date', order: 'descending'}" :data="tableData"
                      style="width: 100%"  @selection-change="handleSelectionChange" >
                <el-table-column  type="selection" width="55"></el-table-column>
                <el-table-column  prop="date" label="标题" width="180"> </el-table-column>
                <el-table-column prop="name" label="状态" width="180"></el-table-column>
                <el-table-column prop="name" label="分类" width="180"></el-table-column>
                <el-table-column prop="name" label="标签" width="180"></el-table-column>
                <el-table-column sortable prop="name" label="评论" width="180"></el-table-column>
                <el-table-column sortable prop="name" label="访问" width="180"></el-table-column>
                <el-table-column sortable prop="name" label="发布时间" width="180"></el-table-column>
                <el-table-column prop="address" label="操作"></el-table-column>
            </el-table>
        </div>
        <!--批量删除-->
        <el-row class="block">
            <el-col :span="12">
                <el-button type="danger" plain size="mini">批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <!--分页-->
                <div class="pagination-plugin">
                    <el-pagination
                            background
                            :hide-on-single-page="pagination.hideOnSinglePage"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="pagination.currentPage"
                            :page-sizes="pagination.pageSizes"
                            :page-size="pagination.pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="pagination.total">
                    </el-pagination>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                //搜索数据
                searchTerm: {
                    keyword: '',
                    blogStatus: '',
                    classification: ''
                },
                //表格数据
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                multipleSelection: [],
                //分页数据
                pagination:{
                    currentPage: 1,
                    hideOnSinglePage: false,
                    pageSizes: [10, 20, 30, 50],
                    pageSize: 10,
                    total: 100
                }
            }
        },
        methods: {
            toWrite(){
                this.$router.push({
                    name: "writeBlog"
                });
            },
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
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(val)
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blogList-content {
    }
    .search-content{
        padding: 17px;
    }
    .search-form-item{
        margin-right: 80px;
    }
    .write-button{
        padding: 0 0 0 17px;
    }
    .blog-list{
        padding: 17px;
    }
    .pagination-plugin{
        float: right;
        margin-right: 20px;
    }
    .block{
        margin: 0 15px;
        padding-bottom: 15px;
    }
</style>
