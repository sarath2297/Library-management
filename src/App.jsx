import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginPage from './Pages/LoginPage'
import UserPage from './Pages/UserPage'
import AdminPage from './Pages/AdminPage'
import List_of_Books from './Pages/List_of_Books'


function App() {
  

  return (
    <>
      <Routes>

        <Route path='/' element={<LoginPage/>}/>
        <Route path='/user' element={<UserPage/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/list' element={<List_of_Books/>}/>
        <Route path="*"  element={<LoginPage/>}/>

      </Routes>
    </>
  )
}

export default App
