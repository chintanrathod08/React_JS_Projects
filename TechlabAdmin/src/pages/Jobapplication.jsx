import React, { useEffect, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { RiDeleteBin6Fill, RiEyeFill } from '@remixicon/react';
import ErrorBoundary from '../components/ErrorBoundary';

function Jobapplication() {

    const sidebarOpen = useSelector((state) => state.sidebarOpen);

    const navigate = useNavigate()

    const [jobapp, setJobapp] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:3000/Applyjob`)
            .then((Res) => {
                // console.log(Res.data);
                let job = Res.data.filter((e) => {
                    return e.jobapplyname
                })
                console.log(job);
                setJobapp(job)
            })
            .catch((Err) => {
                console.log("Error featching jobs", Err);
            })
    }, [])

    const Delete = (JobAppDl) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            axios.delete(`http://localhost:3000/Applyjob/${JobAppDl}`)
                .then((Res) => {
                    setJobapp(Res => Res.filter(jobapp => jobapp.id !== JobAppDl));
                    console.log(Res.data);
                })
                .catch((Err) => {
                    console.log(Err);
                });
        }
    }


    return (<>

        <ErrorBoundary>
            <section className='w-full h-full flex'>
                <Asiderbar />

                <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
                    <Header />


                    {/* conetent-section */}

                    <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

                        <section className='w-[95%] h-auto' id='content-sec' >


                            {/* -----------1---------- */}

                            <div className='w-[100%] h-[auto]'>

                                <div className='flex justify-between items-center'>
                                    <h2 className='xl:text-[23px] font-semibold'>Job Application</h2>
                                </div>

                            </div>

                            {/* --------------table-1-------- */}

                            <div className='w-[330%] sm:w-[210%] md:w-[180%] lg:w-[140%] xl:w-full hauto mt-5'>

                                {jobapp.length === 0 ? <p className='text-center'>No Job Application Here</p> : [...new Set(jobapp.map(app => app.category))].map(category => (
                                    <div key={category} className='rounded-[7px] bg-[white] overflow-x-auto mt-7 shadow-lg' >
                                        <h1 className="text-xl font-medium mt-5 mb-3 ms-2">{category}</h1>

                                        <table className="w-[100%]  rounded-[7px] bg-[white] mb-5 overflow-auto">
                                            <thead >
                                                <tr className='h-[50px] bg-[#2453A0] text-white border-[gray] font-semiblod'>
                                                    <th className='ps-2'>No</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Description</th>
                                                    <th>Resume</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className='h-[3.5rem]'>
                                                {jobapp.filter(app => app.category === category).map((e, index) => (
                                                    <tr key={e.id || index} className='border-b border-dashed bg-[#E2F1FF] border-[gray] text-[gray] text-[14px]'>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td className='text-center'>{e.jobapplyname}</td>
                                                        <td className='text-center'>{e.jobapplyemail}</td>
                                                        <td className='text-center'>{e.jobapplynumber}</td>
                                                        <td className='text-center'>{e.jobapplydes}</td>
                                                        <td className='text-center'>{e.resume}</td>
                                                        <td className='text-center'>{e.status}</td>
                                                        <td className='text-center h-[60px] text-center overflow-x-auto flex justify-center items-center pe-2'>
                                                            <RiEyeFill className='me-3 text-[#2ADB7B] bg-[#E9FBF2] w-[2rem] h-[2rem] rounded-[100px] p-2 hover:bg-[#2ADB7B] hover:text-[white] cursor-pointer' onClick={() => navigate(`/Jobappchange/${e.id}`)} />
                                                            <RiDeleteBin6Fill className='text-[#F72B50] bg-[#FEDFE5] w-[2rem] h-[2rem] rounded-[100px] p-2 hover:bg-[#F72B50] hover:text-[white] cursor-pointer' onClick={() => Delete(e.id)} />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ))}

                            </div>

                            {/* -------------- */}

                        </section>

                    </section>

                </section>

            </section>

        </ErrorBoundary>

    </>)
}

export default Jobapplication