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
    }
</style>
