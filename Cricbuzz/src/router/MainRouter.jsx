import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'



function MainRouter() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
      </Routes>
    </>
  )
}

export default MainRouter
