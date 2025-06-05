import axios from "axios";

const BASE_URL = "http://localhost:8080/blogs";

export const getBlogs = () => { return axios.get(BASE_URL); }
export const getBlogById = (blogId) => { return axios.get(BASE_URL + '/' + blogId); }
export const addBlog = (blogData) => { return axios.post(BASE_URL + '/add', blogData); }
export const deleteBlog = (blogId) => { return axios.delete(BASE_URL + '/' + blogId); }
export const editBlog = (blogId, blogData) => { return axios.put(BASE_URL + '/' + blogId, blogData); }
