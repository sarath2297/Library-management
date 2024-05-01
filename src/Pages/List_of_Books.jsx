import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { getUploadBookApi } from '../services/AllApis';
import { useEffect, useState } from 'react';

const dropDownLists=["Novels","Fantasy","Romance","Biography/Autobiography","Chrime Thriller","Travel","Cooking/Food","History","Encyclopedias"]
function List_of_Books() {

  const navgivate = useNavigate()

  // state to hold book details from backend
  const [bookdet,setBookDet] = useState([])
  const getBook = async() =>{
      const response = await getUploadBookApi()        
      // console.log(response.data);
      setBookDet(response.data)
  }

  console.log(bookdet);

  useEffect(()=>{
      getBook()
  },[])

  const backtoHome = ()=>{
    navgivate('/user')
  }

  return (
    <>
      <Header />

      <div className={List_of_BooksStyle.main}>
        <div className={List_of_BooksStyle.head}>
                    
            <h3 className="text-light">Get your Books</h3>
            
           <div style={{position:"relative"}}>
           <FontAwesomeIcon icon={faMagnifyingGlass} flip style={{color: "#ffffff",marginRight:'5',position:"absolute",right:"0",top:"0.5rem"}} />
           <input
              type="text"
              placeholder="Search Books"
              style={{
                borderColor: "white",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "5px",
                width:"300px",
                height:"33px",
                textAlign:"center",
                justifyContent:"center",
                borderBlockStyle:"solid",
                borderWidth:"2px",
                borderLeftColor:"white"
              }}
            />
           </div>
          
          
            <Dropdown>
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color:'white', width:'150px'}}>
              Genre
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {dropDownLists.map((dropDownItem,index)=>{
                  return( <Dropdown.Item href="#/action-2" key={index}>{dropDownItem} </Dropdown.Item>)
                })}
                
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="warning" className='ms-2' onClick={backtoHome}>Back to Home</Button>
          
        </div>

        <div className="row" style={{paddingInline:"10px" , paddingBottom:"10px"}}>
           <div className="row ms-5 mt-3">
           <h4 className="text-light">Category Name</h4>
           </div>
             <div className="col-1"></div>
             <div className="col-10">
               <Row className="w-100 ">
               {bookdet?.length>0?
               bookdet?.map((item)=>(
                <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards displayCard={item}/>
                  </Col>  ))
          :
          <p className='mt-5 text-warning'>No Books Uploaded Yet..</p>
          }              
               </Row>
             </div>
             
        </div>


      </div>

      <Footer />
    </>
  );
}

export default List_of_Books;
