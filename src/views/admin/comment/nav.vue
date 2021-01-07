<template>
    <div id="nav-wrap" class="nav-content">
        <el-menu class="el-menu-vertical-demo"
                 background-color="#222d3b"
                 text-color="#fff"
                 :collapse-transition="false"
                 :collapse="this.isCollapse" router>
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
        computed: {
            //导航栏状态
            isCollapse: function () {
                return this.$store.state.app.isCollapse;
            }
        },
        data() {
            return {
                //导航路由
                routes: this.$router.options.routes
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    @import "../../../styles/config";

    .nav-content {
        position: fixed;
        top: 0;
        left: 0;
        width: $adminNavMenu;
        height: 100vh;
        z-index: 9999;
        background-color: $adminNavColor;
        @include webkit(transition, all .3s ease 0s);
    }

    .open {
        #nav-wrap {
            width: $adminNavMenu;
        }
    }

    .close {
        #nav-wrap {
            width: $adminNavMenuMin;
        }
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
