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
 * 用户退出
 * @param data
 * @returns
 */
export function logout(data) {
    return service.request({
        method: "post",
        url: "/logout",
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
 * 根据条件查询用户列表
 * @param data
 * @returns
 */
export function queryUserByUsername(username) {
    return service.request({
        method: "get",
        url: `/queryUserByUsername/${username}`
    });
}

/**
 * 根据条件查询用户列表
 * @param data
 * @returns
 */
export function updateUserByUsernamePassword(data) {
    return service.request({
        method: "post",
        url: "/updateUserByUsernamePassword",
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


/**
 * 更新菜单列表
 * @param data
 * @returns
 */
export function editMenu(data) {
    return service.request({
        method: "put",
        url: "/menu/editMenu",
        data: data
    });
}


/**
 * 删除菜单
 * @param data
 * @returns
 */
export function deleteMenu(menuId) {
    return service.request({
        method: "delete",
        url: `/menu/deleteMenu/${menuId}`
    });
}

/**
 * 查询父菜单
 * @param data
 * @returns
 */
export function selectMenuById(menuId) {
    return service.request({
        method: "get",
        url: `/menu/selectMenuById/${menuId}`
    });
}


/**
 * 按条件查询菜单
 * @param data
 * @returns
 */
export function selectMenuByParam(data) {
    return service.request({
        method: "post",
        url: "/menu/selectMenuByParam",
        data: data
    });
}

/**
 * 分页查询API
 * @param data
 * @returns
 */
export function selectPermission(data) {
    return service.request({
        method: "post",
        url: "/permission/selectPermission",
        data: data
    });
}

/**
 * 条件查询API
 * @param data
 * @returns
 */
export function selectPermissionByParam(data) {
    return service.request({
        method: "post",
        url: "/permission/selectPermissionByParam",
        data: data
    });
}

/**
 * 添加API
 * @param data
 * @returns
 */
export function addPermission(data) {
    return service.request({
        method: "post",
        url: "/permission/addPermission",
        data: data
    });
}

/**
 * 修改API
 * @param data
 * @returns
 */
export function editPermission(data) {
    return service.request({
        method: "put",
        url: "/permission/editPermission",
        data: data
    });
}

/**
 * 删除API
 * @param data
 * @returns
 */
export function deletePermission(perId) {
    return service.request({
        method: "delete",
        url: `/permission/deletePermission/${perId}`
    });
}

/**
 * 添加（更新）用户角色列表
 * @param data
 * @returns
 */
export function addUserRoleList(data) {
    return service.request({
        method: "post",
        url: "/userRole/addUserRoleList",
        data: data
    });
}

/**
 * 查看用户角色列表
 * @param data
 * @returns
 */
export function selectUserRoleList(data) {
    return service.request({
        method: "post",
        url: "/userRole/selectUserRoleList",
        data: data
    });
}

/**
 * 查看用户角色列表
 * @param data
 * @returns
 */
export function selectRoleMenuList(data) {
    return service.request({
        method: "post",
        url: "/roleMenu/selectRoleMenuList",
        data: data
    });
}

/**
 * 查看用户角色列表
 * @param data
 * @returns
 */
export function addExp(data) {
    return service.request({
        method: "post",
        url: "/roleMenu/addExp",
        data: data
    });
}

/**
 * 批量添加角色下的API
 * @param data
 * @returns
 */
export function addAPIExp(data) {
    return service.request({
        method: "post",
        url: "/rolePermission/addAPIExp",
        data: data
    });
}

/**
 * 查询角色下的API
 * @param data
 * @returns
 */
export function selectAPIListExp(data) {
    return service.request({
        method: "post",
        url: "/rolePermission/selectAPIListExp",
        data: data
    });
}