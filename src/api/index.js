import axios from "axios";

const api = axios.create({
  baseURL: "http://api.example.com",
  withCredentials: true,
});

export async function login(data) {
  return await api.post("/account/login", data);
}

export async function getPosts() {
  return await api.get("/post/all");
}

export async function getPost(id) {
  return await api.get(`/post/${id}`);
}

export async function getTypePosts(type) {
  return await api.get(`/post/type=${type}`);
}

export async function getCategoryPosts(category) {
  return await api.get(`/post/category=${category}`);
}
