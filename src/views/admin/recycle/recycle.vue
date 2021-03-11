<template>
    <div class="blogList-content">

        <!--博客列表-->
        <div class="blog-list">
            <el-table border :default-sort="{prop: 'date', order: 'descending'}" :data="tableData"
                      style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="title" label="标题" width="180"></el-table-column>
                <el-table-column prop="auth" label="作者" width="180"></el-table-column>
                <el-table-column prop="blogStatus" label="状态" width="100"></el-table-column>
                <el-table-column prop="classifyName" label="分类" width="180"></el-table-column>
                <el-table-column prop="tagName" label="标签" width="180"></el-table-column>
                <el-table-column sortable prop="name" label="评论" width="100"></el-table-column>
                <el-table-column sortable prop="readNum" label="访问" width="100"></el-table-column>
                <el-table-column sortable prop="createTime" label="发布时间" width="180"></el-table-column>
                <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                        <el-button @click="editBlog(scope.row)" type="text" size="small">编辑</el-button>
                        <el-popconfirm title="你确定要永久的删除该文章吗？" placement="right" @confirm="deleteBlog(scope.row)">
                            <el-button slot="reference" type="text" size="small">删除</el-button>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!--批量删除-->
        <el-row class="block">
            <el-col :span="12">
                <el-popconfirm title="永久删除选中的文章？" placement="right" @confirm="deleteBatchList()">
                    <el-button slot="reference" type="danger" plain size="mini">批量删除</el-button>
                </el-popconfirm>
            </el-col>
            <el-col :span="12">
                <!--分页-->
                <div class="pagination-plugin">
                    <el-pagination
                            background
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
    import {
        deleteRecycleBlogById,
        selectClassify,
        selectRecycleBlogList,
        deleteBatchIdList
    } from "../../../api/blog";

    export default {
        name: "recycle",
        data() {
            return {
                //搜索数据
                dialogVisible: false,
                searchParam: {
                    keyWord: '',
                    blogStatus: "",
                    classifyId: ''
                },
                blogClassifyList: [],
                //表格数据
                tableData: [],
                blogIdList: [],
                //分页数据
                pagination: {
                    currentPage: 1,
                    hideOnSinglePage: false,
                    pageSizes: [8, 15, 30, 40],
                    pageSize: 8,
                    total: 50
                }
            }
        },
        created() {
            this.selectBlogList();
            this.selectBlogClassifyList();
        },
        methods: {
            selectBlogList() {
                let data = {
                    "page": this.pagination.currentPage,
                    "size": this.pagination.pageSize
                };
                selectRecycleBlogList(data).then((response) => {
                    this.tableData = response.data.data.records;
                    this.pagination.total = response.data.data.total;
                }).catch()
            },
            selectBlogClassifyList() {
                selectClassify().then((res) => {
                    this.blogClassifyList = res.data.data;
                }).catch()
            },
            deleteBlog(row) {
                deleteRecycleBlogById(row.id).then((response) => {
                    this.$message.success(response.data.message)
                }).catch();
                this.selectBlogList();
            },
            deleteBatchList(){
                let data={
                    "batchRecycleId": this.blogIdList
                };
                console.log(data);
                deleteBatchIdList(data).then((response) => {
                    this.$message.success(response.data.message);
                    this.selectBlogList();
                }).catch()
            },
            editBlog(row) {
                this.$router.push({
                    name: "writeBlog",
                    query: {
                        "id": row.id
                    }
                });
            },
            toWrite() {
                this.$router.push({
                    name: "writeBlog"
                });
            },
            handleSelectionChange(val) {
                let data=val.map(item => {
                    return item.id
                });
                this.blogIdList = data;
            },
            handleSizeChange(val) {
                console.log("handleSizeChange");
                console.log(val);
                this.pagination.pageSize = val;
                if (this.judgeSelectParam()) {
                    this.submitForm();
                } else {
                    this.selectBlogList();
                }
            },
            handleCurrentChange(val) {
                console.log("handleCurrentChange");
                console.log(val);
                this.pagination.currentPage = val;
                if (this.judgeSelectParam()) {
                    this.submitForm();
                } else {
                    this.selectBlogList();
                }
            },
            judgeSelectParam() {
                if (this.searchParam.keyWord !== "" || this.searchParam.blogStatus !== "" || this.searchParam.classifyId !== "") {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .blogList-content {
        background-color: #fff;
    }

    .search-content {
        padding: 17px;
    }

    .search-form-item {
        margin-right: 80px;
    }

    .write-button {
        padding: 0 0 0 17px;
    }

    .blog-list {
        padding: 17px;
    }

    .pagination-plugin {
        float: right;
        margin-right: 20px;
    }

    .block {
        margin: 0 15px;
        padding-bottom: 15px;
    }
</style>
