import { forwardRef, useState } from "react";

const AddBookModal = forwardRef(function AddBookModal({hideAddBookModal}, ref) {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    genre: "",
    imageLink: "",
  });

  console.log(bookDetails);


  // const handleUpload = async()=>{
  //   const {title,author,genre,imageLink} = bookDetails
  //   if(!title || !author || !imageLink || !genre){
  //     alert('please fill everything')
  //   }
  //   else{
  //     // const response = await addBookApi(bookDetails)
  //     console.log(response);
  //     if(response.status>=200 && response.status<300){
  //       alert('Book details uploaded successfully')
  //       setBookDetails({
  //           title : '',
  //           author :'',
  //           image : ''
  //       })
  //       handleClose()
  //   }
  //   else{
  //       console.log(response);
  //       alert('Something went wrong')
  //   }
  //   }
  // }

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
    <dialog ref={ref} className="mx-auto mt-5 p-4 w-50 rounded" style={{backgroundColor:"white"}}>
      <div className="d-flex flex-column align-items-center justify-content-center rounded" style={{backgroundColor:"grey"}}>

        <form method="dialog" className="text-center  w-100" onSubmit={saveBookDetailsHandler}>
        <div>
          <h5>Enter The Title</h5>
          <input type="text" className="rounded" style={{width:"450px"}} placeholder="Enter the title of the book" name="title" onChange={(e)=>setBookDetails({...bookDetails,title:e.target.value})}/>
        </div>
        <div>
          <h5>Enter The Author</h5>
          <input type="text" className="rounded" style={{width:"450px"}} placeholder="Enter the Author of the book" name="author" onChange={(e)=>setBookDetails({...bookDetails,author:e.target.value})}/>
        </div>
        <div>
          <h5>Enter The Genre </h5>
          <input type="text" className="rounded" style={{width:"450px"}} placeholder="Enter the Genere of the book" name="genre" onChange={(e)=>setBookDetails({...bookDetails,genre:e.target.value})}/>
        </div>
        <div>
          <h5>Upload Image </h5>
          <input type="text" className="rounded" style={{width:"450px"}} placeholder="Enter the Genere of the book" name="imageLink" onChange={(e)=>setBookDetails({...bookDetails,imageLink:e.target.value})}/>
        </div>
        <button className="px-3 py-1 rounded bg-success">Save</button>
         
        </form>
        <div className="p-2 ">
          <button className="mx-5 px-2 py-1 rounded bg-danger" onClick={hideAddBookModal} >Discard</button>
         </div>

      </div>
    </dialog>
  );
});

export default AddBookModal;
