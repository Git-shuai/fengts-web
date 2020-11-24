<template>
    <div class="navMenu">
        <!--LOGO图片-->
        <el-row>
            <el-col :offset="4" :span="2">
                <div class="logo-menu">
                    <img class="logo" src="../../assets/logo.jpg" width="100%" height="100%" alt="LOGO"/>
                </div>
            </el-col>
            <el-col :span="15">
                <div class="options-navMenu">
                    <!--菜单-->
                    <el-menu :default-active="activeIndex"
                             class="el-menu-demo"
                             text-color="#000"
                             mode="horizontal"
                             active-text-color="#5e5bff"  router>
                        <template v-for="item in routes">
                            <template v-if="item.status===1">
                                <template v-if="item.children">
                                    <el-menu-item v-for="childrenPath in item.children" :index="childrenPath.path"
                                                  :key="childrenPath.id">
                                        <span :class="childrenPath.meta.icon"></span>
                                        {{childrenPath.meta.name}}
                                    </el-menu-item>
                                </template>
                            </template>
                        </template>

                    </el-menu>
                </div>
            </el-col>
            <el-col :span="3">
                <i class="el-icon-search search-icon"></i>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        name: "navIndex",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                routes: this.$router.options.routes
            };

        },

        create: {},
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../styles/config.scss";

    .navMenu {
        height: $navMenu;
        background-color: $mainColor
    }

    .logo-menu {
        float: left;
        height: $navMenu;
        display: inline-block;
        //可删除
        width: 0.9*$navMenu;
    }

    .el-menu-nav {
        background-color: $mainColor;
        height: $navMenu;
        .el-menu-item:hover {
            background-color: $mainColor;
        }

        .el-menu-item:active {
            background-color: $mainColor;
        }

    }

    .options-navMenu {
        float: left;
        height: $navMenu;
        display: inline-block;
        //可删除
        background-color: #83b99e;
    }
    .search-icon{
        line-height: $navMenu;
        font-size: 25px;
    }

</style>
