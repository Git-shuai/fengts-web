<template>
    <div class="tags-content">
        <el-row :gutter="30">
            <el-col :span="9">
                <el-card class="box-card">
                    <div slot="header">
                        <span class="title-span">添加标签</span>
                    </div>
                    <div class="tags-form">
                        <el-form :label-position="labelPosition"
                                 ref="tagsOption"
                                 :model="tagsOption"
                                 label-width="80px">
                            <el-form-item label="名称:(必填)">
                                <el-input clearable placeholder="页面上所显示的名称"
                                          v-model="tagsOption.tagsName"></el-input>
                            </el-form-item>


                            <el-form-item label="上级目录:">
                                <el-select filterable class="select-parent" v-model="tagsOption.parentId"
                                           placeholder="没有上级标签" clearable>
                                    <el-option v-for="(item,index) in parentOption" :key="index" :label="item.tagName"
                                               :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="描述:">
                                <el-input type="textarea" :rows="4" placeholder="标签描述，需要主题支持"
                                          v-model="tagsOption.textDesc"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button v-if="tagBtnStatus" size="small" type="primary" @click="addBlogTag">添加标签</el-button>
                                <el-button v-else size="small" type="warning" @click="editBlogTag">修改标签</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="15">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="title-span">标签列表</span>
                    </div>
                    <div class="table-tags">
                        <el-table :data="tagsTable" style="width: 100%">
                            <el-table-column prop="tagName" label="名称" width="180"></el-table-column>
                            <el-table-column prop="des" label="描述" width="250"></el-table-column>
                            <el-table-column prop="parentTagName" label="上级名称" width="180"></el-table-column>
                            <el-table-column prop="sum" label="文章数" width="180"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="editTag(scope.row)" type="text" size="small">编辑</el-button>
                                    <el-popconfirm title="你确定要删除该标签吗？" @confirm="deleteTag(scope.row)">
                                        <el-button slot="reference" type="text" size="small">删除</el-button>
                                    </el-popconfirm>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="pagination">
                        <el-pagination
                                @current-change="handleCurrentChange"
                                @size-change="handleSizeChange"
                                background
                                layout="prev, pager, next"
                                :page-size="paginationData.pageSize"
                                :total="paginationData.total">
                        </el-pagination>
                    </div>
                </el-card>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    import {addTag, deleteTag, editTag, selectParentTag, selectTagsList} from "../../../api/blog";

    export default {
        name: "tags",
        data() {
            return {
                tagBtnStatus: true,
                labelPosition: "top",
                tagsOption: {
                    //label位置
                    //名称
                    id: "",
                    tagsName: "",
                    parentId: "",
                    textDesc: ''
                },
                //父标签备份（用来更新下拉框）
                parentOptionB: [],
                parentOption: [],

                //分类列表
                tagsTable: [],
                //分页
                paginationData: {
                    page: 1,
                    pageSize: 8,
                    total: 50
                }
            }
        },
        created() {
            this.selectParentTag();
            this.selectTagList();
        },
        methods: {
            //查询父类标签
            selectParentTag() {
                selectParentTag().then((response) => {
                    //赋值到上级目录
                    this.parentOption = response.data.data;
                    this.parentOptionB = this.parentOption;
                }).catch()
            },
            addBlogTag() {
                let data = {
                    "tagName": this.tagsOption.tagsName,
                    "des": this.tagsOption.textDesc,
                    "parentId": this.tagsOption.parentId
                };
                addTag(data).then((response) => {
                    let resData = response.data;
                    this.$message.success(resData.message);
                    //重置
                    this.tagsOption = {};
                    //更新列表
                    this.selectTagList();
                    //更新父标签
                    this.selectParentTag();
                }).catch();
            },
            selectTagList() {
                let data = {
                    "page": this.paginationData.page,
                    "size": this.paginationData.pageSize
                };
                selectTagsList(data).then((response) => {
                    this.tagsTable = response.data.data.records;
                    //赋予总数
                    this.paginationData.total = response.data.data.total;
                }).catch()
            },
            handleSizeChange(val){
                this.paginationData.pageSize=val;
                this.selectTagList();
            },
            handleCurrentChange(value) {
                this.paginationData.page = value;
                this.selectTagList();
            },
            deleteTag(row) {
                deleteTag(row.id).then(() => {
                    this.$message.success("删除成功");
                    this.selectTagList();
                }).catch();
            },
            editTag(row) {
                //更新父标签
                this.tagBtnStatus = false;
                //设置更新信息
                this.tagsOption.id = row.id;
                this.tagsOption.tagsName = row.tagName;
                this.tagsOption.textDesc = row.des;
                this.tagsOption.parentId = row.parentId;
                //设置上级分类（this.parentOptionB 重点）
                this.parentOption = this.parentOptionB.filter(item => item.tagName !== row.tagName);

            },
            editBlogTag() {
                let data = {
                    "id": this.tagsOption.id,
                    "des": this.tagsOption.textDesc,
                    "tagName": this.tagsOption.tagsName,
                    "parentId": this.tagsOption.parentId
                };
                editTag(data).then(() => {
                    this.$message.success("修改成功");
                    this.tagBtnStatus = true;
                    this.tagsOption = {};
                    this.selectTagList();
                }).catch()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags-content {
        .tags-form {
            margin: 0 20px 0 20px;

            .tags-btn {
                margin-right: 60px;
            }
        }
    }

    .title-span {
        font-size: 15px;
        font-weight: bold;
    }

    .select-parent {
        width: 100%;
    }

    .table-tags {

    }

    .pagination {
        float: right;
        margin-top: 15px;
        padding-bottom: 15px;
    }
</style>
