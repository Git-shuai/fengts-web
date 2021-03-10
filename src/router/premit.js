//路由守卫
import router from "./index";
import {getToken, removeMenu, removeToken, removeUsername} from "../utils/app";
const whiteListRouter =['/admin'];

router.beforeEach((to, from, next)=>{
    if (getToken()){
        if (to.path==='/login'){
            removeToken();
            removeUsername();
            removeMenu();
            next();
        }else {
           next();
        }
    }else {
        //取得路径判断是否要进入后台
        let data=to.path.substr(0,6);
        if (whiteListRouter.indexOf(data)===0){
            next('login');
        }else {
            next();
        }

    }
});
