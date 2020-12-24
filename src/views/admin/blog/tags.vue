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

                                 ref="categoriesOption"
                                 :model="categoriesOption"
                                 label-width="80px">
                            <el-form-item label="名称:(必填)">
                                <el-input clearable placeholder="页面上所显示的名称"
                                          v-model="categoriesOption.categoriesName"></el-input>
                            </el-form-item>

                            <el-form-item label="别名:">
                                <el-input clearable placeholder="一般为单个分类页面的标识，最好为英文"
                                          v-model="categoriesOption.Alias"></el-input>
                            </el-form-item>

                            <el-form-item  label="上级目录:">
                                <el-select class="select-parent" v-model="categoriesOption.parent" placeholder="请选择活动区域">
                                    <el-option v-for="(item,index) in parentOption" :key="index" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </el-form-item>

                            <el-form-item label="描述:">
                                <el-input type="textarea" :rows="4" placeholder="分类描述，需要主题支持"
                                          v-model="categoriesOption.textDesc"></el-input>
                            </el-form-item>

                            <el-form-item>
                                <el-button size="small" type="primary">成功按钮</el-button>
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
                        <el-table :data="categoriesTable" style="width: 100%">
                            <el-table-column prop="categoriesName" label="名称" width="180"></el-table-column>
                            <el-table-column prop="Alias" label="别名" width="180"></el-table-column>
                            <el-table-column prop="textDesc" label="描述" width="220"></el-table-column>
                            <el-table-column prop="parent" label="上级名称" width="100"></el-table-column>
                            <el-table-column prop="textNum" label="文章数" width="180"></el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                                    <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="pagination">
                        <el-pagination
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
    export default {
        name: "tags",
        data() {
            return {
                labelPosition: "top",
                categoriesOption: {
                    //label位置
                    //名称
                    categoriesName: "",
                    Alias: "",
                    parent: "Java",
                    textDesc: ''
                },
                parentOption:[
                    {
                        label: "Java",
                        value: "Java"
                    },{
                        label: "PHP",
                        value: "PHP"
                    },{
                        label: "Python",
                        value: "Python"
                    }
                ],

                //分类列表
                categoriesTable: [{
                    categoriesName: '2016-05-02',
                    Alias: '王小虎',
                    textDesc: '上海市普陀区金沙江路 1518 弄',
                    textNum: '2'
                }, {
                    categoriesName: '2016-05-02',
                    Alias: '王小虎',
                    textDesc: '上海市普陀区金沙江路 1518 弄',
                    textNum: '2'
                }, {
                    categoriesName: '2016-05-02',
                    Alias: '王小虎',
                    textDesc: '上海市普陀区金沙江路 1518 弄',
                    textNum: '2'
                }, {
                    categoriesName: '2016-05-02',
                    Alias: '王小虎',
                    textDesc: '上海市普陀区金沙江路 1518 弄',
                    textNum: '2'
                }],
                //分页
                paginationData:{
                    total: 50,
                    pageSize: 10
                }

            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags-content {
        .tags-form {
            margin: 0 20px 0 20px;
            .tags-btn{
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
    .table-tags{

    }
    .pagination{
        float: right;
        margin-top: 15px;
        padding-bottom: 15px;
    }
</style>
