import service from "../utils/request";

/**
 * 添加留言
 * @param data
 * @returns
 */
export function addReply(data) {
    return service.request({
        method: "post",
        url: "/reply/addReply",
        data: data
    });
}

/**
 * 加载一级留言
 * @param data
 * @returns
 */
export function selectReplyListParentIsNull(data) {
    return service.request({
        method: "post",
        url: "/reply/selectReplyListParentIsNull",
        data: data
    });
}

/**
 * 加载二级级留言
 * @param data
 * @returns
 */
export function selectReplyListParentIsNotNull(data) {
    return service.request({
        method: "post",
        url: "/reply/selectReplyListParentIsNotNull",
        data: data
    });
}