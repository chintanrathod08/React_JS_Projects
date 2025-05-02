import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Asiderbar from "../components/Asiderbar"
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RiAddFill, RiDeleteBin6Fill, RiEdit2Fill, RiEyeFill, RiMailAddFill, RiPhoneFill } from '@remixicon/react'


function Joblist() {

  const sidebarOpen = useSelector((state) => state.sidebarOpen);

  const navigate = useNavigate()

  const [joblist, setJoblist] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/Addjobform")
      .then((res) =>{
        setJoblist(res.data)
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error fetching jobs", err)
      })
  },[])

  const Delete = (iddelete) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      axios.delete(`http://localhost:3000/Addjobform/${iddelete}`)
        .then((res) => {
          setJoblist(res => res.filter(joblist  => joblist.id !== iddelete));
          console.log("Job deleted successfully:", res.data);
        })
        .catch(err => {
          console.log("Error deleting job:", err);
        });
    }
  };

  return (
    <>

      {/* // Mainconetent-Section */}
      <section className='w-full h-full flex'>
        <Asiderbar />

        <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
          <Header />

          {/*---- Conent-Section -----*/}

          <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

            <section className='w-[90%] md:w-[95%] h-auto' id='content-sec' >

              {/* -----------1---------- */}
              <div className='w-[100%] h-[auto] xl:grid xl:grid-cols-2'>

                <div>
                  <h2 className='xl:text-[23px] font-semibold'>Job List</h2>
                </div>


                {/* -------------------- */}
                <div className='flex justify-start xl:justify-end items-center gap-5 mt-2 xl:mt-0'>

                  <button className='w-[8.5rem] h-[2.3rem] text-[14px] xl:text-[16px] xl:w-[160px] h-[40px] text-[white] rounded-[7px] bg-[#1090d4] cursor-pointer flex justify-center items-center' onClick={() => navigate('/addjob')} ><RiAddFill className='w-[22px] me-1' /> Add New Job</button>

                  <div className='w-[40px] h-[2.3rem] xl:h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                    <RiMailAddFill className='text-[22px] text-[white]' />
                  </div>

                  <div className='w-[40px] h-[2.3rem] xl:h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                    <RiPhoneFill className='text-[22px] text-[white]' />
                  </div>

                </div>
              </div>

              {/* --------------2---------- */}
              <table className="w-[250%] md:w-[130%] xl:w-full  rounded-[7px] bg-[white] mt-5"  >
                <thead className='w-[250%]'>
                  <tr className='h-[50px] bg-[#2453A0] text-[white] border-b border-[gray] font-semiblod'>
                    <th className='ps-2'>No</th>
                    <th>Position</th>
                    <th>Posted Date</th>
                    <th>Last Date To Apply</th>
                    <th>Close Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='overflow-x-auto'>

                  {joblist.length > 0 ? (
                    joblist.map((e, index) => (
                      <tr key={e.id || index} className='border-b border-dashed border-[gray] bg-[#E2F1FF] h-[60px] text-[gray]' >
                        <td className='text-center overflow-x-auto'> {index + 1}</td>
                        <td className='text-center overflow-x-auto'>{e.position}</td>
                        <td className='text-center overflow-x-auto'>{e.posteddate}</td>
                        <td className='text-center overflow-x-auto'>{e.lastdate}</td>
                        <td className='text-center overflow-x-auto'>{e.closedate}</td>
                        <td className='text-center pe-2'>{e.status}</td>
                        <td className='h-[60px] text-center overflow-x-auto flex justify-center items-center pe-2'>
                          <RiEdit2Fill
                            className='me-3 text-[#145650] bg-[#DCE6E5] w-[2rem] h-[2rem] rounded-[100px] p-2 hover:bg-[#145650] hover:text-[white] cursor-pointer'
                            onClick={() => navigate(`/addjob/${e.id}`)}
                          />
                          <RiEyeFill className='me-3 text-[#2ADB7B] bg-[#E9FBF2] w-[2rem] h-[2rem] rounded-[100px] p-2 hover:bg-[#2ADB7B] hover:text-[white] cursor-pointer' onClick={() => navigate(`/jobdetails/${e.id}`)} />
                          <RiDeleteBin6Fill className='text-[#F72B50] bg-[#FEDFE5] w-[2rem] h-[2rem] rounded-[100px] p-2 hover:bg-[#F72B50] hover:text-[white] cursor-pointer' onClick={() => Delete(e.id)} />
                        </td>
                      </tr>))
                  ) : (
                    <tr colSpan='7' className='text-center' >No jobs found.</tr>
                  )}

                </tbody>
              </table>



            </section>
          </section>


        </section>


      </section>


    </>
  )
}

export default Joblist
