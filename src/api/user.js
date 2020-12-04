import service from "../utils/request";

/**
 * 用户注册
 * @param data
 * @returns
 */
export function registeredUser(data) {
    return service.request({
        method: "post",
        url: "/register",
        data: data
    });
}

/**
 * 用户注册
 * @param data
 * @returns
 */
export function login(data) {
    return service.request({
        method: "post",
        url: "/login",
        data: data
    });
}


/**
 * 获取验证码
 * @param data
 * @returns
 */
export function getCode(data) {
    return service.request({
        method: "post",
        url: "/getCode",
        data: data
    });
}
