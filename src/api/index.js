import service from "../utils/request";

/**
 * 查询博客
 * @param data
 * @returns
 */
export function blogList(data) {
    return service.request({
        method: "post",
        url: "/blog/select/blogList",
        data: data
    });
}

/**
 * 标签云
 * @param data
 * @returns
 */
export function tagCloud(data) {
    return service.request({
        method: "get",
        url: "/blog/select/tagCloud",
        data: data
    });
}

/**
 * 最新文章
 * @param data
 * @returns
 */
export function newArticle(data) {
    return service.request({
        method: "get",
        url: "/blog/select/newArticle",
        data: data
    });
}

/**
 * 分类专栏
 * @param data
 * @returns
 */
export function classifyOfArticleNum(data) {
    return service.request({
        method: "get",
        url: "/blog/select/classifyOfArticleNum",
        data: data
    });
}

/**
 * 查询数量
 * @param data
 * @returns
 */
export function articleAndTagNum(data) {
    return service.request({
        method: "get",
        url: "/blog/select/articleAndTagNum",
        data: data
    });
}

/**
 * 热门文章
 * @param data
 * @returns
 */
export function holdArticle(data) {
    return service.request({
        method: "get",
        url: "/blog/select/holdArticle",
        data: data
    });
}