<template>
    <div class="nav-content">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#222d3b"
                 text-color="#fff"
                 :collapse="isCollapse" router>
            <template v-for="(item,index) in routes">
                <template v-if="item.status===2">
                        <el-submenu :key="index" :index="item.path">
                            <template slot="title">
                                <i :class="item.meta.icon"></i>
                                <span slot="title"> {{item.meta.name}}</span>
                            </template>
                            <el-menu-item v-for="itemBlogC in item.children" :key="itemBlogC.id" :index="itemBlogC.path">
                                <i :class="itemBlogC.meta.icon"></i> {{itemBlogC.meta.name}}
                            </el-menu-item>
                        </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "navMenu",
        data() {
            return {
                isCollapse: false,
                routes: this.$router.options.routes
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .nav-content {
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        height: 100vh;
        background-color: #222d3b;
    }

    /deep/ .el-submenu {
        margin: -1px;
    }

    /deep/ .el-menu-item {
        font-size: 16px;
        margin: 0;
    }

     /deep/ .el-submenu__title {
         font-size: 16px;
     }
</style>
