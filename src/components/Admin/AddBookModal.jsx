import { forwardRef, useState } from "react";
import { addBookApi } from "../../services/AllApis";

const AddBookModal = forwardRef(function AddBookModal({hideAddBookModal,handleAddNewBook}, ref) {



  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    genre: "",
    imageLink: "",
  });


  const handleUpload = async()=>{
    console.log(bookDetails);
  const {title,author,genre,imageLink} = bookDetails
  if(!title || !author || !imageLink || !genre){
    alert('please fill everything')
  }
  else{
    const response = await addBookApi(bookDetails)
    console.log(response.data);
    handleAddNewBook(response.data)
    if(response.status>=200 && response.status<300){
      alert('Book details uploaded successfully')
      setBookDetails({
          title : "",
          author :"",
          imageLink : "",
          genre: ""
      })
      hideAddBookModal()
  }
  else{
    alert('Something went wrong')
  }
  }
}


  console.log(bookDetails);

  return (
    <dialog ref={ref} className="mx-auto mt-5 p-4 w-50 rounded-3" style={{backgroundColor:"white"}}>
      <div className="d-flex flex-column align-items-center justify-content-center rounded-3" style={{backgroundColor:"black",opacity:'0.9'}}>

        <form method="dialog" className="text-center  w-100">
        <div>
          <h6 className="mt-2 text-light">Enter The Title</h6>
          <input type="text" className="rounded form-control w-75" style={{marginLeft:'70px'}} placeholder="Enter the title of the book" name="title" onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})}/>
        </div>
        <div>
          <h6 className="mt-2 text-light">Enter The Author</h6>
          <input type="text" className="rounded form-control w-75" style={{marginLeft:'70px'}} placeholder="Enter the Author of the book" name="author" onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})}/>
        </div>
        <div>
          <h6 className="mt-2 text-light">Enter The Genre </h6>
          <input type="text" className="rounded form-control w-75" style={{marginLeft:'70px'}} placeholder="Enter the Genere of the book" name="genre" onChange={(e)=>setBookDetails({...bookDetails,genre:e.target.value})}/>
        </div>
        <div>
          <h6 className="mt-2 text-light">Upload Image </h6>
          <input type="text" className="rounded form-control w-75" style={{marginLeft:'70px'}} placeholder="Enter the Genere of the book" name="imageLink" onChange={(e)=>setBookDetails({...bookDetails,imageLink:e.target.value})}/>
        </div>
         
        </form>
        <div className="p-2 ms-5 my-2">
        <button className="px-3 py-1 rounded btn bg-danger text-light" onClick={hideAddBookModal} >Discard</button>

        <button className="mx-5 px-3 py-1 rounded btn bg-success text-light" onClick={handleUpload} >Save</button>
         </div>

      </div>
    </dialog>
  );
});

export default AddBookModal;
