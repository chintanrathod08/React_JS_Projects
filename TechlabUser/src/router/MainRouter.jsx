import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import FindJobs from '../pages/FindJobs'

function MainRouter() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/findjobs' element={<FindJobs/>} ></Route>
      </Routes>
    </>
  )
}

export default MainRouter
