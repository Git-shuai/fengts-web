import Vue from "vue";
import VueRouter from "vue-router";

import commons from "../views/index";
import admin from "../views/admin/comment/index"
import Error from  "../views/error/error"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/index",
        status: 1,
        component: commons,
        children: [
            {
                path: "/index",
                name: "index",
                meta: {
                    name: "首页",
                    icon: "icon iconshouye"
                },
                component: () => import("../views/home/index")
            }, {
                path: "/blog",
                name: "blog",
                meta: {
                    name: "博客",
                    icon: "icon iconnavicon-wzgl"
                },
                component: () => import("../views/blog/index.vue")
            }, {
                path: "/classify",
                name: "classify",
                meta: {
                    name: "分类",
                    icon: "icon iconcategory"
                },
                component: () => import("../views/classify/index")
            }, {
                path: "/tag",
                name: "tag",
                meta: {
                    name: "标签",
                    icon: "icon iconbiaoqian"
                },
                component: () => import("../views/tag/index")
            }, {
                path: "/message",
                name: "message",
                meta: {
                    name: "留言",
                    icon: "icon iconweixin"
                },
                component: () => import("../views/message/index.vue")
            }, {
                path: "/contact",
                name: "contact",
                meta: {
                    name: "关于我",
                    icon: "icon iconbangzhuguanyuwomen"
                },
                component: () => import("../views/contact/index.vue")
            }
        ]
    },
    {
        path: "/blogInfo",
        name: "blogInfo",
        component: commons,
        children: [{
            path: "/blogInfo",
            name: "blogInfo",
            meta: {
                name: "博客详情",
                icon: "icon iconbangzhuguanyuwomen"
            },
            component: () => import("../views/blog/blogInfo")
        }]
    },
    {
        path: "/login",
        name: "login",
        meta: {
            name: "登录"
        },
        component: () => import("../views/admin/login")
    },
    {
        path: "/admin",
        name: "admin",
        redirect: "/admin/dashBoard",
        meta: {
            name: "控制台",
            icon: "icon iconyibiaopan"
        },
        status: 2,
        component: admin,
        children: [
            {
                path: "/admin/dashBoard",
                name: "adminDashBoard",
                meta: {
                    name: "仪表盘",
                    icon: "icon iconyibiaopan"
                },
                component: () => import("../views/admin/dashBoard/index.vue")
            }
        ]
    },
    {
        path: "/admin/blog",
        name: "adminBlog",
        redirect: "/admin/blogList",
        meta: {
            name: "博客管理",
            icon: "icon iconbokeblogger3"
        },
        status: 2,
        component: admin,
        children: [
            {
                path: "/admin/blogList",
                name: "adminBlogList",
                meta: {
                    name: "博客列表",
                    icon: "icon iconbokeblogger3"
                },
                component: () => import("../views/admin/blog/index.vue")
            }, {
                path: "/admin/writeBlog",
                name: "writeBlog",
                meta: {
                    name: "写博客",
                    icon: "icon iconxie2"
                },
                component: () => import("../views/admin/blog/writeBlog.vue")
            }, {
                path: "/admin/categories",
                name: "adminCategories",
                meta: {
                    name: "分类目录",
                    icon: "icon iconcategory"
                },
                component: () => import("../views/admin/blog/categories.vue")
            }, {
                path: "/admin/tags",
                name: "admintags",
                meta: {
                    name: "标签",
                    icon: "icon iconbiaoqian"
                },
                component: () => import("../views/admin/blog/tags.vue")
            }
        ]
    },
    {
        path: "/admin/auth",
        meta: {
            name: "权限管理",
            icon: "icon iconquanxian"
        },
        status: 2,
        component: admin,
        children: [
            {
                path: "/admin/userManage",
                name: "userManage",
                meta: {
                    name: "用户管理",
                    icon: "icon iconicon_yonghuguanlisubscriber"
                },
                component: () => import("../views/admin/auth/userManage.vue")
            }, {
                path: "/admin/roleManage",
                name: "roleManage",
                meta: {
                    name: "角色管理",
                    icon: "icon iconnavicon-jsgl"
                },
                component: () => import("../views/admin/auth/roleManage.vue")
            }, {
                path: "/admin/menuManage",
                name: "menuManage",
                meta: {
                    name: "前端菜单",
                    icon: "icon iconcaidan"
                },
                component: () => import("../views/admin/auth/menuManage.vue")
            }, {
                path: "/admin/APIManage",
                name: "APIManage",
                meta: {
                    name: "后端API管理",
                    icon: "icon iconapi"
                },
                component: () => import("../views/admin/auth/APIManage.vue")
            }, {
                path: "/admin/roleUser",
                name: "roleUser",
                meta: {
                    name: "角色用户管理",
                    icon: "icon iconjiaoseyonghufenpei"
                },
                component: () => import("../views/admin/auth/roleUser.vue")
            }, {
                path: "/admin/roleMenu",
                name: "userMenu",
                meta: {
                    name: "角色菜单管理",
                    icon: "icon iconmc-yhcd"
                },
                component: () => import("../views/admin/auth/roleMenu.vue")
            }, {
                path: "/admin/roleApi",
                name: "roleApi",
                meta: {
                    name: "角色API管理",
                    icon: "icon iconAPI"
                },
                component: () => import("../views/admin/auth/roleApi.vue")
            }
        ]
    },
    {
        path: "/admin/user",
        name: "adminUser",
        meta: {
            name: "个人信息",
            icon: "icon iconbokeblogger3"
        },
        status: 2,
        component: admin,
        children: [
            {
                path: "/admin/perInfo",
                name: "adminPerInfo",
                meta: {
                    name: "个人资料",
                    icon: "icon iconbokeblogger3"
                },
                component: () => import("../views/admin/user/perInfo")
            }
        ]
    },
    {
        path: "/admin/recycle",
        name: "adminRecycle",
        meta: {
            name: "回收站",
            icon: "icon iconbokeblogger3"
        },
        status: 2,
        component: admin,
        children: [
            {
                path: "/admin/recycleBlog",
                name: "adminRecycleBlog",
                meta: {
                    name: "回收站",
                    icon: "icon iconbokeblogger3"
                },
                component: () => import("../views/admin/recycle/recycle")
            },
            {
                path: "/admin/draftBlog",
                name: "adminDraftBlog",
                meta: {
                    name: "草稿箱",
                    icon: "icon iconbokeblogger3"
                },
                component: () => import("../views/admin/recycle/draft")
            }
        ]
    },
    {
        path: '*',
        name: 'error',
        component: Error
    }

];

const router = new VueRouter({
    routes
});

export default router;
