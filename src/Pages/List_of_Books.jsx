import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


function List_of_Books() {
  return (
    <>
      <Header />

      <div className={List_of_BooksStyle.main}>
        <div className={List_of_BooksStyle.head}>
          
            <h1>List of Books</h1>
          
          
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
              <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color:'white'}}>
               Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Novels</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Romance</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Biography/Autobiography</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Chrime Thriller</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cooking/Food</Dropdown.Item>
                <Dropdown.Item href="#/action-3">History</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Encyclopedias</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          
        </div>

        <div className="row" style={{paddingInline:"10px" , paddingBottom:"10px"}}>
           <div className="row ms-2 mt-5">
           <h4 className="text-light">Category Name</h4>
           </div>
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
                
               </Row>
             </div>
              <div className="col-2 p-2" style={{ backgroundColor: "transparent",borderColor:'white',borderWidth:'2',borderRadius:'4'}} >
                <div className="row p-2 h-50 mt-5" style={{color:'black'}}>
                   <h3>favorites</h3>
                </div>
                <div className="row p-2 h-50 my-5" style={{color:'black'}}>
                   <h3>read later</h3>
                </div>
            
            </div>
        </div>


      </div>

      <Footer />
    </>
  );
}

export default List_of_Books;