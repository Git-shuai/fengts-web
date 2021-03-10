<template>
    <div>
        <el-row :gutter="15">
            <el-col :span="6">
                <div class="article-block">
                    <div class="article-font">
                        <span>文章</span>
                        <i class="icon iconcaidan pull-right" @click="toBlogList"></i>
                    </div>
                    <div class="article-num">
                        <span>{{articleNum}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="article-block">
                    <div class="article-font">
                        <span>评论</span>
                        <i class="el-icon-chat-dot-round pull-right" @click="toBlogList"></i>
                    </div>
                    <div class="article-num">
                        <span>{{commentNum}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="article-block">
                    <div class="article-font">
                        <span>阅读量</span>
                        <el-tooltip class="item" effect="dark" content="文章阅读总数" placement="top-end">
                            <i class="el-icon-reading pull-right"></i>
                        </el-tooltip>

                    </div>
                    <div class="article-num">
                        <span>{{readNum}}</span>
                    </div>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="article-block">
                    <div class="article-font">
                        <span>用户量</span>
                        <el-tooltip class="item" effect="dark" content="本站的用户量" placement="top-end">
                            <i class="el-icon-user pull-right"></i>
                        </el-tooltip>

                    </div>
                    <div class="article-num">
                        <span>{{userNum}}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div style="height: 15px"></div>
        <el-row :gutter="15">
            <el-col :span="10">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span class="span-font">新动态</span>
                    </div>
                    <div>
                        <el-tabs type="border-card">
                            <el-tab-pane label="最新文章">
                                <div>
                                    <ul>
                                        <li class="article-li" v-for="item in articleList" :key="item.id" @click="toBlog(item)">
                                            <el-tooltip class="item" effect="light" :content="item.title"
                                                        placement="left">
                                                <div class="div-title">{{item.title}}</div>
                                            </el-tooltip>
                                            <div class="div-time">{{item.createTime}}</div>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="最新评论">
                                <el-tabs>
                                    <el-tab-pane label="文章" name="first">
                                        文章
                                    </el-tab-pane>
                                    <el-tab-pane label="评论" name="second">
                                        页面
                                    </el-tab-pane>
                                </el-tabs>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="14">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>统计</span>
                    </div>
                    <div>
                        柱状图（几个分类，下面有几个文章，作者动态，一个月中几天编写文章修改计划）
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {selectBlogList} from "../../../api/blog";
    import {selectUserList} from "../../../api/auth";

    export default {
        name: "index",
        data() {
            return {
                articleNum: '0',
                commentNum: '0',
                readNum: '0',
                userNum: '0',
                articleList: []
            }
        },
        created() {
            this.loadArticleList();
            this.selectUserList();
        },
        methods: {
            toBlogList() {
                this.$router.push({
                    name: 'adminBlogList'
                });
            },
            //加载文章列表
            loadArticleList() {
                let data = {
                    "page": 1,
                    "size": 8
                };
                selectBlogList(data).then((response) => {
                    this.articleList = response.data.data.records;
                    this.articleNum = response.data.data.total;
                    console.log(this.articleList);
                }).catch()
            },
            //加载评论列表
            //加载用户列表
            selectUserList() {
                let data = {
                    "page": 1,
                    "size": 8
                };
                selectUserList(data).then((res) => {
                    this.userNum = res.data.data.total;
                }).catch()
            },
            //跳转博客
            toBlog(row){
                this.$router.push({
                    name: "writeBlog",
                    query: {
                        "id": row.id
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .span-font {
        font-size: 16px;
    }

    .article-li {
        margin-left: 20px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e8e1e1;
        cursor: pointer;

        .div-title {
            width: 300px;
            display: inline-block;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .div-title:hover{
            color: #007efd;
        }

        .div-time {
            float: right;
            margin-right: 80px;
            color: rgba(0, 0, 0, 0.45);
        }
    }

    .article-block {
        background-color: #ffffff;
        height: 117px;
        box-shadow: 2px 2px 10px #909090;
    }

    .article-font {
        padding: 25px 25px 18px 25px;

        span {
            color: rgba(0, 0, 0, .45);
        }

        i {
            font-size: 18px;
        }

        i:hover {
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            color: #007efd;
        }
    }

    .article-num {
        padding-left: 25px;

        span {
            font-size: 32px;
            font-weight: 400;
        }
    }

    /deep/ .el-tabs__item {
        height: 40px;
        padding: 0;
        box-sizing: border-box;
        line-height: 40px;
        display: inline-block;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        position: relative;
    }

    /deep/ .el-tabs__nav {
        white-space: nowrap;
        position: relative;
        transition: transform .3s;
        float: left;
        z-index: 2;
    }

    /deep/ .el-card__body {
        padding: 0;
    }

    /deep/ .el-card__header {
        padding: 10px 15px;
    }

    /deep/ .el-tabs--border-card {
        background-color: #ffffff;
        border: 0;
        box-shadow: none;
    }

    /deep/ .el-tabs--top.el-tabs--border-card > .el-tabs__header .el-tabs__item:last-child {
        padding: 0;
    }
</style>
