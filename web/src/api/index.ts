import request from "./request";

export const login = (data: any) => {
  return request.post("/api/login", data);
}