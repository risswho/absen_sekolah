import { request } from "./config";
export const auth = ({ username, password }) => {
    return request().post("/api/auth", {
        username,
        password
    })
}

export const getCurentUser = () => {
    return request().get("/api/currentUser")
}