import axios from "axios";

const API = axios.create({
  baseURL: "https://arc-dev-backend.herokuapp.com/project",
});

/*
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

*/
export const fetchProjects = () => API.get("/fetchMany");
/*
export const createTask = (newPost) => API.post("/tasks", newPost);
export const fetchTask = (id) => API.get(`/tasks/${id}`);
export const updateTask = (id, updatedPost) =>
  API.patch(`/tasks/${id}`, updatedPost);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const signIn = (formData) => API.post("/users/login", formData);
export const signUp = (formData) => API.post("/users", formData);
export const signOut = () => API.post("/users/logout");
*/
