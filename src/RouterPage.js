import React from 'react'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Shop from './Shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function RouterPage() {
  return (
<Router>
    
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
    </Routes>
    <Header/>
</Router>
  )
}

export default RouterPage