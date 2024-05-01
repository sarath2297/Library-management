import axios from "axios";
import { baseURL } from "./baseUrl";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName,role)=>{
   return await axios.get(`${baseURL}login?userName=${userName}&role=${role}`)
}

// http://localhost:4000/login?userName