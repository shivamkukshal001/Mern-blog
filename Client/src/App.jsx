import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/signin' element={<Signin/>}/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App