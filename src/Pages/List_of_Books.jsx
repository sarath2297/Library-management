import Footer from "../components/Footer";
import Header from "../components/Header";
import List_of_BooksStyle from "./List_of_Books.module.css";
import Cards from "../components/Cards";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getUploadedBookApi } from "../services/AllApis";
import { useEffect, useState } from "react";

// const dropDownLists = [
//   "Novels",
//   "Fantasy",
//   "Romance",
//   "Biography/Autobiography",
//   "Chrime Thriller",
//   "Travel",
//   "Cooking/Food",
//   "History",
//   "Encyclopedias",
// ];

function List_of_Books() {
  const navgivate = useNavigate();


  const [availableBooksData, setAvailableBooksData] = useState([]);

  const [filteredbookCriteria, setFilteredBooksCriteria] = useState("");

  const[searchWords,setSearchWord]=useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await getUploadedBookApi();
        if (response.status != 200) {
          throw new Error("SomeThing Went Wrong");
        }
        setAvailableBooksData(response.data);
        // setFilteredBooks(response.data)
      } catch (error) {
        console.log(error);
        alert(error);
      }
    };

    getBook();
  }, []);




  const backtoHome = () => {
    navgivate("/user");
  };

  const getBookGenere = (e) => {
    setFilteredBooksCriteria(e.target.value);
  };

  let filteredData = availableBooksData.filter((availableBookData) => {
    return filteredbookCriteria === ""
      ? availableBookData
      : availableBookData.genre === filteredbookCriteria;
  });
    console.log(filteredData, "filteredData");

  const getSearchDetails=(e)=>{
    setSearchWord(e.target.value);
    filteredData=availableBooksData.filter((availableBookData) => {
      return e.target.value === ""
        ? availableBookData
        : availableBookData.title.startsWith(e.target.value);
    });
    console.log(filteredData);
  }
  return (
    <>
      <Header />

      <div className={List_of_BooksStyle.main}>
        <div className={List_of_BooksStyle.head}>
          <h3 className="text-light">Get your Books</h3>

          <div style={{ position: "relative" }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              flip
              style={{
                color: "#ffffff",
                marginRight: "5",
                position: "absolute",
                right: "0",
                top: "0.5rem",
              }}
            />
            <input  onChange={getSearchDetails}
              type="text"
              placeholder="Search Books"
              style={{
                borderColor: "white",
                backgroundColor: "transparent",
                color: "white",
                borderRadius: "5px",
                width: "300px",
                height: "33px",
                textAlign: "center",
                justifyContent: "center",
                borderBlockStyle: "solid",
                borderWidth: "2px",
                borderLeftColor: "white",
              }}

            />
          </div>
          <select onChange={getBookGenere}>
            <option value="" selected disabled>
              Select One
            </option>
            <option value="Novels">Novels</option>
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            <option value="Biography/Autobiography">
              Biography/Autobiography
            </option>
            <option value="Chrime Thriller">Chrime Thriller</option>
            <option value="Travel">Travel</option>
            <option value="Cooking/Food">Cooking/Food</option>
            <option value="History">History</option>
            <option value="Encyclopedias">Encyclopedias</option>
          </select>

          <Button variant="warning" className="ms-2" onClick={backtoHome}>
            Back to Home
          </Button>
        </div>

        <div
          className="row"
          style={{ paddingInline: "10px", paddingBottom: "10px" }}
        >
          <div className="row">
            <h4 className="text-light">Category Name</h4>
          </div>
          <div className="col-1"></div>
          <div className="col-10">
            <Row className="w-100 ">
              {filteredData?.length > 0 ? (
                filteredData.map((item) => (
                  <Col
                    sm={12}
                    md={6}
                    lg={3}
                    className="mt-3"
                    key={filteredData.id}
                  >
                    <Cards displayCard={item} />
                  </Col>
                ))
              ) : (
                <p className="mt-5 text-warning">No Books Uploaded Yet..</p>
              )}
            </Row>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default List_of_Books;
