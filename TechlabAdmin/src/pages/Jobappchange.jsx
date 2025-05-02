import React, { useEffect, useRef, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RiCalendarLine, RiMailLine, RiSearchLine, RiTimer2Line, RiUserAddLine, RiUserShared2Line, RiUserUnfollowLine } from '@remixicon/react';

function Jobappchange() {

  const sidebarOpen = useSelector((state) => state.sidebarOpen);

  const { id } = useParams()

  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/Applyjob/${id}`)
      .then((res) => {
        setData(res.data)
      })
  }, [])

  console.log(data)

  const [selectOption, setSelectOption] = useState(null)

  const hlChangeOption = (e) => {
    setSelectOption(e.target.value);

  }


  return (
    <>

      <section className='w-full h-full flex '>
        <Asiderbar />

        <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
          <Header />

          {/* conetent-section */}

          <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

            <section className='w-[90%] xl:w-[95%] h-auto pt-3 flex items-center flex-col' id='content-sec' >

              {/* --------------1------------------ */}
              <div className='w-full text-center h-auto pt-5'>
                <h1 className='text-[24px] font-medium'>Job Application Status</h1>
                <p className='text-[gray] mt-1'>Track application progress</p>
              </div>

              {/* --------------2------------------ */}
              <div className='w-full h-auto text-center mt-[3%]' >
                <p className='text-[14px] text-[gray]'>Change Application Status</p>
                <select name="" id="" onChange={hlChangeOption} className='mt-6 bg-[white] shadow-xl border-[dimgray] w-[280px] h-[40px] rounded-[7px] ps-3'>
                  <option value="Rounds1">New Application</option>
                  <option value="Rounds2">Screening</option>
                  <option value="Rounds3">Interview</option>
                  <option value="Rounds5">Offer</option>
                  <option value="Rounds6">Hired</option>
                  <option value="Rounds4">Reject</option>
                </select>
              </div>


              {/* -----------------3------------------ */}


              <div className='w-[95%] h-auto pt-7 pb-7 bg-[white] rounded-[7px] mt-7 xl:mt-[3%] shadow-xl'>

                {/* -------------job-title-&-time-sec----------- */}

                <div className='w-full h-auto xl:grid xl:grid-cols-3 ps-7 pe-7'>

                  {/* company-name-position */}

                  <div className=''>
                    <h1 className='text-[1.2rem] font-medium text-[#2455A2]'>{data.category}</h1>
                    <h2 className='text-[gray] text-[17px]'>{data.companyname}</h2>
                    <p className='text-[gray] text-[13px]'>{data.jobapplydate}</p>
                  </div>

                  {/* Applyer-name */}

                  <div className='flex justify-center items-center mt-5'>
                    <h1 className='text-[#2455A2] text-[1.3rem]  xl:text-[1.6rem] font-medium' id='jobapplyname'>{data.jobapplyname}</h1>
                  </div >

                  {/* Est-time */}
                  <div className='flex justify-center xl:justify-end mt-5 xl:mt-0'>
                    <span className='bg-[#2455A2] text-[12px] h-[30px] flex justify-center items-center ps-2 pe-2 rounded-[5px] text-[white]'><RiTimer2Line className='me-1' width="20px" /> Est. time : 1 - 2 Weeks</span>
                  </div>

                </div>

                {/* ------------------------ */}

                <div className='text-center mt-10'>
                  <h1 className='text-medium text-[1rem]'>Application Status</h1>
                  <p className='text-[gray] text-[14px]'>Track your progress through the hiring process</p>
                </div>



                {/* -------------Step-Section--------------- */}

                <div className={`h-[auto] xl:h-[9.9rem]  w-[100%] gap-4 sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 ${selectOption === 'Rounds4' ? 'xl:grid xl:grid-cols-4' : 'xl:grid xl:grid-cols-5'}  pt-5`}>


                  {/* --------1-------- */}

                  <div className='flex flex-col justify-center items-center items-center mt-7 xl:mt-0' >

                    <div className={`${selectOption === 'Rounds1' ? 'bg-[#0F172A] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'}  w-[4rem] h-[4rem] shadow-2xl rounded-[100rem] flex justify-center items-center`}   >
                      <RiUserAddLine className='text-[1.5rem] ' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>New</p>
                      <p className='text-[0.8rem] text-[gray]'>Application submitted</p>
                    </div>
                  </div>

                  {/* --------2-------- */}
                  <div className='flex flex-col justify-center items-center mt-7 xl:mt-0'>

                    <div className={`${selectOption === 'Rounds2' ? 'bg-[#FBBF24] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'} w-[4rem] h-[4rem] shadow-2xl rounded-[100rem] flex justify-center items-center`}  >
                      <RiSearchLine className='text-[1.5rem]' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>Screening</p>
                      <p className='text-[0.8rem] text-[gray]'>Resume review</p>
                    </div>
    
                  </div>

                  {/* --------3-------- */}
                  <div className='flex flex-col justify-center items-center mt-7 xl:mt-0'>

                    <div className={`${selectOption === 'Rounds3' ? 'bg-[#60A5FA] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'} w-[4rem] h-[4rem] shadow-2xl  rounded-[100rem] flex justify-center items-center`} >
                      <RiCalendarLine className='text-[1.5rem]' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>Interview</p>
                      <p className='text-[0.8rem] text-[gray]'>Scheduled for interview</p>
                    </div>

                  </div>

                  {/* --------4-------- */}
                  <div className={`${selectOption === 'Rounds4' ? 'block' : 'hidden'} flex flex-col justify-center items-center mt-7 xl:mt-0`}>

                    <div className={`${selectOption === 'Rounds4' ? 'bg-[red] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'} w-[4rem] h-[4rem] shadow-2xl  rounded-[100rem] flex justify-center items-center`}>
                      <RiUserUnfollowLine className='text-[1.5rem]' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>Reject</p>
                      <p className='text-[0.8rem] text-[gray]'>Offer Rejected</p>
                    </div>

                  </div>

                  {/* --------5-------- */}
                  <div className={`${selectOption === 'Rounds4' ? 'hidden' : 'block'} flex flex-col justify-center items-center mt-7 xl:mt-0`}>

                    <div className={`${selectOption === 'Rounds5' ? 'bg-[#34D399] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'} w-[4rem] h-[4rem] shadow-2xl  rounded-[100rem] flex justify-center items-center`} >
                      <RiMailLine className='text-[1.5rem]' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>Offer</p>
                      <p className='text-[0.8rem] text-[gray]'>Offer extended</p>
                    </div>

                  </div>

                  {/* --------6-------- */}
                  <div className={`${selectOption === 'Rounds4' ? 'hidden' : 'block'} flex flex-col justify-center items-center mt-7 xl:mt-0`}>

                    <div className={`${selectOption === 'Rounds6' ? 'bg-[#A855F7] text-[white]' : 'bg-[#e2f1ff] text-[#64748B]'}  w-[4rem] h-[4rem] shadow-2xl rounded-[100rem] flex justify-center items-center`}>
                      <RiUserShared2Line className='text-[1.5rem]' />
                    </div>

                    <div className='w-full text-center pt-3'>
                      <p className='text-[1rem]'>Hire</p>
                      <p className='text-[0.8rem] text-[gray]'>Offer accepted</p>
                    </div>

                  </div>


                </div>
              </div>


              {/* --------------------4-------------------- */}

              <div className='w-[100%] md:w-[100%] xl:w-[45rem] flex flex-col items-center h-auto md:flex md:flex-row md:justify-around md:items-center xl:flex xl:justify-between xl:items-center  mt-[3.5rem] pb-5'>

                <button className='bg-[#2455A2] w-[12rem] xl:w-[20rem] h-[3rem] text-[white]  rounded-[7px] cursor-pointer hover:bg-[#E2F1FF] hover:text-[#64748B]' id='jobappbtn1' >Contact Recruiter</button>
                <button className='mt-5 md:mt-0 bg-[#1091D5] w-[12rem] xl:w-[20rem] h-[3rem] text-[white]  rounded-[7px] cursor-pointer hover:bg-[#E2F1FF] hover:text-[#64748B]' id='jobappbtn1' >Update Application</button>

              </div>

            </section>

          </section>

        </section>

      </section>

    </>
  )
}

export default Jobappchange
