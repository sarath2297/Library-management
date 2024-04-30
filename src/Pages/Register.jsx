import RegisterpageStyle from './Register.module.css';

function Register() {
  return (
    <>
    <div className={`${RegisterpageStyle.registerStyle}`}>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center align-items-center h-100">
                <div className={`${RegisterpageStyle.main} main w-100 `}>
    
                </div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )
}

export default Register