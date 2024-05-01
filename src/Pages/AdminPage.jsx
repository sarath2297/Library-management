import { useEffect, useState } from "react";
import AdminDashBoard from "../components/Admin/AdminDashBoard"
import AdminNavBar from "../components/Admin/AdminNavBar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import List_of_BooksStyle from "./List_of_Books.module.css";
import { getUploadBookApi } from "../services/AllApis";

const AdminPage = () => {

  const[getAllBooks,setAllBooks]=useState([]);

  useEffect(()=>{
    const getBookLists =async()=>{
     const bookLists= await getUploadBookApi();
      console.log(bookLists.data);

     setAllBooks(bookLists.data)
 }
 getBookLists();
},[])

function handleAddNewBook(response){
  console.log(response);
  setAllBooks((prev)=>{
    return [...prev,response]
  })
}

console.log(getAllBooks,"Here");

  return (
    <div className={`${List_of_BooksStyle.image} `}>

      <Header/>
      <AdminNavBar handleAddNewBook={handleAddNewBook}/>
      <AdminDashBoard getAllBooks={getAllBooks}/>

      <Footer/>
    </div>
  )
}

export default AdminPage
