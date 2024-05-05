import axios from "axios";
import { baseURL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

export const loginApi=`${baseURL}login`;

export const loginApiByUserName=async(userName,role)=>{
   return await axios.get(`${baseURL}/login?userName=${userName}&role=${role}`)
}

// http://localhost:4000/login?userName

export const getUserDataApi=async(role)=>{
   return await commonAPI('GET',`${baseURL}/login?role=${role}`,'')
}

//api for adding book
export const addBookApi = async(reqBody) =>{
   return await commonAPI('POST',`${baseURL}/books`,reqBody)
}

//api to get uploaded books
export const getUploadedBookApi = async() => {
   return await commonAPI('GET', `${baseURL}/books`,'')
}

//api for adding user book list

export const addUserBookApi = async(reqBody) =>{
   return await commonAPI('POST',`${baseURL}/userBookList`,reqBody)
}

//api to delete a book
export const deleteBookApi = async(id) =>{
   return await commonAPI('DELETE',`${baseURL}/books/${id}`,{})
}




