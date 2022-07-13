import * as axios from "axios";

const instace = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "5393acf7-f8e7-4e01-bb69-39ff49e6d5e9",
  },
});

export const usersAPI = {
  getUsers(page, usersCount) {
    return instace
      .get(`users?page=${page}&count=${usersCount}`)
      .then((response) => response.data);
  },
  showMoreUsers(page, usersCount) {
    return instace
      .get(`users?page=${page}&count=${usersCount}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instace.delete(`follow/${id}`).then((response) => response.data);
  },
  unfollow(id) {
    return instace.post(`follow/${id}`, {}).then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instace.get(`profile/${id[Object.keys(id)]}`);
  },
  getUserStatus(id) {
    return instace.get(`profile/status/${id[Object.keys(id)]}`);
  },
  updateStatus(status) {
    return instace.put(`profile/status`, { status });
  },
  savePhoto(photo) {
    let formData = new FormData();
    formData.append("image", photo);

    return instace.put(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export const AuthAPI = {
  auth() {
    return instace
      .get(`auth/me`) //
      .then((response) => response.data);
  },
  login(formData) {
    return instace
      .post(`auth/login`, { ...formData })
      .then((response) => response.data);
  },
  logout() {
    return instace.delete("auth/login");
  },
};
