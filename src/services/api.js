import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

API.interceptors.request.use((config) => {
  const token =localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// GET all tasks
export const getTasks = () => API.get("/tasks");

// CREATE a task
export const createTask = (taskData) => API.post("/tasks", taskData);

// UPDATE a task
export const updateTask = (_id, taskData) =>
  API.put(`/tasks/${_id}`, taskData);

// DELETE a task
export const deleteTask = (_id) => API.delete(`/tasks/${_id}`);

export const registerUser = (userData) =>  API.post("/auth/register",userData);

export const loginUser = (userData) => API.post("/auth/login",userData);

export default API;