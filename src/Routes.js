import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { LoginComponent } from './components/LoginComponent/LoginComponent'
import { HelpComponent } from './components/HelpComponent/HelpComponent'
import { ForgotPassComponent } from './components/ForgotPassComponent/ForgotPassComponent'
import { HomeComponent } from './components/HomeComponent/HomeComponent'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path='/login' element={<LoginComponent />} />
      <Route path='/help' element={<HelpComponent />} />
      <Route path='/forgot' element={<ForgotPassComponent />} />
      <Route path='/home' element ={<HomeComponent />} />
      <Route path='/' element={<Navigate replace to='/login' />} />
    </Routes>
  </Router>
)



export default AppRoutes