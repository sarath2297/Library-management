import admindash from '../../Pages/AdminDashBoard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

function AdminDashBoard() {
  return (
    <>
        <div className='ms-3'>
            <h2>Hello, <span className={admindash.admindashspan}>Admin</span></h2>
            <h6>Apr 29,2024 | Monday, 09:30 PM</h6>

            <div className='row mt-4 mb-4'>
                <div className='col-md-3'>
                    <div  style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                        <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                            <h4>1223</h4>
                            <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'#f65867', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                        </div>
                        <p className='mt-4 ms-3'>Total Visitors</p>
                    </div>
                </div>
                <div className='col-md-3'>
                <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                    <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                            <h4>1223</h4>
                            <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'#f65867', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                        </div>
                        <p className='mt-4 ms-3'>Borrowed Books</p>
                </div>
                </div>
                <div className='col-md-3'>
                <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                    <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                            <h4>1223</h4>
                            <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'#f65867', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                        </div>
                        <p className='mt-4 ms-3'>Overdue Books</p>
                </div>
                </div>
                <div className='col-md-3'>
                <div style={{width:'300px',height:'100px',color:'white',backgroundColor:'#4d4948', borderRadius:'20px',marginLeft:'10px'}}>
                    <div className='d-flex align-items-center justify-content-between px-3 py-1' >
                            <h4>1223</h4>
                            <div className='d-flex align-items-center justify-content-center' style={{width:'35px',height:'35px',backgroundColor:'#f65867', borderRadius:'20px'}}><FontAwesomeIcon icon={faUserGroup} /></div>
                        </div>
                        <p className='mt-4 ms-3'>Overdue Books</p>
                </div>
                </div>
            </div>
            <div>
                <div style={{height:'300px',width:'50%', color:'white',backgroundColor:'#4d4948', borderRadius:'20px', marginBottom:'30px'}}>
                    <div className='me-3 d-flex align-items-center justify-content-between'>
                        <h4 className='ms-3 pt-3'>Book List</h4>
                        <button className='btn btn-outline-light'>Add New Book</button>
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
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AdminDashBoard