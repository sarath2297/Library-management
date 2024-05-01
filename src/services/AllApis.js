import axios from "axios";
import { baseURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName)=>{
   return await axios.get(`${baseURL}login?userName=${userName}`)
}

// http://localhost:4000/login?userName