import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginPage from './Pages/LoginPage'
import UserPage from './Pages/UserPage'
import AdminPage from './Pages/AdminPage'


function App() {
  

  return (
    <>
      <Routes>

        <Route path='/' element={<LoginPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>

      </Routes>
    </>
  )
}

export default App
