import axios from "axios";

export const api = axios.create({
    baseURL:"https://63670f4cf5f549f052cfd828.mockapi.io"
    });

    export const createSession = async(email,password) =>{
        return api.post("/login",{email,password});
    };