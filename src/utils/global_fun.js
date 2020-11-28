/**
 * 全局函数
 * @type {install}
 */
exports.install=((Vue)=>{
    //全局函数 例子
    Vue.prototype.EXAMPLE = ((param) => {
        alert(param);
    });
    // Vue开发插件 https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6
    // Vue.myGlobalMethod = function () {
    //     console.log("myGlobalMethod")
    // };
    // // 4. 添加实例方法
    // Vue.prototype.$myMethod = function () {
    //     console.log("$myMethod")
    // }
});

