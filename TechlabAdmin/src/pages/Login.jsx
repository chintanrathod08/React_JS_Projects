import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  
  const navigate = useNavigate()
    
    const[login,setLogin] = useState({
        email : "",
        password : ""
      })
      
      const hlChange=(e)=>{
        const{name,value} = e.target
        setLogin({...login,[name] : value})
        console.log(login); 
      }
    
      const hlSubmit=(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/loginuser?email=${login.email}`)
        .then((Res)=>{return Res.json()})
        .then((res)=>{
          console.log(res);
          if(res.length > 0){
            if(res[0].password == login.password){
              localStorage.setItem("isLogin",true)  
              navigate('/joblist')
            }else{
              alert("Wrong Password")
            }
          }else{
            alert("User not register")
          }
        })
        .catch((Err)=>{
          console.log(Err);
        })
      }
    
    return (


    // Mainconetent-Section
   
    <div className='w-[100%]  h-[100vh]  bg-[#F5F5F5] flex justify-center items-center' >
           
            <form action="" onSubmit={hlSubmit} className='flex bg-[white] flex-col items-center justify-center gap-7 p-10 rounded-[10px] shadow-2xl' >

              
            <img src="https://www.techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png" alt="" 
                className='w-[6rem]'
              />
              
              <p className='font-medium text-[19px]'>Login your account</p>
   
               
               
              <div className='w-[100%] h-auto'>
              <label htmlFor="">Email :</label>
              <input type="email" name='email' placeholder='Enter email' onChange={hlChange} className='border w-[100%] h-[35px] rounded-[7px] ps-2' required />
              </div>


              <div className='w-[100%] h-auto'>
              <label htmlFor="">Password :</label>
              <input type="password" name='password' placeholder='Enter password' onChange={hlChange} className='border w-[100%] h-[35px] rounded-[7px] ps-2' required/>
               <p className='text-[#1090D4] cursor-pointer hover:underline decoration-2 mt-1'>Forgot Password?</p>
              </div>

              <input type="submit" className='bg-[#128BD0] hover:bg-[#2353A0] w-[100%] text-[white] h-[40px] rounded-[8px]' />
          
               <span  className='text-[gray]'>Don't have an account? <span className='text-[#128BD0] cursor-pointer hover:underline decoration-2' onClick={()=>navigate('/signup')} >Sign Up</span></span>
            </form>
        
          </div>

  )
}

export default Login
