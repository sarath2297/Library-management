import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUserGroup , faTrash,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import NameTime from "../components/Common/NameTime"
import Button from 'react-bootstrap/Button';
import List_of_BooksStyle from "./List_of_Books.module.css";

function UserPage() {
  return (
    <>
        <Header/>
        <div className={`${List_of_BooksStyle.image} `}>
          <div className="ms-3 ">
          <div>
          <NameTime userName="User"/>
          <Button variant="warning" className='mt-2'>Go to Library <FontAwesomeIcon icon={faArrowRight} fade style={{color: "#ffffff",}} /></Button>
          </div>
  
          <div className='row mt-5 ms-3'>
                  <div className='col-md-3'>
                  <div  style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px',marginBottom:'20px'}}>
                          <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>1223</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Total Books</p>
                      </div>
                      <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px',marginBottom:'20px'}}>
                      <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>1223</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faBook} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Borrowed Books</p>
                  </div>
                  <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                      <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                              <h4>1223</h4>
                              <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'orange', borderRadius:'20px'}}><FontAwesomeIcon icon={faBook} /></div>
                          </div>
                          <p className='mt-4 ms-3'>Wishlested Books</p>
                  </div>
                  </div>
                  <div className="col-md-1"></div>
                  <div className='col-md-7'>
                  <div style={{height:'350px',width:'100%', color:'white',backgroundColor:'#4d4948', borderRadius:'20px', marginBottom:'30px',overflowY:'scroll'}}>
                      <div className='me-3 d-flex align-items-center justify-content-between'>
                          <h4 className='ms-3 pt-3'>Book List</h4>
                      </div>
                      <table className='ms-5 mt-4' style={{width:'90%'}}>
                          <thead>
                              <tr className='border-bottom border-light'>
                                  <th>BookId</th>
                                  <th>Title</th>
                                  <th>Author</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className='border-bottom border-light'>
                                  <td>dv</td>
                                  <td>sscdv</td>
                                  <td>xasccdf</td>
                                  <td><FontAwesomeIcon icon={faTrash}/></td>
                              </tr>
                          </tbody>
                      </table>
                      
                  </div>
                  </div>
                  <div className="col-md-1"></div>
                  
                  
              </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default UserPage

