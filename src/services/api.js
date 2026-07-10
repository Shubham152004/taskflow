import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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

export default API;