import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Basic from './pages/Basic'
import Advance from './pages/Advance'
import Navbar from './comopontes/Navbar'

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Basic />} />
        <Route path='/advance' element={<Advance />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  </>
}

export default App