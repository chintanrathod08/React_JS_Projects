import React, { useEffect, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { RiArrowLeftLine, RiBriefcase4Fill, RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiMailAddFill, RiMapPinFill, RiPhoneFill, RiRadioButtonFill, RiShareLine } from '@remixicon/react';
import { v4 } from 'uuid';

function Jobdetails() {

    const sidebarOpen = useSelector((state) => state.sidebarOpen);

    const navigate = useNavigate()

    const [jobview, setJobview] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/Addjobform/${id}`)
            .then((Res) => {
                setJobview({ ...Res.data, id: v4() });
            })
            .catch((Err) => {
                console.log(Err);
            });
    }, [id]);

    const hlApply = () => {
        axios.post(`http://localhost:3000/Applyjob`, jobview)
            .then((Res) => {
                console.log(Res.data);
                navigate(`/applyjob/${jobview.id}`);
            })
    };


    return (<>
        {/* mainsection */}

        <section className='w-full h-full flex'>
            <Asiderbar />

            <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
                <Header />

                {/*---- Conent-Section -----*/}
                <section className='w-[100%] h-[89vh] bg-[#F5F5F5] flex justify-center  pt-5 pb-5 rounded-tl-[8px]'>

                    <section className='w-[90%] xl:w-[95%] h-auto' id='content-sec' >

                        {/* -----------1---------- */}
                        <div className='w-[100%] h-[auto] xl:grid xl:grid-cols-2 '>

                            <div>
                                <h2 className='xl:text-[23px] font-semibold'>Job View</h2>
                            </div>


                            {/* -------------------- */}
                            <div className='flex justify-start   xl:justify-end items-center gap-5 mt-2 xl:mt-0'>

                                <button className='w-[160px] h-[40px] text-[white] rounded-[7px] bg-[#128BD0] cursor-pointer flex items-center justify-center gap-2' onClick={() => navigate('/joblist')} ><RiArrowLeftLine className='w-[22px]' /> Job List</button>

                                <div className='w-[40px] h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                                    <RiMailAddFill className='text-[22px] text-[white]' />
                                </div>

                                <div className='w-[40px] h-[40px] rounded-[5px] flex justify-center items-center bg-[#1090d4]'>
                                    <RiPhoneFill className='text-[22px] text-[white]' />
                                </div>


                            </div>

                        </div>

                        {/* ----------------2-------------- */}

                        <div className='w-[100%] h-[100%]  mt-5 xl:grid xl:grid-cols-3 gap-7'>


                            {/* ---------------Left-section----------------- */}

                            <div className='rounded-[7px] bg-[white] shadow-xl p-5'>

                                <div className='w-[100%] h-auto'>
                                    <p className='font-medium text-[20px]'>Overview</p>
                                </div>

                                {/*-------------- Left-sec-table---------------- */}
                                <table className='w-[100%] mt-[5%]'>
                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]'>
                                        <td className='ps-2' >Job Title :</td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.position}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]' >
                                        <td className='ps-2'>Experience : </td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.exp}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]'>
                                        <td className='ps-2'>Vacancy : </td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.novc}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]'>
                                        <td className='ps-2'>Job Type :</td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.type}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]' >
                                        <td className='ps-2'>Posted Date :</td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.posteddate}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]'>
                                        <td className='ps-2'>Last Date :</td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.lastdate}</td>
                                    </tr>

                                    <tr className='h-[50px] border-b border-dashed border-2-[gray]'>
                                        <td className='ps-2'>Closed Apply Date :</td>
                                        <td className='text-[gray] text-end md:text-start' >{jobview.closedate}</td>
                                    </tr>



                                </table>

                                <div className='w-full  flex justify-between h-auto mt-5'>
                                    {/* <button className='shadow-xl w-[40%] h-[40px] rounded-[7px] bg-[#145650] text-[14px] text-[white] cursor-pointer' onClick={()=>navigate('/applyjob') } ><i class="ri-check-fill"></i> Apply Now</button> */}
                                    <button className='shadow-xl w-[150px] h-[40px] rounded-[7px] bg-[#128BD0] text-[white] cursor-pointer flex justify-center items-center'><RiPhoneFill width='20px' className='me-2 ' /> Contact Now</button>
                                </div>

                            </div>


                            {/* ------------Right-section-------------- */}


                            <div className='col-span-2 rounded-[7px] bg-[white] shadow-xl flex justify-center mt-10 xl:mt-0'>

                                <div className='w-[93%] pt-5'>

                                    {/* -------------------1---------------- */}
                                    <div className='border-b border-dashed border-2-[gray] pb-2'>
                                        <h1 className='text-[#2455A2] font-semibold text-[22px]'>{jobview.category}</h1>

                                        <div className='mt-2 flex'>
                                            <span className='text-[gray] flex gap-1'><RiBriefcase4Fill className='text-[#2455A2]' width="19px" /> {jobview.companyname} </span>
                                            <span className='ms-5 text-[gray] flex gap-1'><RiMapPinFill className='text-[#2455A2]' width="19px" />{jobview.city}, {jobview.state}</span></div>
                                    </div>

                                    {/* -----------------2-------------------- */}
                                    <div className='w-[100%] h-auto mt-[2%] border-b border-dashed border-2-[gray] pb-3'>
                                        <h1 className='font-medium'>Description :</h1>
                                        <p className='mt-2 text-[14px] text-[gray] flex items-center'><RiRadioButtonFill className='text-[#2455A2] me-2' width={"19px"} /> {jobview.addjobdes}</p>
                                    </div>


                                    {/* -----------------3-------------------- */}
                                    <div className='w-[100%] h-auto mt-[3%] pb-3'>

                                        <h1 className='font-medium'>Job Details :</h1>

                                        {/* --------------------------- */}

                                        <div className='w-[100%] h-[auto] grid grid-cols-1 md:grid md:grid-cols-2 xl:grid xl:grid-cols-2 gap-10 mt-[1%]'>


                                            {/* -------table-1----------- */}

                                            <table className='w-[100%]'>

                                                <tr className='h-[45px] border-b border-dashed border-2-[gray]'>
                                                    <td className='ps-2 text-[14px]' >Job Role :</td>
                                                    <td className='text-[gray] text-[14px] text-end  lg:text-start' >{jobview.position}</td>
                                                </tr>

                                                <tr className='h-[45px] border-b border-dashed border-2-[gray]' >
                                                    <td className='ps-2 text-[14px]' >Role : </td>
                                                    <td className='text-[gray] text-[14px] text-end  lg:text-start' >{jobview.category}</td>
                                                </tr>

                                                <tr className='h-[45px] border-b border-dashed border-2-[gray]'>
                                                    <td className='ps-2 text-[14px]' >Min Salary : </td>
                                                    <td className='text-[gray] text-[14px] text-end  lg:text-start' >{jobview.minsalary}</td>
                                                </tr>

                                                <tr className='h-[45px] border-b border-dashed border-2-[gray]'>
                                                    <td className='ps-2 text-[14px]' >Max Salary :</td>
                                                    <td className='text-[gray] text-[14px] text-end  lg:text-start' >{jobview.maxsalary}</td>
                                                </tr>

                                                <tr className='h-[45px] border-b border-dashed border-2-[gray]' >
                                                    <td className='ps-2 text-[14px]' >Job Tags :</td>
                                                    <td className='text-[gray] text-[14px] overflow-x-auto text-end lg:text-start' >{jobview.jobtag}</td>
                                                </tr>

                                            </table>


                                            {/* -------table-2----------- */}
                                            <table className='w-[100%] '>
                                                <tr className='h-[40px] border-b border-dashed border-2-[gray]'>
                                                    <td className='text-[14px] ps-2' >Job Experience :</td>
                                                    <td className='text-[gray] pe-2 text-[14px] text-end lg:text-start' >{jobview.exp}</td>
                                                </tr>

                                                <tr className='h-[40px] border-b border-dashed border-2-[gray]' >
                                                    <td className='text-[14px] ps-2'>Languages :</td>
                                                    <td className='text-[gray] pe-2 text-[14px] text-end lg:text-start' >{jobview.language}</td>
                                                </tr>

                                                <tr className='h-[40px] border-b border-dashed border-2-[gray]'>
                                                    <td className='text-[14px] ps-2'>Locality :</td>
                                                    <td className='text-[gray] pe-2 text-[14px] text-end lg:text-start' >{jobview.country}</td>
                                                </tr>

                                                <tr className='h-[40px] border-b border-dashed border-2-[gray]'>
                                                    <td className='text-[14px] ps-2'>Eligibility :</td>
                                                    <td className='text-[gray] pe-2 text-[14px] text-end lg:text-start' >{jobview.edu}</td>
                                                </tr>

                                            </table>



                                        </div>

                                        {/* -------------------------------*/}
                                        <div className='w-[100%] h-auto mt-10 flex'>
                                            <button className='w-[120px] text-[15px] bg-[#2455A2] shadow-2xl text-[white] h-[35px] rounded-[7px] cursor-pointer flex justify-center items-center' onClick={hlApply} ><RiCheckboxCircleLine width='19px' className='me-2' /> Apply</button>
                                            <button className='w-[120px] text-[15px] bg-[#128BD0] shadow-2xl text-[white] h-[35px] rounded-[7px] ms-5 cursor-pointer flex justify-center items-center' ><RiShareLine width='19px' className='me-2' /> Share Job</button>
                                        </div>

                                    </div>


                                </div>

                            </div>




                        </div>


                    </section>

                </section>

            </section>

        </section>



    </>)
}

export default Jobdetails
