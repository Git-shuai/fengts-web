<template>
    <div class="write-content">
        <div class="title-input">
            <el-input
                    placeholder="请输入文章标题"
                    v-model="title"
                    clearable>
            </el-input>
        </div>
        <!--编辑器-->
        <Editormd/>
        <!--发布-->

        <div class="publish-btn">
            <div class="btn">
            <el-row>
                <el-button size="mini">默认按钮</el-button>
                <el-button size="mini" type="primary">主要按钮</el-button>
                <el-button size="mini" type="success">成功按钮</el-button>
                <el-button size="mini" type="info">信息按钮</el-button>
                <el-button size="mini" type="warning">警告按钮</el-button>
                <el-button size="mini" type="danger">危险按钮</el-button>
            </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import Editormd from "../../../components/Editormd";
    export default {
        name: "writeBlog",
        components:{
            Editormd
        },
        data(){
            return{
                //标题
                title: ''
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
    .title-input{
        margin-bottom: 20px;
    }
    .blog-content{
        height: 100px;
        background-color: #ffffff;
        position:absolute;
    }
    .publish-btn{
        height: 56px;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9999;
        background-color: #fff;
    }
    .btn{
        float: right;
        line-height: 56px;
    }

</style>
