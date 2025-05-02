import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'


function Signup() {

  // const sidebarOpen = useSelector((state) => state.sidebarOpen);

  const navigate = useNavigate()

  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [arr, setArr] = useState([])
  
  const hlChange = (e) => {
    const { name, value } = e.target
    setSignup({ ...signup, [name]: value })
  }

  const hlSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/loginuser`,{
      method : "POST",
      headers : {"content-type" : "application/JSON"},
      body : JSON.stringify(signup)
     })
     .then((Res)=>{
       return Res.json()
     })
     .then((res) => {
      setArr([...arr, res.data])
      navigate('/signup')
     })
      .catch((Err)=>{
        console.log(Err);
      })
  }

  
    

  return (
    // Mainconetent-Section
    
      

         
          <div className='w-[100%]  h-[100vh]  bg-[#F5F5F5] flex justify-center items-center' >
           
            <form action="" onSubmit={hlSubmit} className='flex bg-[white] flex-col items-center justify-center gap-6 p-10 rounded-[10px] shadow-2xl' >

              
              <img src="https://www.techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png" alt="" 
                className='w-[6rem]'
              />
              
              <p className='font-medium text-[19px]'>Sign up your account</p>
   
               <div className='w-[100%] h-auto'>
              <label htmlFor="">Username :</label>
              <input type="text" name='username' placeholder='Enter username' onChange={hlChange} className='border w-[100%] h-[35px] rounded-[7px] ps-2' required />
              </div>

              <div className='w-[100%] h-auto'>
              <label htmlFor="">Email :</label>
              <input type="email" name='email' placeholder='Enter email' onChange={hlChange} className='border w-[100%] h-[35px] rounded-[7px] ps-2' required />
              </div>


              <div className='w-[100%] h-auto'>
              <label htmlFor="">Password :</label>
              <input type="password" name='password' placeholder='Enter password' onChange={hlChange} className='border w-[100%] h-[35px] rounded-[7px] ps-2' required />
              </div>

              <input type="submit" className='bg-[#128BD0] hover:bg-[#2353A0] w-[100%] cursor-pointer text-[white] h-[40px] rounded-[8px]' />
          
               <span  className='text-[gray]'>Already have an account? <span className='text-[#128BD0] cursor-pointer hover:underline decoration-2' onClick={()=>navigate('/')} >Login</span></span>
            </form>
          </div>
        




   


   
  )
}

export default Signup

