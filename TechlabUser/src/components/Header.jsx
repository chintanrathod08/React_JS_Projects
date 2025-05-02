import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>   
    <header className='w-full h-[6rem] shadow-xl flex justify-around items-center'>
        
        {/* logo */}
        <div className='w-[10%] h-[100%] flex justify-start items-center'>
            <img src="https://www.techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png" alt="" className='w-[93px]' />
        </div>
        
       {/* -------- nav-bar ----------- */}
        <nav className='w-[45%] h-[100%]'>
            
            <ul className='w-[100%] h-[100%] flex justify-evenly items-center'>
            
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/findjobs'>Find Jobs</Link></li>
                
            
            </ul>
        
        </nav>
        
        {/* ----- login --------- */}
        <div className='w-[15%] h-[100%]  flex justify-center items-center'>
            <button>Login</button>
        </div>
    
    </header>
    </>
  )
}

export default Header
