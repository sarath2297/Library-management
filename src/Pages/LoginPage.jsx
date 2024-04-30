import { useState } from 'react'
import LoginPageStyles from './LoginPage.module.css'

const LoginPage = () => {

 const[loginDetails,setLoginDetails]=useState({
    userName:"",
    password:""
  })
  const[errorDetails,setErrorDetails]=useState();

  function loginHandler(e){
    e.preventDefault();
    const errors={}
     const formData=new FormData(e.target);
     const getUserName=formData.get('userName');
     const getUserPassword=formData.get('userPassword')
     if(!getUserName){
      console.log("UserName Cammot Be Empty");
      errors.userName="UserName Cammot Be Empty"
     }
     if(!getUserPassword){
      console.log("UserPassword Cammot Be Empty");
      errors.userPassword="UserPassword Cammot Be Empty"
     }

     if(Object.keys(errors).length===0){
          setLoginDetails({userName:getUserName,
          password:getUserPassword})
          console.log(loginDetails);
          setErrorDetails();
     }
     else{
      setErrorDetails(errors);
     }

      
  }
   console.log(errorDetails); 

  return (
    <div className={`${LoginPageStyles.loginPage} w-full vh-100  loginPage d-flex flex-column align-items-center justify-content-center`}>

          <div className={`${LoginPageStyles.loginPageContent} d-flex flex-column  mt-5 py-4
            rounded align-items-center  loginPageContent`}>
            {/* For Logo */}
            <div className={`${LoginPageStyles.LogoDiv}   gap-6 p-4`}>
              
            <img src="src\assets\logo.png" alt="" />
            <h2 className='text-warning text-center'> <span className='text-start mr-auto text-light'>LibrarianPro</span> <br />Digital Library </h2>
            </div>
            <div className={` d-flex w-75  flex-column align-items-center`}>
              <form className={LoginPageStyles.loginForm} onSubmit={loginHandler} id='fomrData'>
               <div className=' d-flex flex-column align-items-center '>
                <label htmlFor="" className='text-warning fw-normal px-2'>UserName</label>
                <input type="text"  placeholder='Enter Your UserName' className='form-control' name='userName'/>
                 { errorDetails?.userName && <p className='text-danger'>{errorDetails?.userName}</p>}
              </div>
              <div className=' mt-2 d-flex flex-column align-items-center'>
                <label htmlFor="" className='text-warning fw-normal px-2'>Password</label>
                <input type="text" placeholder='Enter Your Password' className='form-control' name='userPassword'/>
                {errorDetails?.userPassword && <p className='text-danger'>{errorDetails?.userPassword}</p>}
              </div>
              <div className='d-flex text-warning mt-3 '>
                <h6 className='me-5'>User <input type="radio" name="User" id="" /></h6>
                <h6>Admin <input type="radio" name="Admin" id="" /></h6>
                
              </div>
               <button className='px-4 py-1 bg-warning rounded mt-3' >Login</button>
              </form>
             
            </div>
            
          </div>
    </div>
  )
}

export default LoginPage
