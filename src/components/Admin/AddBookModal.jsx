import { forwardRef, useState } from "react";

const AddBookModal = forwardRef(function AddBookModal({hideAddBookModal}, ref) {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    genre: "",
    imageLink: "",
  });

  const saveBookDetailsHandler=(e)=>{
   e.preventDefault();
    const getForm=new FormData(e.target);
    const title=getForm.get("title")
    const author=getForm.get("author")
    const genre=getForm.get("genre")
    const imageLink=getForm.get("imageLink")
    
    setBookDetails({
        title,author,genre,imageLink
    })
  }
  console.log(bookDetails);

  return (
    <dialog ref={ref} className="mx-auto mt-5 p-4 w-50 rounded">
      <div className="d-flex flex-column align-items-center justify-content-center">

        <form method="dialog" className="text-center mt-2" onSubmit={saveBookDetailsHandler}>
        <div>
          <h5>Enter The Title</h5>
          <input type="text" placeholder="Enter the title of the book" name="title"/>
        </div>
        <div>
          <h5>Enter The Author</h5>
          <input type="text" placeholder="Enter the Author of the book" name="author"/>
        </div>
        <div>
          <h5>Enter The Genre </h5>
          <input type="text" placeholder="Enter the Genere of the book" name="genre"/>
        </div>
        <div>
          <h5>Upload Image </h5>
          <input type="text" placeholder="Enter the Genere of the book" name="imageLink"/>
        </div>
         <div className="p-2">
         <button className="px-2 py-1 rounded" >Save</button>
          <button className="mx-3 px-2 py-1 rounded" onClick={hideAddBookModal} >Discard</button>
         </div>
        </form>
        

      </div>
    </dialog>
  );
});

export default AddBookModal;
