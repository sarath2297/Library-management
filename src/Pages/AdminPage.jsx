import AdminDashBoard from "../components/AdminDashBoard"
import AdminNavBar from "../components/AdminNavBar"
import Footer from "../components/Footer"

const AdminPage = () => {
  return (
    <div>
      <AdminNavBar/>
      <AdminDashBoard/>
      {/* <Bookdetails/> */}
      <Footer/>
    </div>
  )
}

export default AdminPage
