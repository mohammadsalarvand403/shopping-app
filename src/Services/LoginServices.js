import http from "./HttpServices";

export const loginUser=(data)=>{
return http.post("/user/login",data)
}
