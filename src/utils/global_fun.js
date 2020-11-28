/**
 * 全局函数
 * @type {install}
 */
exports.install=((Vue)=>{
    Vue.prototype.EXAMPLE = ((param) => {
        alert(param);
    });
});

