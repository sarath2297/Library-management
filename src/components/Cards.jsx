import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addUserBookApi, adduserWishlistApi } from "../services/AllApis";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cards({ displayCard }) {
  const addUserBook = async () => {
    let title = displayCard?.title;
    let author = displayCard?.author;
    let time = new Date();
    let userId = localStorage.getItem(`userId`);
    let timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(time);

    let reqBody = {
      title,
      author,
      timeStamp,
      userId,
    };

    try {
      console.log("Here");
      const response = await addUserBookApi(reqBody);
      console.log(response);
      if (response.request.status >= 400) {
        throw new Error("Something went Wrong");
      }
      console.log(response);
      toast("Book Added");
    } catch (error) {
      toast("Something went Wrong");
    }
  };

  //api for wishlist
  const userWishlistHistory = async () => {
    let title = displayCard?.title;
    let userId = localStorage.getItem(`userId`);
    let reqBody = {
      title,
      userId,
    };
    try {
      const response = await adduserWishlistApi(reqBody);
      console.log(response);
      if (response.request.status >= 400) {
        throw new Error("Something went Wrong");
      }
      console.log(response);
      toast("Book Added to wishlist");
    } catch (error) {
      toast("Something went Wrong");
    }
  };

  return (
    <div>
      <Card style={{ width: "15rem", marginTop: "2px" }}>
        <Card.Img
          variant="top"
          src={displayCard?.imageLink}
          style={{ height: "200px" }}
        />
        <Card.Body>
          <Card.Title
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {displayCard?.title}
          </Card.Title>
          <Card.Text
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            <p>Author : {displayCard?.author}</p>
            <p>Genre : {displayCard?.genre}</p>
          </Card.Text>
          <Button variant="primary" className="me-2" onClick={addUserBook}>
            Take Book
          </Button>
          <Button
            variant="warning"
            className="ms-2"
            onClick={userWishlistHistory}
          >
            Wishlist
          </Button>
        </Card.Body>
      </Card>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHovertheme="light"
      />
    </div>
  );
}

export default Cards;
