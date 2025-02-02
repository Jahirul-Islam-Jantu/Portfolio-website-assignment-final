import {
    CreateBlogService, deleteBlogService, getBlogService,

} from "../services/BlogService.js";



export const createBlog = async (req, res) => {
    let result = await CreateBlogService(req);
    return res.json(result);
}

export const getBlog = async (req, res) => {
    let result = await getBlogService(req);
    return res.json(result);
}

export const deleteBlog = async (req, res) => {
    let result = await deleteBlogService(req);
    return res.json(result);
}