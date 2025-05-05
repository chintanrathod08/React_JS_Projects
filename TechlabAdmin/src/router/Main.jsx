import React from 'react'
import "../App.css"
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Addjob from '../pages/Addjob'
import Joblist from '../pages/Joblist'
import Applyjob from '../pages/Applyjob'
import Jobapplication from '../pages/Jobapplication'
import Privaterouter from '../components/Privaterouter'
import Jobdetails from '../pages/Jobdetails'
import Jobappchange from '../pages/Jobappchange'
import Dashboard from '../pages/Dashboard'

function Main() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/profile' element={<Privaterouter> <Profile /> </Privaterouter>} ></Route>
        <Route path="/addjob" element={<Addjob />} />
        <Route path="/addjob/:id" element={<Addjob />} />
        <Route path='/joblist' element={<Privaterouter><Joblist /></Privaterouter>}></Route>
        <Route path='/jobdetails/:id' element={<Privaterouter> <Jobdetails /> </Privaterouter>} ></Route>
        <Route path='/applyjob/:id' element={<Privaterouter> <Applyjob /> </Privaterouter>} ></Route>
        <Route path='/jobapplication' element={<Privaterouter> <Jobapplication /> </Privaterouter>}></Route>
        <Route path='/jobappchange/:id' element={<Privaterouter> <Jobappchange /> </Privaterouter>}></Route>
        <Route path='/dashboard' element={<Privaterouter> <Dashboard /></Privaterouter>} ></Route>
      </Routes>
    </div>
    
  )
}

export default Main
