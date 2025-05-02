import React from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'

function Profile() {
  return (
    <div className='w-[100%] h-[100vh]'>
        <Asiderbar/>
      <div className='w-[100%] h-[89vh] bg-[#F5F5F5]'>
            <Header/>

            <div className='w-[100%] h-[100%] border overflow-auto border ' >

            </div>
    
      </div>
    
    </div>
  )
}

export default Profile
