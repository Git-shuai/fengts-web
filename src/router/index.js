import Vue from "vue";
import VueRouter from "vue-router";

import commons from "../views/index";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "index",
        meta: {
            name: "首页",
        },
        status: 1,
        component: commons,
        children: [
            {
                path: "/",
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
                path: "/introduce",
                name: "introduce",
                meta: {
                    name: "简介",
                    icon: "icon icongerenjianjie"
                },
                component: () => import("../views/introduce/index.vue")
            }, {
                path: "/life",
                name: "life",
                meta: {
                    name: "生活",
                    icon: "icon iconicon"
                },
                component: () => import("../views/life/index.vue")
            }, {
                path: "/contact",
                name: "contact",
                meta: {
                    name: "关于我",
                    icon: "icon iconbangzhuguanyuwomen"
                },
                component: () => import("../views/contact/index.vue")
            }, {
                path: "/message",
                name: "message",
                meta: {
                    name: "留言",
                    icon: "icon iconweixin"
                },
                component: () => import("../views/message/index.vue")
            }
        ]
    }, {
        path: "/login",
        name: "login",
        meta: {
            name: "登录"
        },
        component: () => import("../views/admin/login")
    },{
        path: "/admin",
        name: "admin",
        meta: {
            name: "控制台"
        },
        component: () => import("../views/admin/comment")
    }

];

const router = new VueRouter({
    routes
});

export default router;
