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
 * 查询标签列表
 * @param data
 * @returns
 */
export function selectTagList(data) {
    return service.request({
        method: "post",
        url: "/tags/selectTagsList",
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

