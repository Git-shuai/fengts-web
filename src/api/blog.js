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
 * 查询tag根据name
 * @param data
 * @returns
 */
export function selectTagByName(data) {
    return service.request({
        method: "post",
        url: "/tags/selectTagByName",
        data: data
    });
}

/**
 * 查询标签列表
 * @param data
 * @returns
 */
export function selectTags(data) {
    return service.request({
        method: "post",
        url: "/tags/selectTags",
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
        url: "/tags/deleteTags/" + id + ""
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
 * 查询分类根据名字
 * @param data
 * @returns
 */
export function selectClassifyByName(data) {
    return service.request({
        method: "post",
        url: "/classify/selectClassifyByName",
        data: data
    });
}

/**
 * 查询分类列表
 * @param data
 * @returns
 */
export function selectClassify(data) {
    return service.request({
        method: "post",
        url: "/classify/selectClassify",
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
        url: "/classify/deleteClassify/" + id + ""
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

/**
 * 查询博客列表
 * @param data
 * @returns
 */
export function selectBlogList(data) {
    return service.request({
        method: "get",
        url: `/blog/selectBlogList/${data.page}/${data.size}`,
        data: data
    });
}
/**
 * 查询博客列表
 * @param data
 * @returns
 */
export function selectRecycleBlogList(data) {
    return service.request({
        method: "get",
        url: `/blog/selectRecycleBlogList/${data.page}/${data.size}`,
        data: data
    });
}

/**
 * 删除分类
 * @param id
 * @returns
 */
export function deleteBlogById(id) {
    return service.request({
        method: "get",
        url: `/blog/deleteBlog/${id}`
    });
}
/**
 * 删除分类
 * @param id
 * @returns
 */
export function deleteRecycleBlogById(id)  {
    return service.request({
        method: "get",
        url: `/blog/deleteRecycleBlogById/${id}`
    });
}

/**
 * 查询博客详情
 * @param data
 * @returns
 */
export function selectBlogById(data) {
    return service.request({
        method: "post",
        url: "/blog/selectBlog",
        data: data
    });
}

/**
 * 添加博客信息
 * @param data
 * @returns
 */
export function addBlog(data) {
    return service.request({
        method: "post",
        url: "/blog/addBlog",
        data: data
    });
}


/**
 * 修改博客信息
 * @param data
 * @returns
 */
export function editBlog(data) {
    return service.request({
        method: "post",
        url: "/blog/editBlog",
        data: data
    });
}


/**
 * 根据查询条件查询
 * @param data
 * @returns
 */
export function selectBlogListByParam(data) {
    return service.request({
        method: "post",
        url: "/blog/selectBlogListByParam",
        data: data
    });
}

/**
 * 根据查询条件查询
 * @param data
 * @returns
 */
export function selectBlogListOfEcharts() {
    return service.request({
        method: "get",
        url: "/blog/selectBlogListOfEcharts"
    });
}

/**
 * 批量删除（）
 * @param data
 * @returns
 */
export function deleteBatchIdList(data) {
    return service.request({
        method: "post",
        url: "/blog/deleteBatchIdList",
        data: data
    });
}