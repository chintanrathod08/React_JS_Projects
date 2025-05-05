import React, { useEffect, useState } from 'react'
import Asiderbar from '../components/Asiderbar'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { PieChart } from '@mui/x-charts/PieChart';
import CountUp from 'react-countup';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';
import { RiCalendar2Line } from '@remixicon/react';



function Dashboard() {

    const sidebarOpen = useSelector((state) => state.sidebarOpen);

    const data = [
        { id: 1, value: 20, label: 'Slice 1' },
        { id: 2, value: 30, label: 'Slice 2' },
        { id: 3, value: 50, label: 'Slice 3' },
    ];
    const series = [{ data }];

    const colorPalette = ['#3498db', '#e74c3c', '#2ecc71'];

    const [dashdata, setDashdata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/Addjobform")
            .then((Res) => {
                setDashdata(Res.data)
                console.log(Res.data);
            })
            .catch((Err) => {
                console.log(Err);
            })
    }, [])

    return (
        <>
            {/* MainConetent-Section */}
            <section className='w-full h-full flex'>
                <Asiderbar />

                <section className={`${sidebarOpen ? 'w-[84%] h-[100vh]  duration-300 transition-all' : 'w-[100%] h-[100vh]'}`}>
                    <Header />

                    {/*---- Conent-Section -----*/}
                    <section className='w-[100%] h-[89vh]  bg-[#F5F5F5] flex justify-center pt-5 pb-5 rounded-tl-[8px]'>

                        <section className='w-[90%] md:w-[95%] h-auto' id='content-sec' >


                            {/* ---------------section-1----------------- */}


                            <section className='w-full h-auto  flex flex-col lg:flex lg:flex-row lg:justify-between'>

                                {/* --------------------- */}

                                <div className='lg:w-[500px] xl:w-[45%] h-[auto]  md:h-[240px] p-4 shadow-lg rounded-[8px] bg-[white] xl:grid xl:grid-cols-2 grid grid-cols-1 md:grid md:grid-cols-2'>

                                          {/*------ counter-1--------*/}
                                    <div className='xl:w-[100%] md:border-b border-[gray] flex justify-around items-center'>

                                        <div>
                                            <CountUp className='font-bold'
                                                start={0}
                                                end={500}
                                                duration={2.5}
                                                separator=","
                                                decimals={2}
                                                prefix=""

                                                onStart={() => console.log('Count started!')}
                                                onEnd={() => console.log('Count ended!')}
                                            />
                                            <p className='text-[13px] text-[gray]'>Interview Schedules</p>
                                        </div>

                                        <img src="https://media-hosting.imagekit.io/d4e572c065ec4190/download%20(3).svg?Expires=1841044374&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h83Ct38pZwVpDC1XYJve~mjDzxul2HY0YvM5XOnvbSM~57CkuEs-2czVecJ~iWQn0qsfxX8v8Z6pZi5w-lnCtXGHgWcMVNCpPWDR1sz~q882M9iWqZyUkUwdyO8tvHYz~agOcSJBgUtd545XDih2aNfQxxkU8dj8~4DHjFZT42JzufDDjumcVoOMwa7Mgzr2NNEGqLOYkbMF5r54eL5FqxlacpL-x6CCMPSQsoPisiKmJ79ocermrMtk4frZGg7TIRId5zqR2UtqsTSyssuDrkj6Xpl9K03YtHepsDNB7K3-4jVesteyMsCeilyi2ORzu3OLiOenx9U2nWN016ebkw__" alt="" />
                                    </div>


                                          {/*------ counter-2--------*/}

                                    <div className='mt-5 md:mt-0 md:border-l md:border-b border-[gray] border-[gray] flex justify-around items-center'>
                                        <div>
                                            <CountUp className='font-bold'
                                                start={0}
                                                end={300}
                                                duration={2.5}
                                                separator=","
                                                decimals={2}
                                                prefix=""

                                                onStart={() => console.log('Count started!')}
                                                onEnd={() => console.log('Count ended!')}
                                            />
                                            <p className='text-[13px] text-[gray]'>Application Sent</p>

                                        </div>
                                        <img src="https://media-hosting.imagekit.io/a94e56582aa34367/download%20(2).svg?Expires=1841044363&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YBggpVg9bszvjZjhMeOYnziBkJ~aIO-wjA-gKqV-ykTC2fWjdTw-BxP4Nqaab9QwZwAp-8IiWB~Y14hMAmgldzDR66QmAKW02-d7iyjXU4hEhve9eMF7KSQMKP3Rne90bMSNUYLgo64MPhkI-BnDL4aQ5FWGhfA~0tvYD3LXAc6PVW5RYOlx4BUx7BxpJxN~zFcFz9aIjcFCIYbxVAyzSHNT7zNQCqFZTG8WLgARXnRsPxTkM2z~lv~txPGucta9-NDkkgnCw3~LgwmMV0lyqIhfmlnUmZEYCj1p-i-nhOXf12Y82~qzvPNLSwhUfAQM0YwW0csHrTMdrQQiiKCsvA__" alt="" />
                                    </div>

                                          {/*------ counter-3--------*/}

                                    <div className='mt-5 md:mt-0 flex justify-around items-center'>
                                        <div>
                                            <CountUp className='font-bold'
                                                start={0}
                                                end={200}
                                                duration={2.5}
                                                separator=","
                                                decimals={2}
                                                prefix=""

                                                onStart={() => console.log('Count started!')}
                                                onEnd={() => console.log('Count ended!')}
                                            />
                                            <p className='text-[13px] text-[gray]'>Profile Viewed</p>
                                        </div>
                                        <img src="https://media-hosting.imagekit.io/0cc0044155274d70/download%20(1).svg?Expires=1841044353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nSxJa9Xz2AwDxGnNe2JP2QfHDgH6yAqemYwz8jzdyzXAWxo1r7Fb-JsUV8~TUecpFcyJ7EUHrvRjX312xWpHRtT0JbCpp47o1lZtLi4ra2uEA00RwDpuok9YjKlUUvhHF2~LP~ogdqgfTVWDydMVorlITs2EHbK6E0KpUNebavJyEE8mYk-032aJcF-x1Q9XfGBHLzcjUtLcYa5~-9QXuroUvcCPRdrP3ewvufM0aHTdhw20M59OU3s71ph1wjTMYOXbm~bYAeYkLxwzgeL07V7O~VliUUBv0zxM18VAxdcNKueUNs-OWSnbusCDIdtV8YLIH61WRIpbJ7v2AYTFIw__" alt="" />
                                    </div>


                                {/*------ counter-4--------*/}

                                <div className='mt-5 md:mt-0 md:border-l md:border-[gray] flex justify-around items-center'>
                                        <div>
                                            <CountUp className='font-bold'
                                                start={0}
                                                end={100}
                                                duration={2.5}
                                                decimals={2}
                                                prefix=""
                                                onStart={() => console.log('Count started!')}
                                                onEnd={() => console.log('Count ended!')}
                                            />
                                            <p className='text-[13px] text-[gray]'>Unread Messages</p>
                                        </div>
                                        <img src="https://media-hosting.imagekit.io/d4e572c065ec4190/download%20(3).svg?Expires=1841044374&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=h83Ct38pZwVpDC1XYJve~mjDzxul2HY0YvM5XOnvbSM~57CkuEs-2czVecJ~iWQn0qsfxX8v8Z6pZi5w-lnCtXGHgWcMVNCpPWDR1sz~q882M9iWqZyUkUwdyO8tvHYz~agOcSJBgUtd545XDih2aNfQxxkU8dj8~4DHjFZT42JzufDDjumcVoOMwa7Mgzr2NNEGqLOYkbMF5r54eL5FqxlacpL-x6CCMPSQsoPisiKmJ79ocermrMtk4frZGg7TIRId5zqR2UtqsTSyssuDrkj6Xpl9K03YtHepsDNB7K3-4jVesteyMsCeilyi2ORzu3OLiOenx9U2nWN016ebkw__" alt="" />
                                    </div>

                                </div>

                                {/* ----------Pie-chart----------- */}


                                <div className='mt-8 lg:mt-0  lg:w-[45%] xl:w-[53%] h-auto md:h-[180px] md:h-[240px]  xl:mt-0 shadow-lg  rounded-[8px] bg-[white]  md:flex md:items-center md:justify-around'>


                                    <div className='md:w-[40%]  h-[100%] mt-5  ps-5 md:mt-0 md:ps-0  flex flex-col items-center justify-center'>
                                    <h1>Skills :</h1>
                                    <progress id='pro' value={0.15} className='w-full mt-3'></progress> <br />
                                    <progress id='pro' value={0.35} className='w-full'></progress> <br />
                                    <progress id='pro' value={0.50} className='w-full'></progress> 
                                    </div>

                                    {/* ---------- */}
                                    
                                    <div className='md:w-[40%] mt-5 md:mt-0 md:h-[100%]  flex justify-center items-center'>
                                    <PieChart
                                        series={series}
                                        colorPalette={colorPalette}
                                        xl:height={300}
                                        height={180}
                                    />
                                    </div>
                                
                                </div>

                                 </section>

                            {/* ---------------section-2--------------- */}

                            <section className='mt-5 h-[auto]  xl:flex xl:justify-between xl:items-center '>

                                {/* -------------chart------------ */}
                                <div className='rounded-[8px] xl:w-[45%] 2xl:w-[45%] h-auto bg-[white] shadow-lg pt-2 pb-2 pe-2'>
                                    <p className='ms-10 text-[19px] font-medium'>Vacancy Status :</p>
                                    <LineChart className='mt-2'
                                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                        series={[
                                            {
                                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                            },
                                        ]}
                                        height={300}
                                    />
                                </div>

                                {/* ----------------------------- */}

                                <div className='bg-[white] shadow-lg rounded-[8px] mt-8 xl:mt-0 w-[100%] xl:w-[53%] 2xl:w-[53%]  h-[350px] flex flex-col items-center pt-2 pb-2 overflow-x-auto'>
                                    <div className='w-[95%] pt-10 '>
                                        <p className='font-medium text-[20px]'>Available Jobs For You :</p>
                                    </div>

                                    {/* ---------------- */}

                                    <div className='h-[auto] flex justify-start items-center  gap-2 mt-3 ps-[10rem]' >

                                        {dashdata.map((e) => (
                                            <div key={e.id} className='h-[auto] w-[15rem]  border border-[#c4c4c4] rounded-[8px] shadow-lg flex flex-start flex-col justify-center items-center m-2 p-2'>
                                                <img src="https://media-hosting.imagekit.io/9b31491e7e864231/download.svg?Expires=1841043910&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=kPYVqwZ3bCFef42aoh-QfYs0084QQCoolaJ02wexfMrWEtxZA93txOMPh0Ed44ZtEilNRHpqIj1v13doU~7-OmTowB5L-WSR93G1BwhEaJqdqVyfhRipnAPfrfnyyouoH5wfigYBzhIw1N8Z2bMZjhL-dGwOkRW3juLk9keDgeq-iognyLJ5eFdac0lPAtADCZAb1nGyStAp2LP4ruj-1WUaJ2NFML4IYkIC~G06F9K6jVK1B-3JNvEpqtfI8VrOluddCSNTM-1CdIS4UtJX41uw4rDhn7vRzo46R7xoJ5kjWVrqr9MFYLmilp-3RJa4yg1fA-4ufoINhQDTdZDdKA__" alt="" className='w-[25%]' />
                                                <h3 className='mt-2 text-[gray] text-[14px]'>{e.position}</h3>
                                                <p className='mt-2 text-[blue] text-center'>{e.companyname}</p>
                                                <p className='text-[13px] mt-2 text-[gray] flex items-center'><RiCalendar2Line className='w-[14px] me-1'/> {e.posteddate}</p>
                                                <p className='mt-2 text-[gray]  text-[14px]'><span>${e.minsalary}</span> - <span>${e.maxsalary}</span></p>
                                            </div>
                                        ))}


                                    </div>


                                </div>

                            </section>

                            {/* ----------------------*/}

                        </section>

                    </section>

                </section>

            </section>
        </>
    )
}

export default Dashboard
