import axios from "axios";
import { baseURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName)=>{
   return await axios.get(`${baseURL}/login?userName=${userName}`)
}

//api for adding book
export const addBookApi = async(reqBody) =>{
   return await commonAPI('POST',`${baseURL}/books`,reqBody)
}

//api to get uploaded books
export const getUploadBookApi = async() => {
   return await commonAPI('GET', `${baseURL}/books`,'')
}

// http://localhost:4000/login?userName