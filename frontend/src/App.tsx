import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import { LandingPage } from './pages/LandingPage'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import AcountConfig from './pages/AcountConfig'


function App() {

  const loggedIn: boolean = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/config' element={loggedIn ? (
          <AcountConfig />
        ) : (
          <Navigate replace to={"/"} />
        )} />
        <Route path='/profile' element={loggedIn ? (
          <Profile />
        ) : (
          <Navigate replace to={"/"} />
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App