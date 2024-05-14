import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUserGroup,
  faTrash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import LoggedInUserInfoTimeComponent from "../Common/NameTime";
import { deleteBookApi, getUserDataApi } from "../../services/AllApis";
import AdminDashBoardStyles from "./AdminDashBoard.module.css";

import Card from "../Common/Card";

function AdminDashBoard({ getAllBooks, deleteData, isLoading }) {

  const [userCount, setUserCount] = useState(0);


  useEffect(() => {
    const getUserCount = async () => {
      try {
        const response = await getUserDataApi(`user`);
        setUserCount(response.data?.length);
      } catch (error) {
        alert(error);
      }
    };
    getUserCount();
  }, []);

  const handleDeleteBook = async (id) => {
    try {
      const result = await deleteBookApi(id);
      console.log(result, "The Result");
  
      if (result.status != 200) {
        console.log("Error");
        throw new Error("Something Went Wrong");
      }
      deleteData(id);
      alert("Data Deleted SucessFully");
    } catch (error) {
      alert(error.message);
    } 
  };
  console.log("AdminDash board re-rendered");
  return (
    <>
      <div className="ms-3">
        <LoggedInUserInfoTimeComponent userName="Admin" />

        <div className="row mb-5 mt-5">
          <div className="col-md-7">
            <div className={AdminDashBoardStyles.tableBackgroundDiv}>
              <div className="me-3 d-flex align-items-center justify-content-between">
                <h4 className="ms-3 pt-3">Book List</h4>
              </div>
              <table className="ms-5 mt-4  position-relative" style={{ width: "100%" }}>
                <thead>
                  <tr className="border-bottom border-light">
                    <th>BookId</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <FontAwesomeIcon className={AdminDashBoardStyles.spinner} icon={faSpinner} spin />
                  )}
                  { !isLoading &&
                    getAllBooks?.map((book) => {
                      return (
                        <tr
                          key={book?.id}
                          className="border-bottom border-light"
                        >
                          <td style={{width:'10%'}}>{book?.id}</td>
                          <td style={{width:'30%'}}>{book?.title}</td>
                          <td style={{width:'20%'}}>{book?.author}</td>
                          <td style={{width:'10%'}}>{book?.genre}</td>
                          <td style={{width:'10%'}} onClick={() => handleDeleteBook(book?.id)}>
                            {" "}
                            <FontAwesomeIcon icon={faTrash} />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">

            <Card count={userCount} cardCategory="Total Users" iconType={faUserGroup}/>

            <Card count={getAllBooks?.length} cardCategory="Total Books " iconType={faBook}/>

            <Card count={getAllBooks?.length} cardCategory="Borrowed Books" iconType={faBook}/>


          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
