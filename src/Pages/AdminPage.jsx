import AdminDashBoard from "../components/Admin/AdminDashBoard"
import AdminNavBar from "../components/Admin/AdminNavBar"
import Footer from "../components/Footer"
import Header from "../components/Header"
import List_of_BooksStyle from "./List_of_Books.module.css";

const AdminPage = () => {
  return (
    <div className={`${List_of_BooksStyle.image} `}>
      <Header/>

      <AdminNavBar/>
      <AdminDashBoard/>

      <Footer/>
    </div>
  )
}

export default AdminPage
