import http from "./HttpServices";

export const signupUser=(data)=>{
return http.post("/user/register",data)
}
