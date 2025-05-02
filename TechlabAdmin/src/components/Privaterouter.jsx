import React from 'react'
import { Navigate } from 'react-router-dom'


function Privaterouter({ children }) {



  return (
    <div>
      {localStorage.getItem("isLogin") ? children : <Navigate to={"/login"} />}
    </div>
  )
}

export default Privaterouter
