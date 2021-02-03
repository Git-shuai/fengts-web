<template>
    <div class="write-content">
        <!--标题-->
        <div class="title-input">
            <el-input v-model="blogDetails.title" placeholder="请输入文章标题" clearable>
                <template slot="prepend">标题</template>
            </el-input>
        </div>
        <!--编辑器-->
        <Editormd :content.sync="blogDetails.content" />
        <!--发布-->
        <div class="publish-btn">
            <div class="btn">
                <el-row>
                    <el-button size="mini" type="danger" @click="saveDraft" plain>保存草稿</el-button>
                    <el-button size="mini" plain>预览</el-button>
                    <el-button size="mini" type="primary" @click="publish">发布</el-button>
                </el-row>
            </div>
        </div>
        <!--弹出框-->
        <div>
            <el-dialog title="发布文章" :visible.sync="dialogVisible" width="30%" class="">
                <div>
                    <el-form :model="publishForm" status-icon ref="publishForm" label-width="75px">
                        <el-form-item label="文章标签:" prop="pass">
                            <el-button size="mini" @click="addTag">
                                <span class="sapn-icon"><i class="el-icon-plus"></i> 添加文章标签</span>
                            </el-button>
                            <div class="tag-back" v-if="isTagBack">
                                <div class="tag-tip">还可添加5个标签</div>
                                <div>
                                    <el-input class="tag-input" placeholder="请输入文字搜索，Enter键入可添加自定义标签"
                                              v-model="publishForm.tag" clearable></el-input>
                                </div>
                                <div class="tabs-add">
                                    <!--tabs标签-->
                                    <div class="tabs-span">
                                        <span>mysql</span>
                                        <span>mysql</span>
                                        <span>mysql</span>
                                        <span>mysql</span>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="文章分类:" prop="pass">
                            <el-button size="mini">
                                <span class="sapn-icon"><i class="el-icon-plus"></i> 添加文章分类</span>
                            </el-button>
                            <el-card class="box-card">
                                <div slot="header">
                                    <span>选择分类</span>
                                </div>
                                <div class="">
                                    <el-checkbox-group v-model="checkList">
                                        <el-checkbox class="classify-box" label="复选框 A"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 B"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 C"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                        <el-checkbox class="classify-box" label="复选框 D"></el-checkbox>
                                    </el-checkbox-group>
                                </div>
                            </el-card>
                        </el-form-item>
                        <el-form-item label="文章类型" prop="pass">
                            <el-select size="mini" v-model="value" placeholder="请选择类型">
                                <el-option value=""></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button size="mini" type="primary">提交</el-button>
                            <el-button size="mini">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import Editormd from "../../../components/Editormd";
    import {addBlog, selectBlogById} from "../../../api/blog";

    export default {
        name: "writeBlog",
        props: {

        },
        components: {
            Editormd
        },
        data() {

            return {
                //博客内容
                blogDetails: {
                    //标题
                    title: "",
                    content: ""
                },

                //弹出窗
                dialogVisible: false,
                publishForm: {
                    tag: '',
                    classify: '',
                    blogType: ''
                },
                value: '',
                checkList: ['选中且禁用', '复选框 A'],
                isTagBack: true
            }
        },
        created() {
            this.loadBlog();
        },
        methods: {
            //加载博客信息
            loadBlog() {
                let id = this.$route.query.id;
                if (id !== undefined) {
                    let dataRes={
                        "blogId": id
                    };
                    selectBlogById(dataRes).then((response)=>{
                        this.blogDetails=response.data.data;
                    }).catch();
                }
            },
            //保存草稿
            saveDraft(){
                let data={
                    "title": this.blogDetails.title,
                    "auth": "冯天帅",
                    "readNum": "0",
                    "content": this.blogDetails.content,
                    "isOriginal": "0",
                    "isAdmire": "0",
                    "isComment": "0",
                    "blog_status": "草稿箱"
                };
                console.log(data);
                return false;
                addBlog(data).then((response)=>{
                    console.log(response);
                }).catch()
            },
            publish() {
                this.dialogVisible = true;
            },
            addTag() {
                this.isTagBack = !this.isTagBack;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title-input {
        margin-bottom: 20px;
    }

    .blog-content {
        height: 100px;
        background-color: #ffffff;
        position: absolute;
    }

    .publish-btn {
        height: 56px;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9990;
        background-color: #fff;
    }

    .tabs-add {

    }

    .sapn-icon {
        margin-left: -3px;
    }

    .classify-box {
        margin-right: 20px;
    }

    .tag-back {
        width: 449px;
        height: auto;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .1);
        border: 1px solid #e3e3e3;
        margin-right: 15px;
    }

    .dialog-add {
        width: 50%;
        height: auto;
    }

    .btn {
        float: right;
        line-height: 56px;
        margin-right: 30px;
    }

    .tag-tip {
        margin-left: 5px;
        font-size: 13px;
        color: #999999;
    }

    .tag-input {
        margin: 0 20px;
        width: 91%
    }

    .tabs-span {
        margin: 15px 20px 20px 20px;

        span {
            background-color: #f7f7fc;
            border: 1px solid #e8e8ee;
            margin-right: 10px;
            border-radius: 3px;
            cursor: pointer;
            padding: 0 8px;
        }
    }

    /deep/ .el-card__header {
        padding: 0 15px;
    }

    /deep/ .el-card__body {
        padding: 0 10px 15px 10px;
    }

    /deep/ .el-checkbox__label {
        padding-left: 3px;
    }

    /deep/ .el-checkbox-group {
        font-size: 1px;
    }

</style>
