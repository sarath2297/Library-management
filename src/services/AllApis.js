import axios from "axios";
<<<<<<< HEAD
import { baseURL } from "./baseUrl";
=======
import { baseURL } from "./baseUrl"
>>>>>>> bdc6c496b64e5ddfd253b5b42a2886a2feb74215
import { commonAPI } from "./commonAPI";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName,role)=>{
   return await axios.get(`${baseURL}/login?userName=${userName}&role=${role}`)
}

<<<<<<< HEAD
// http://localhost:4000/login?userName

//api for adding book
export const addBookApi = async(reqBody) =>{
   return await commonAPI('POST',`${baseURL}/books`,reqBody)
}

//api to get uploaded books
export const getUploadBookApi = async() => {
   return await commonAPI('GET', `${baseURL}/books`,'')
}
=======
//api code for getting users list

export const getUserDataApi = async(role)=>{
   return await commonAPI('GET',`${baseURL}/login?role=${role}`,{})
}

// http://localhost:4000/login?userName
>>>>>>> bdc6c496b64e5ddfd253b5b42a2886a2feb74215
