import axiosClient from "./axiosClient";
export const authApis = {
  login(username, password) {
    return axiosClient
      .post("/auth/login", {
        username,
        password,
      })
  },
  signUp(username, password) {
    return axiosClient
      .post("/auth/register", {
        username,
        password,
      })
  }
}
