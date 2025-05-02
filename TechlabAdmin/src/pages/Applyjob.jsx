import React, { useEffect, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { RiCloseCircleLine } from '@remixicon/react';


function Applyjob() {

    const sidebarOpen = useSelector((state) => state.sidebarOpen);

    const { id } = useParams()
    const navigate = useNavigate()

    const now = new Date(Date.now());
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    const [prevData, setPrevData] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3000/Applyjob`)
            .then((res) => {
                let [data] = res.data.filter((e)=>{
                    return e.id == id
                })
                setPrevData(data)
            })
    }, [])

    const [applyjob, setApplyjob] = useState({
        jobapplyname: "",
        jobapplyemail: "",
        jobapplynumber: "",
        jobapplydes: "",
        resume: "",
    })

    const hlChange = (e) => {
        const { name, value } = e.target
        setApplyjob({...prevData, ...applyjob, jobapplydate: formattedDate, [name]: value })
    }

      const hlDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this form?")){
            axios.delete(`http://localhost:3000/Applyjob/${id}`)
            navigate('/joblist')    
        }
        
    }

    const hlSubmit = (s) => {
        s.preventDefault()

        axios.patch(`http://localhost:3000/Applyjob/${id}`, applyjob)
            .then((Res) => {
                console.log(Res.data);
                alert("Your Job Application Form Submited Successfully")
                navigate(`/jobapplication`)
            })
            .catch((Err) => {
                console.log(Err);
                alert("All fields not complete")
            })
    }

    

   

    return (<>
        {/* mainsection */}
        <section className='w-full h-full flex'>
            <Asiderbar />

            <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
                <Header />

                {/* ------------- Content-Section --------------    */}
                <section className='w-[100%] h-[89vh] bg-[#F5F5F5] flex justify-center   rounded-tl-[8px]'>

                    <section className='w-[95%]  xl:pt-5 xl:pb-5 h-[100%]  h-auto flex justify-center items-center' id='content-sec' >

                        <form action="" className='ps-5 pe-10 w-[100%] xl:w-[40%] h-auto relative  bg-[white] flex flex-col justify-center items-center gap-3 xl:pt-10 xl:pb-10  xl:ps-10 xl:pe-10 rounded-[10px]' id='applyform' onSubmit={hlSubmit} >

                            {/* <i class="ri-close-circle-line absolute right-7 top-5 text-[1.5rem] text-[#128BD0] cursor-pointer" onClick={() => navigate('/joblist')} style={{ "text-shadow": "1px 0px 2px 8e8e8e" }} ></i> */}
                            <RiCloseCircleLine className='absolute right-7 top-5 text-[1.5rem] text-[#128BD0] cursor-pointer' onClick={() => navigate('/joblist')} style={{ "text-shadow": "1px 0px 2px 8e8e8e" }} />

                            <img src="https://techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png" alt=""
                                className='w-[4rem]'
                            />


                            <h1 className='font-medium text-center mt-2'>Apply Job</h1>
                            <hr className='border w-[100%] border-[gray] border-dashed' />

                            <div className='w-[100%] h-auto'>
                                <label htmlFor="" className='text-[14px]' >Name :</label>
                                <input type="text" name='jobapplyname' value={applyjob.jobapplyname} placeholder='Enter username' required className='border border-[gray] w-[100%] h-[35px] rounded-[7px] ps-2 text-[13px]' onChange={hlChange} />
                            </div>


                            <div className='w-[100%] h-auto'>
                                <label htmlFor="" className='text-[14px]' >Email :</label>
                                <input type="email" name='jobapplyemail' value={applyjob.jobapplyemail} placeholder='Enter email' required className='border border-[gray] w-[100%] h-[35px] rounded-[7px] ps-2 text-[13px]' onChange={hlChange} />
                            </div>


                            <div className='w-[100%] h-auto'>
                                <label htmlFor="" className='text-[14px]' >Contact Number :</label>
                                <input type="number" name='jobapplynumber' value={applyjob.jobapplynumber} placeholder='Enter Contact Number' required className='border border-[gray] w-[100%] h-[35px] rounded-[7px] ps-2 text-[13px]' onChange={hlChange} />
                            </div>

                            <div className='w-[100%] h-auto'>
                                <label htmlFor="" className='text-[14px]' >Description :</label>
                                <textarea name="jobapplydes" value={applyjob.jobapplydes} placeholder='Des....' required className='border border-[gray] w-[100%] h-[55px] rounded-[7px] ps-2 pt-2 text-[14px]' onChange={hlChange}></textarea>
                            </div>

                            <div className='w-[100%] h-auto'>
                                <label htmlFor="" className='text-[14px]' >Upload Resume :</label>
                                <input type="file" value={applyjob.resume} name='resume' placeholder='No file chosen' required className='border border-[gray] w-[100%] h-[35px] rounded-[7px] ps-2 pt-1 text-[gray] text-[13px]' onChange={hlChange} />
                            </div>

                            <div className='w-[100%] h-auto mt-2 flex'>
                                <input type="submit" value="Apply Now" className='bg-[#128BD0] hover:bg-[#2353A0] w-[130px] text-[14px] text-[white] shadow-2xl h-[37px] cursor-pointer rounded-[6px]' />
                                <input type="button" value="close" onClick={() => hlDelete(`${id}`)} className='ms-5 bg-[#2353A0] hover:bg-[#128BD0]  w-[130px] text-[14px] text-[white] shadow-2xl h-[37px] cursor-pointer rounded-[6px]' />

                            </div>

                        </form>

                    </section>

                </section>

            </section>

        </section>
    </>)
}

export default Applyjob