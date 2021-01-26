<template>
    <div class="categories-content">
        <el-row :gutter="30">
            <el-col :span="9">
                <el-card class="box-card">
                    <div slot="header">
                        <span class="title-span">添加分类</span>
                    </div>
                    <div class="categories-form">
                        <el-form :label-position="labelPosition"

                                 ref="categoriesOption"
                                 :model="categoriesOption"
                                 label-width="80px">
                            <el-form-item label="名称:(必填)">
                                <el-input clearable placeholder="页面上所显示的名称"
                                          v-model="categoriesOption.categoriesName"></el-input>
                            </el-form-item>


                            <el-form-item label="上级目录:">
                                <el-select filterable class="select-parent"
                                           v-model="categoriesOption.parentId"
                                           placeholder="没有上级标签" clearable
                                           @visible-change="selectParentClassify"
                                >
                                    <el-option v-for="(item,index) in parentOption" :key="index" :label="item.classifyName"
                                               :value="item.id"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="描述:">
                                <el-input type="textarea" :rows="4" placeholder="分类描述，需要主题支持"
                                          v-model="categoriesOption.textDesc"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button v-if="classifyBtnStatus" size="small" type="primary" @click="addBlogClassify">添加标签</el-button>
                                <el-button v-else size="small" type="warning" @click="editBlogClassify">修改标签</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="15">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="title-span">分类列表</span>
                    </div>
                    <div class="table-categories">
                        <el-table :data="categoriesTable" style="width: 100%">
                            <el-table-column prop="classifyName" label="名称" width="180"></el-table-column>
                            <el-table-column prop="des" label="描述" width="220"></el-table-column>
                            <el-table-column prop="classifyParentName" label="上级名称" width="100"></el-table-column>
                            <el-table-column prop="sum" label="文章数" width="180"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="editClassify(scope.row)" type="text" size="small">编辑</el-button>
                                    <el-popconfirm title="你确定要删除该分类吗？" @confirm="deleteClassify(scope.row)">
                                        <el-button slot="reference" type="text" size="small">删除</el-button>
                                    </el-popconfirm>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="pagination">
                        <el-pagination
                                @current-change="handleSizeChange"
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
    import {
        addClassify,
        deleteClassify,
        editClassify,
        selectClassifyList,
        selectParentClassify
    } from "../../../api/blog";

    export default {
        name: "categories",
        data() {
            return {
                classifyBtnStatus: true,
                labelPosition: "top",
                categoriesOption: {
                    //label位置
                    //名称
                    id: "",
                    categoriesName: "",
                    parentId: "",
                    textDesc: ''
                },
                //父标签备份（用来更新下拉框）
                parentOptionB: [],
                parentOption: [],

                //分类列表
                categoriesTable: [],
                //分页
                paginationData:{
                    page: 1,
                    pageSize: 8,
                    total: 50
                }

            }
        },
        created() {
            this.selectClassifyList();
            this.selectParentClassify();
        },
        methods: {
            //添加分类
            addBlogClassify(){
                let data={
                    "parentId": this.categoriesOption.parentId,
                    "classifyName": this.categoriesOption.categoriesName,
                    "des": this.categoriesOption.textDesc
                };
                addClassify(data).then((response)=>{
                    //展示成功信息
                    this.$message.success(response.data.message);
                    //更新输入框
                    this.categoriesOption={};
                    this.selectClassifyList();
                }).catch();
            },
            deleteClassify(row){
                deleteClassify(row.id).then((response)=>{
                    //提示信息
                    this.$message.success(response.data.message);
                    //刷新列表
                    this.selectClassifyList();
                }).catch();
            },
            //修改分类按钮的事件
            editBlogClassify(){
                let data={
                    "id": this.categoriesOption.id,
                    "parentId": this.categoriesOption.parentId,
                    "classifyName": this.categoriesOption.categoriesName,
                    "des": this.categoriesOption.textDesc
                };
                editClassify(data).then((response)=>{
                    this.$message.success(response.data.message);
                    this.selectClassifyList();
                    this.categoriesOption={};
                }).catch();
            },
            editClassify(row){
                //修改分类按钮
                this.classifyBtnStatus=false;
                //添加分类信息回显
                this.categoriesOption.id=row.id;
                this.categoriesOption.parentId=row.parentId;
                this.categoriesOption.textDesc=row.des;
                this.categoriesOption.categoriesName=row.classifyName;
                //设置上级分类（this.parentOptionB 重点）
                this.parentOption = this.parentOptionB.filter(item => item.classifyName !== row.classifyName);
            },
            selectClassifyList(){
                let data ={
                    "page": this.paginationData.page,
                    "size": this.paginationData.pageSize
                };
                selectClassifyList(data).then((response)=>{
                    //列表赋值
                    this.categoriesTable=response.data.data.records;
                    this.paginationData.total=response.data.data.total;
                }).catch();
            },
            selectParentClassify(){
                //查询父分类
                selectParentClassify().then((response)=>{
                    this.parentOption=response.data.data;
                    this.parentOptionB=this.parentOption;
                }).catch();
            },
            handleSizeChange(value) {
                this.paginationData.page = value;
                this.selectClassifyList();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .categories-content {
        .categories-form {
            margin: 0 20px 0 20px;
            .categories-btn{
                margin-right: 60px;
            }
        }
    }

    .title-span {
        font-size: 15px;
        font-weight: bold;
    }
    .select-parent{
        width: 100%;
    }
    .table-categories{

    }
    .pagination{
        float: right;
        margin-top: 15px;
        padding-bottom: 15px;
    }
</style>
