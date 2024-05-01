import axios from "axios";
import { baseURL } from "./baseUrl"
import { commonAPI } from "./commonAPI";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName,role)=>{
   return await axios.get(`${baseURL}/login?userName=${userName}&role=${role}`)
}

//api code for getting users list

export const getUserDataApi = async(role)=>{
   return await commonAPI('GET',`${baseURL}/login?role=${role}`,{})
}

// http://localhost:4000/login?userName