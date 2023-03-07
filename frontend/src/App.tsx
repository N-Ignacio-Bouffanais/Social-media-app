import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App