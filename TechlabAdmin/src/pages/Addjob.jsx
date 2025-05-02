import React, { useEffect, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RiArrowLeftLine, RiMailAddFill, RiPhoneFill } from '@remixicon/react';

function Addjob() {

  const sidebarOpen = useSelector((state) => state.sidebarOpen);

  const navigate = useNavigate()

  const {id} = useParams()

  const [addjob, setAddjob] = useState({
    companyname: "",
    position: "",
    category: "",
    type: "",
    novc: "",
    exp: "",
    posteddate: "",
    lastdate: "",
    closedate: "",
    gender: "",
    minsalary: "",
    maxsalary: "",
    jobtag: "",
    language: "",
    city: "",
    state: "",
    country: "",
    edu: "",
    addjobdes: "",
    status: ""
  })

  const hlChange = (e) => {
    const { name, value } = e.target
    setAddjob({ ...addjob, [name]: value })
  }

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/Addjobform/${id}`)
        .then((res) => {
          setAddjob(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const hlSubmit = (h) => {
    h.preventDefault();
    const request = id 
      ? axios.put(`http://localhost:3000/Addjobform/${id}`, addjob) 
      : axios.post("http://localhost:3000/Addjobform", addjob);
    
    request
      .then((res) => {
        console.log(res.data);
        alert("Form Submitted Successfully");
        navigate(`/joblist/${id}`);
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert("All fields not complete");
      });
  };


  const hlClose = () => {
    setAddjob({
      companyname: "",
      position: "",
      category: "",
      type: "",
      novc: "",
      exp: "",
      posteddate: "",
      lastdate: "",
      closedate: "",
      gender: "",
      minsalary: "",
      maxsalary: "",
      jobtag: "",
      language: "",
      city: "",
      state: "",
      country: "",
      edu: "",
      addjobdes: "",
      status: ""
    });
  }

  return (<>

    <section className='w-full h-full flex'>

      <Asiderbar />

      <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
        <Header />

        {/* conetent-section */}
        <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

          <section className='w-[95%] h-auto' id='content-sec' >

            {/* -----------1---------- */}
            <div className='w-[100%] h-[auto] xl:grid xl:grid-cols-2 '>

              <div>
                <h2 className='xl:text-[23px] font-semibold'>New Job</h2>
              </div>

              {/* ------------ */}

              <div className='flex justify-start xl:justify-end items-center gap-5 mt-2 xl:mt-0'>

                <button className='w-[7rem] h-[2.3rem] xl:w-[160px]  xl:h-[40px] text-[white] rounded-[7px] bg-[#128BD0] cursor-pointer flex items-center justify-center gap-2' onClick={() => navigate('/joblist')} ><RiArrowLeftLine className='w-[22px]' /> Job List</button>

                <div className='w-[40px] h-[2.3rem] xl:h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                  <RiMailAddFill className='text-[22px] text-[white]' />
                </div>

                <div className='w-[40px] h-[2.3rem] xl:h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                  <RiPhoneFill className='text-[22px] text-[white]' />
                </div>

              </div>
            </div>

            {/* --------------2---------- */}

            <div className='w-[100%] h-auto mt-5 p-6 flex rounded-[8px]  items-center bg-[white]'>


              <form className="w-[100%] grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit={hlSubmit} >

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">Company Name <span className="text-[#128BD0]">*</span></label>
                  <input type="text" placeholder="Company Name" className="w-full border p-2 rounded" name="companyname" value={addjob.companyname} onChange={hlChange} required autoFocus />
                </div >

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium mb-1">Position <span className="text-[#128BD0]">*</span></label>
                  <input type="text" placeholder="Name" className="w-full border p-2 rounded" name='position' value={addjob.position} onChange={hlChange} required autoFocus />
                </div >

                {/* Job Category */}
                <div>
                  <label className="block text-sm font-medium mb-1">Job Category <span className="text-[#128BD0]">*</span></label>
                  <select name="category" className="w-full border p-2 rounded" onChange={hlChange} id="" required autoFocus>
                    <option>Choose...</option>
                    <option value="Full-Stack Developer">Full-Stack Developer</option>
                    <option value="Front-End Developer">Front-End Developer</option>
                    <option value="Back-End Developer">Back-End Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="WordPress Developer">WordPress Developer</option>
                    <option value="Sopify Developer">Shopify Developer</option>
                  </select>
                </div>

                {/* Job Type */}
                <div>
                  <label className="block text-sm font-medium mb-1">Job Type <span className="text-[#128BD0]">*</span></label>
                  <select name='type' className="w-full border p-2 rounded" onChange={hlChange} required autoFocus>
                    <option>Choose...</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>

                  </select>
                </div>

                {/* No. of Vacancy */}
                <div>
                  <label className="block text-sm font-medium mb-1">No. of Vacancy <span className="text-[#128BD0]">*</span></label>
                  <input type="number" name='novc' value={addjob.novc} placeholder="0" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium mb-1">Select Experience <span className="text-[#128BD0]">*</span></label>
                  <input type="text" placeholder="1 yr" name='exp' value={addjob.exp}  className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* Posted Date */}
                <div>
                  <label className="block text-sm font-medium mb-1">Posted Date <span className="text-[#128BD0]">*</span></label>
                  <input type="date" className="w-full border p-2 rounded" name='posteddate' value={addjob.posteddate} onChange={hlChange} required autoFocus />
                </div>

                {/* Last Date to Apply */}
                <div>
                  <label className="block text-sm font-medium mb-1">Last Date To Apply <span className="text-[#128BD0]">*</span></label>
                  <input type="date" className="w-full border p-2 rounded" name='lastdate' value={addjob.lastdate} onChange={hlChange} required autoFocus />
                </div>

                {/* Close Date */}
                <div>
                  <label className="block text-sm font-medium mb-1">Close Date <span className="text-[#128BD0]">*</span></label>
                  <input type="date" className="w-full border p-2 rounded" name='closedate' value={addjob.closedate} onChange={hlChange} required autoFocus />
                </div>

                {/* Select Gender */}
                <div>
                  <label className="block text-sm font-medium mb-1">Select Gender <span className="text-[#128BD0]">*</span></label>
                  <select name='gender' id='' className="w-full border p-2 rounded" onChange={hlChange} required autoFocus>
                    <option value="" >Choose...</option>
                    <option value="Male" >Male</option>
                    <option value="Female" >Female</option>

                  </select>

                </div>

                {/* Salary From mim*/}
                <div>
                  <label className="block text-sm font-medium mb-1">Salary From</label>
                  <input type="number" name='minsalary' value={addjob.minsalary} placeholder="$" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* Salary To max*/}
                <div>
                  <label className="block text-sm font-medium mb-1">Salary To</label>
                  <input type="number" name='maxsalary' value={addjob.maxsalary} placeholder="$" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* job-tags */}
                <div>
                  <label className="block text-sm font-medium mb-1">Job Tags <span className="text-[#128BD0]">*</span></label>
                  <input type="text" className="w-full border p-2 rounded" name='jobtag' value={addjob.jobtag}  placeholder='Ex. HTML,CSS...' onChange={hlChange} required autoFocus />
                </div>

                {/* laguages */}
                <div>
                  <label className="block text-sm font-medium mb-1">Languages  <span className="text-[#128BD0]">*</span></label>
                  <input type="text" className="w-full border p-2 rounded" name='language' value={addjob.language} placeholder='Languages' onChange={hlChange} required autoFocus />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-1">Enter City <span className="text-[#128BD0]">*</span></label>
                  <input type="text" name='city' value={addjob.city} placeholder="City" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium mb-1">Enter State <span className="text-[#128BD0]">*</span></label>
                  <input type="text" name='state' value={addjob.state} placeholder="State" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium mb-1">Enter Country <span className="text-[#128BD0]">*</span></label>
                  <input type="text" name='country' value={addjob.country} placeholder="Country" className="w-full border p-2 rounded" onChange={hlChange} required autoFocus />
                </div>

                {/* Status */}
                <div>
                  <span className="text-sm font-medium">Status:</span>
                  <select name='status' id='' className="w-full border p-2 rounded" onChange={hlChange} required autoFocus>
                    <option value="" >Choose...</option>
                    <option value="Active">Active</option>
                    <option value="inActive" >inActive</option>

                  </select>
                </div>

                {/* Education Level */}
                <div className='col-span-1 lg:col-span-2'>
                  <label className="block text-sm font-medium mb-1">Enter Education Level <span className="text-[#128BD0]">*</span></label>
                  <textarea className="w-full border p-2 rounded" name='edu' value={addjob.edu} onChange={hlChange} rows="2" placeholder="Enter education level..." required autoFocus></textarea>
                </div>

                {/* Description */}
                <div className="col-span-1 lg:col-span-2">
                  <label className="block text-sm font-medium mb-1">Description <span className="text-[#128BD0]">*</span></label>
                  <textarea className="w-full border p-2 rounded" name='addjobdes' value={addjob.addjobdes} onChange={hlChange} rows="4" placeholder="Enter description..." required autoFocus></textarea>
                </div>



                {/* Buttons */}
                <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-3 justify-end mt-6">
                  <button type="button" onClick={hlClose} className="bg-gray-200 text-black px-4 py-2 rounded cursor-pointer hover:bg-[#cecece]">
                    Close
                  </button>

                  <button type="submit" className="bg-[#128BD0] hover:bg-[#2353A0] cursor-pointer text-white px-4 py-2 rounded" >Submit</button>
                </div>

              </form>


            </div>

          </section>



        </section>


      </section>


    </section>




  </>)
}

export default Addjob


