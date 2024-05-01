import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AdminNavrBarStyle from "./AdminNavBar.module.css";
import { useRef} from "react";
import LogoutModal from "../LogoutModal";
import AddBookModal from "./AddBookModal";

const AdminNavBar = ({handleAddNewBook}) => {
  const modal = useRef();

  const addBookModalRef=useRef();


  const hideModal=()=>{
    modal.current.close();

  }

  const hideAddBookModal=()=>{
    addBookModalRef.current.close();
  }


  const openAddModalHandler=()=>{
    addBookModalRef.current.showModal();
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center bg-warning py-2">
        <div>
          <p className="px-2 my-auto">Dashboard</p>
        </div>
        <div className={AdminNavrBarStyle.leftsection}>
          <div className={AdminNavrBarStyle.searchSection}>
            <input
              type="text"
              className=" text-black"
              placeholder="Search books"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={AdminNavrBarStyle.searchIcon}
            />
          </div>

          <div>
            <button className="px-3 py-1 text-white bg-primary h6 my-auto rounded" onClick={openAddModalHandler}>
              Add Book
            </button>
          </div>

          <div className={AdminNavrBarStyle.avatarDesigin}>
            <FontAwesomeIcon icon={faBell} className="fa-xl" />
          </div>
        </div>
        <LogoutModal ref={modal}  hideModal={hideModal}/>
        <AddBookModal ref={addBookModalRef} hideAddBookModal={hideAddBookModal} handleAddNewBook={handleAddNewBook}/>
      </div>

    
    </>
  );
};

export default AdminNavBar;
