import LoginPageStyles from './LoginPage.module.css'

const LoginPage = () => {
    

  return (
    <div className={`${LoginPageStyles.loginPage} w-full vh-100  loginPage d-flex flex-column align-items-center`}>
          <div className="w-50 pt-4">
            img
            <h1 className='text-info text-center'>Login Page</h1>
          </div>
    </div>
  )
}

export default LoginPage
