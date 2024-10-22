import axios from 'axios';

// const token = localStorage.getItem('token');

const axiosBase = axios.create({
  // baseURL: "http://localhost:5500/api", // using  local host
  // baseURL: "https://forumproject-1.onrender.com", // using Render
  baseURL: "https://evan-forum-deploy.onrender.com/api",
  // headers: {
  // Authorization: token ? `Bearer ${token}` : "",
  // },
});


export default axiosBase;