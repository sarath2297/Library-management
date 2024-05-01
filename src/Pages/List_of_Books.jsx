import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faArrowUp } from "@fortawesome/free-solid-svg-icons";



const dropDownLists=["Novels","Fantasy","Romance","Biography/Autobiography","Chrime Thriller","Travel","Cooking/Food","History","Encyclopedias"]
function List_of_Books() {
  return (
    <>
      <Header />

      <div className={List_of_BooksStyle.main}>
        <div className={List_of_BooksStyle.head}>
          
            <h2>Get your Books</h2>
          
          
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
          
        </div>

        <div className="row" style={{paddingInline:"10px" , paddingBottom:"10px"}}>
           <div className="row ms-5 mt-3">
           <h4 className="text-light">Category Name</h4>
           </div>
             <div className="col-1"></div>
             <div className="col-10">
               <Row className="w-100 ">
                  <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards />
                  </Col>
                  <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards />
                  </Col>
                  <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards />
                  </Col>
                  <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards />
                 </Col>
                 <Col sm={12} md={6} lg={3} className="mt-3">
                      <Cards />
                 </Col>
                
               </Row>
             </div>
           {/*   <div className="col-1 arrow">
             <FontAwesomeIcon icon={faArrowUp} beat size="lg" style={{color: "#ffffff",}} />
             </div> */}
             
        </div>


      </div>

      <Footer />
    </>
  );
}

export default List_of_Books;
