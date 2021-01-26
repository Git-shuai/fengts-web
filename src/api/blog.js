import service from "../utils/request";

/**
 * 添加标签
 * @param data
 * @returns
 */
export function addTag(data) {
    return service.request({
        method: "post",
        url: "/tags/addTags",
        data: data
    });
}


/**
 * 查询父标签列表
 * @param data
 * @returns
 */
export function selectParentTag(data) {
    return service.request({
        method: "get",
        url: "/tags/parentTag",
        data: data
    });
}

/**
 * 查询标签列表
 * @param data
 * @returns
 */
export function selectTagsList(data) {
    return service.request({
        method: "post",
        url: "/tags/selectTagsList",
        data: data
    });
}

/**
 * 删除tag
 * @param id
 * @returns
 */
export function deleteTag(id) {
    return service.request({
        method: "get",
        url: "/tags/deleteTags/"+id+""
    });
}

/**
 * 修改tag
 * @param data
 * @returns
 */
export function editTag(data) {
    return service.request({
        method: "post",
        url: "/tags/editTags",
        data: data
    });
}


/**
 * 添加分类
 * @param data
 * @returns
 */
export function addClassify(data) {
    return service.request({
        method: "post",
        url: "/classify/addClassify",
        data: data
    });
}

/**
 * 查询分类列表
 * @param data
 * @returns
 */
export function selectClassifyList(data) {
    return service.request({
        method: "post",
        url: "/classify/selectClassifyList",
        data: data
    });
}

/**
 * 删除分类
 * @param id
 * @returns
 */
export function deleteClassify(id) {
    return service.request({
        method: "get",
        url: "/classify/deleteClassify/"+id+""
    });
}

/**
 * 查询父分类列表
 * @param data
 * @returns
 */
export function selectParentClassify(data) {
    return service.request({
        method: "get",
        url: "/classify/selectParentClassify",
        data: data
    });
}

/**
 * 修改classify
 * @param data
 * @returns
 */
export function editClassify(data) {
    return service.request({
        method: "post",
        url: "/classify/editClassify",
        data: data
    });
}
