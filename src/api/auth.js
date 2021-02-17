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

/**
 * 查询角色列表
 * @param data
 * @returns
 */
export function selectRole(data) {
    return service.request({
        method: "post",
        url: "/role/selectRole",
        data: data
    });
}

/**
 * 添加角色
 * @param data
 * @returns
 */
export function addRole(data) {
    return service.request({
        method: "post",
        url: "/role/addRole",
        data: data
    });
}

/**
 * 删除角色
 * @param data
 * @returns
 */
export function deleteRole(roleId) {
    return service.request({
        method: "delete",
        url: `/role/deleteRole/${roleId}`
    });
}

/**
 * 更新角色
 * @param data
 * @returns
 */
export function editRole(data) {
    return service.request({
        method: "put",
        url: "/role/editRole",
        data: data
    });
}

/**
 * 查询父菜单节点
 * @param data
 * @returns
 */
export function selectMenuParentList() {
    return service.request({
        method: "get",
        url: "/menu/selectMenuParentList"
    });
}


/**
 * 添加菜单
 * @param data
 * @returns
 */
export function addMenu(data) {
    return service.request({
        method: "post",
        url: "/menu/addMenu",
        data: data
    });
}

/**
 * 查询菜单列表
 * @param data
 * @returns
 */
export function selectMenuList(data) {
    return service.request({
        method: "post",
        url: "/menu/selectMenuList",
        data: data
    });
}