import React from 'react'

import {Link, Route, Routes} from 'react-router-dom'

import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Dailydata from './Component/Dailydata/Dailydata'
import Buydata from './Component/Buydata/Buydata'

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/dailydata' element={<Dailydata/>} />
        <Route path='/buydata' element={<Buydata/>} />
      </Routes>
      
    </div>
    
  )
}

export default App
