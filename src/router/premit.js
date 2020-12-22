//路由守卫
import router from "./index";
import {getToken,removeToken,removeUsername} from "../utils/app";
const whiteListRouter =['/login'];

router.beforeEach((to, from, next)=>{
    // if (getToken()){
    //     if (to.path==='/login'){
    //         removeToken();
    //         removeUsername();
    //         next();
    //     }else {
            next();
    //     }
    // }else {
    //     if (whiteListRouter.indexOf(to.path)!==-1){
    //         next();
    //     }else {
    //         next('/login')
    //     }
    // }
});
