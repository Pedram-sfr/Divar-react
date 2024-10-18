import api from "configs/api";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getMyPost = () => api.get("post/my").then((res) => res || false);
const getAllPost = () => api.get("").then((res) => res || false);

export { getProfile, getMyPost, getAllPost };
