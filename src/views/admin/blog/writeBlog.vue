<template>
    <div class="write-content">
        <!--标题-->
        <div class="title-input">
            <el-input v-model="blogDetails.title" placeholder="请输入文章标题" clearable>
                <template slot="prepend">标题</template>
            </el-input>
        </div>
        <!--编辑器-->
        <Editormd :content.sync="blogDetails.content"/>
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
            <el-dialog title="发布文章" :visible.sync="dialogVisible" width="30%" @open="openDialog" class="">
                <div>
                    <el-form :model="blogDetails" status-icon ref="blogDetails" label-width="75px">
                        <el-form-item label="文章标签:" prop="tag">
                            <div class="tabs-span2">
                                <span v-for="item in selectTagList" :key="item.id">{{item.tagName}}<i
                                        class="el-icon-close icon-backg" style="margin-left: 5px"
                                        @click="deleteTag(item)"></i></span>
                            </div>
                            <el-button size="mini" @click="addTag">
                                <span class="span-icon"><i class="el-icon-plus"></i>
                                    添加文章标签
                                </span>
                            </el-button>
                            <div class="tag-back" v-if="isTagBack">
                                <div class="tag-tip">可添加5个标签</div>
                                <div>
                                    <el-input class="tag-input" placeholder="请输入文字搜索，Enter键入可添加自定义标签"
                                              v-model="blogDetails.tag" @change="selectTagByName" clearable
                                    ></el-input>
                                </div>
                                <div class="tabs-add">
                                    <!--tabs标签-->
                                    <div class="tabs-span">
                                        <span v-for="item in tagList" @click="addTagList(item)" :key="item.id">{{item.tagName}}</span>
                                    </div>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item label="文章分类:" prop="classify">
                            <div class="tabs-span2">
                                <span v-for="item in selectClassifyList" :key="item.id">{{item.classifyName}}<i
                                        class="el-icon-close icon-backg" style="margin-left: 5px"
                                        @click="deleteClassify(item)"></i></span>
                            </div>
                            <el-button size="mini" @click="addClassify">
                                <span class="span-icon"><i class="el-icon-plus"></i> 添加文章分类</span>
                            </el-button>
                            <el-card class="box-card" v-if="isClassifyBack">
                                <div slot="header">
                                    <span>选择分类</span>
                                </div>
                                <div>
                                    <el-input class="tag-input" placeholder="请输入文字搜索，Enter键入可添加自定义标签"
                                              v-model="blogDetails.classify" @change="selectClassifyByName" clearable
                                    ></el-input>
                                </div>
                                <div>
                                    <div class="tabs-span">
                                        <span v-for="item in classifyList" @click="selectClassify(item)" :key="item.id">{{item.classifyName}}</span>
                                    </div>
                                </div>
                            </el-card>
                        </el-form-item>
                        <el-form-item label="文章类型" prop="blogType">
                            <el-select size="mini" v-model="blogDetails.isOriginal" placeholder="请选择类型">
                                <el-option :value="0" label="原创"></el-option>
                                <el-option :value="1" label="转载"></el-option>
                                <el-option :value="2" label="翻译"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="开启评论" prop="blogType">
                            <el-switch
                                    v-model="blogDetails.isComment"
                                    :active-value="0"
                                    :inactive-value="1"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="开启赞赏" prop="blogType">
                            <el-switch
                                    v-model="blogDetails.isAdmire"
                                    active-color="#13ce66"
                                    :active-value="0"
                                    :inactive-value="1"
                                    inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>

                        <el-form-item label="文章状态" prop="blogType">
                            <el-select size="mini" v-model="blogDetails.blogStatus" placeholder="请选择类型">
                                <el-option value="草稿箱" label="草稿箱"></el-option>
                                <el-option value="发布" label="发布"></el-option>
                                <el-option value="回收站" label="回收站"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button size="mini" type="primary" @click="addBlogForm">提交</el-button>
                            <el-button size="mini" @click="resetForm('blogDetails')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import Editormd from "../../../components/Editormd";
    import {
        addBlog, editBlog,
        selectBlogById,
        selectClassify, selectClassifyByName,
        selectTagByName,
        selectTags
    } from "../../../api/blog";
    import {getUsername} from "../../../utils/app";

    export default {
        name: "writeBlog",
        props: {},
        components: {
            Editormd
        },
        data() {

            return {
                //博客内容
                blogDetails: {
                    id: "",
                    //标题
                    title: "",
                    content: "",
                    tag: "",
                    classify: "",
                    createTime:"",
                    //是否原创
                    isOriginal: "",
                    //是否开启赞赏
                    isAdmire: "0",
                    //是否开启评论
                    isComment: "0",
                    //文章状态
                    blogStatus: ""
                },
                //弹出窗
                dialogVisible: false,
                //Tag列表
                tagList: [],
                //选择的标签
                selectTagList: [],
                selectClassifyList: [],
                //分类列表
                classifyList: [],
                checkList: [],
                isTagBack: false,
                isClassifyBack: false,

            }
        },
        created() {
            this.loadBlog();
        },
        methods: {
            //加载博客信息
            loadBlog() {
                let id = this.$route.query.id;
                this.blogDetails.id = id;
                if (id !== undefined) {
                    let dataRes = {
                        "blogId": id
                    };
                    selectBlogById(dataRes).then((response) => {
                        this.blogDetails = response.data.data;
                        this.selectTagList = response.data.data.tagName;
                        this.selectClassifyList = response.data.data.classifyName;

                    }).catch();
                }
            },
            //保存草稿
            saveDraft() {
                //保存草稿信息
                let data = {
                    "title": this.blogDetails.title,
                    "auth": getUsername(),
                    "readNum": "0",
                    "content": this.blogDetails.content,
                    "isOriginal": "0",
                    "isAdmire": "0",
                    "isComment": "0",
                    "blogStatus": "草稿箱"
                };
                addBlog(data).then((response) => {
                    this.$message.success(response.data.message);
                    this.$router.push({
                        name: "adminBlogList"
                    });
                }).catch()
            },
            //发布按钮弹窗
            publish() {
                this.dialogVisible = true;
            },
            //添加标签弹窗
            addTag() {
                this.isTagBack = !this.isTagBack;
            },
            //添加分类弹窗
            addClassify() {
                this.isClassifyBack = !this.isClassifyBack;
            },

            //打开窗口加载函数
            openDialog() {
                //tag标签初始化
                selectTags().then((response) => {
                    this.tagList = response.data.data;
                    this.selectTagList= this.tagList.filter(item=>{
                        let filter = this.selectTagList.filter(item2=>{
                            if (item2===item.tagName){
                                return item;
                            }
                        });
                        if (item.tagName===filter[0]){
                            return item;
                        }
                    });
                }).catch();
                //classify分类初始化
                selectClassify().then((response) => {
                    this.classifyList = response.data.data;
                    this.selectClassifyList= this.classifyList.filter(item=>{
                        let filter = this.selectClassifyList.filter(item2=>{
                            if (item2===item.classifyName){
                                return item;
                            }
                        });
                        if (item.classifyName===filter[0]){
                            return item;
                        }
                    });
                }).catch();
            },

            //搜索标签并添加 5
            selectTagByName() {
                if (this.blogDetails.tag === "") {
                    return;
                }
                let data = {
                    "tagName": this.blogDetails.tag
                };

                selectTagByName(data).then((response) => {
                    if (response.data.data[0] === undefined) {
                        this.$notify({title: '提示', message: '没有该标签', type: 'warning'});
                        return;
                    }
                    if (this.selectTagList.length >= 5) {
                        this.$notify({title: '提示', message: '标签数量只能添加五个', type: 'warning'});
                        return;
                    }
                    let data = response.data.data[0];
                    let flag = this.selectTagList.some(item => {
                        if (item.id === data.id) return true;
                    });
                    if (flag) {
                        this.$notify({title: '提示', message: '已经添加了,请选择别的吧', type: 'warning'});
                    } else {
                        this.selectTagList.push(data);
                    }
                }).catch(() => {
                });
            },
            //点击标签按钮并添加 5
            addTagList(item) {
                if (this.selectTagList.length >= 5) {
                    this.$notify({title: '提示', message: '标签数量只能添加五个', type: 'warning'});
                    return;
                }

                let flag = this.selectTagList.some(it => {
                    if (it.id === item.id) return true;
                });
                if (flag) {
                    this.$notify({title: '提示', message: '已经添加了,请选择别的吧', type: 'warning'});
                } else {
                    this.selectTagList.push(item);
                }
            },
            //删除标签按钮
            deleteTag(value) {
                this.selectTagList = this.selectTagList.filter(item => {
                    if (item.id !== value.id) {
                        return item;
                    }
                });
            },

            //搜索分类并添加 3
            selectClassifyByName() {
                if (this.blogDetails.classify === "") {
                    return;
                }
                let data = {
                    "classifyName": this.blogDetails.classify
                };
                selectClassifyByName(data).then((response) => {
                    if (response.data.data[0] === undefined) {
                        this.$notify({title: '提示', message: '没有该分类', type: 'warning'});
                        return;
                    }
                    if (this.selectClassifyList.length >= 5) {
                        this.$notify({title: '提示', message: '分类数量只能添加三个', type: 'warning'});
                        return;
                    }
                    let data = response.data.data[0];
                    let flag = this.selectClassifyList.some(item => {
                        if (item.id === data.id) return true;
                    });
                    if (flag) {
                        this.$notify({title: '提示', message: '已经添加了,请选择别的吧', type: 'warning'});
                    } else {
                        this.selectClassifyList.push(data);
                    }
                }).catch()
            },
            //点击按钮添加分类 3
            selectClassify(value) {

                if (this.selectClassifyList.length >= 3) {
                    this.$notify({title: '提示', message: '分类数量只能添加三个', type: 'warning'});
                    return;
                }

                let flag = this.selectClassifyList.some(it => {
                    if (it.id === value.id) return true;
                });
                if (flag) {
                    this.$notify({title: '提示', message: '已经添加了,请选择别的吧', type: 'warning'});
                } else {
                    this.selectClassifyList.push(value);
                }
            },
            //删除分类按钮
            deleteClassify(value) {
                this.selectClassifyList = this.selectClassifyList.filter(item => {
                    if (item.id !== value.id) {
                        return item;
                    }
                });
            },

            //发布或者修改
            addBlogForm() {
                //标签ID
                let tag = this.selectTagList.map(item => {
                    return item.id.toString()
                });
                //分类ID
                let classify = this.selectClassifyList.map(item => {
                    return item.id.toString()
                });
                if (this.blogDetails.id === "" || this.blogDetails.id===undefined) {
                    let data = {
                        "title": this.blogDetails.title,
                        "auth": getUsername(),
                        "content": this.blogDetails.content,
                        "readNum": "0",
                        "tag": tag,
                        "classify": classify,
                        "isOriginal": this.blogDetails.isOriginal,
                        "isAdmire": this.blogDetails.isAdmire,
                        "isComment": this.blogDetails.isComment,
                        "blogStatus": this.blogDetails.blogStatus
                    };
                    addBlog(data).then((response) => {
                        this.$message.success(response.data.message);
                        this.$router.push({
                            name: "adminBlogList"
                        });
                    }).catch()
                } else {
                    let data = {
                        "id": this.blogDetails.id,
                        "title": this.blogDetails.title,
                        "content": this.blogDetails.content,
                        "createTime": this.blogDetails.createTime,
                        "readNum": "0",
                        "tag": tag,
                        "classify": classify,
                        "isOriginal": this.blogDetails.isOriginal,
                        "isAdmire": this.blogDetails.isAdmire,
                        "isComment": this.blogDetails.isComment,
                        "blogStatus": this.blogDetails.blogStatus
                    };
                    editBlog(data).then((response) => {
                        this.$message.success(response.data.message);
                        this.$router.push({
                            name: "adminBlogList"
                        });
                    }).catch()
                }
                return false;


            },
            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
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

    .span-icon {
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
            height: 30px;
            line-height: 30px;
            display: inline-block;
            background-color: #f7f7fc;
            border: 1px solid #e8e8ee;
            margin-right: 10px;
            border-radius: 3px;
            cursor: pointer;
            padding: 0 8px;
        }
    }

    .tabs-span2 {
        display: inline-block;

        span {
            height: 30px;
            line-height: 30px;
            display: inline-block;
            background-color: #f7f7fc;
            border: 1px solid #e8e8ee;
            margin-right: 10px;
            border-radius: 3px;
            cursor: pointer;
            padding: 0 8px;
        }
    }

    .icon-backg:hover {
        color: #409EFF;
        font-size: 15px;
        font-weight: bolder;
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
