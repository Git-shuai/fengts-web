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
 * 用户登录
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


/**
 * 分页查询用户
 * @param data
 * @returns
 */
export function selectUserList(data) {
    return service.request({
        method: "post",
        url: "/selectUserList",
        data: data
    });
}

/**
 * 根据条件查询用户列表
 * @param data
 * @returns
 */
export function selectUserListByParam(data) {
    return service.request({
        method: "post",
        url: "/selectUserListByParam",
        data: data
    });
}

/**
 * 根据ID删除用户
 * @param id
 * @returns
 */
export function deleteUser(id) {
    return service.request({
        method: "delete",
        url: `/deleteUser/${id}`,
    });
}


/**
 * 更新用户
 * @param data
 * @returns
 */
export function updateUser(data) {
    return service.request({
        method: "put",
        url: "/updateUser",
        data: data
    });
}