import { RiUser2Line, RiUserLine } from '@remixicon/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    return (
        <>
            <header className='w-full h-[100px] shadow-xl'>

                {/* --------sub-header-1-------- */}
                <div className="sub-header-1 w-full h-[60%] bg-[#009270] flex justify-around items-center">

                    {/* logo */}
                    <div className="logo w-[12%] h-full flex justify-center items-center">
                       <img src="https://media-hosting.imagekit.io/d7ac80626c384bed/cb_logo.svg?Expires=1841306677&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hz921QmcxpGvigxvP~1X~BWfYrFAG7H6ZdoAkVIdYcQ-rcn5Lu2YRJuvQjgABLVeApYmD4Ma~dv9e85gqYKMo3s0cu7lOFQJrgiEypjGs9YAximY6GsSJE7OjA61VNiyOfG4K2ygSIWnXmalmK3Se9zR1P~qwOhras0dIQSAfe7~b4Zi385PupSl1~ptQcO9ZnPZOun2OiSOGkJ72ezUZ2hFh~wwqeJc7qKYErd3DcJK7KUjrngutVxbRnYgbqkr23StMRt9AxmM1lGP~qZWitmo8njOqSLriaHOumpb6J5PiiVecDkKt-KiRAko5X8q9W9UiRL4s1WNeV-qFDgEbQ__" alt=""
                        onClick={()=> navigate('/')}  className='h-[72%]' />
                    </div>

                    {/*--- nav ----*/}
                    <nav className='w-[60%] h-full '>
                        <ul className='w-full h-full flex justify-between items-center text-[white]' >
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Live Scores</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Schedule</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Archives</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>News</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Series</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Teams</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Videos</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>Rankings</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#028062] h-full flex items-center' ><Link>More</Link></li>
                        </ul>
                    </nav>

                    <button className='w-[130px] h-[36px] bg-[white] rounded-[50px] cursor-pointer'>
                        Cricbuzz Plus
                    </button>

                    <div className='w-[35px] h-[35px] border border-2  border-[white] rounded-[50px] cursor-pointer flex justify-center items-center'>
                        <RiUserLine className='text-white w-[18px] font-semibold' />
                    </div>

                </div>


                {/* ----------sub-header-2--------- */}

                <div className="sub-header-2 w-full h-[40%] bg-[#4A4A4A] flex justify-between items-center ">

                    {/* -------1------ */}
                    <div className='w-[70%] h-full'>
                        <ul className='w-full h-full flex justify-between items-center text-[white] text-[14px]'>
                            <li className='cursor-pointer ps-3 pe-5 hover:bg-[#353535] h-full flex items-center'><Link>MATCHES</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#353535] h-full flex items-center' ><Link>KKR vs CSK - CSK won</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#353535] h-full flex items-center' ><Link>PBKS vs DC - Preview</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#353535] h-full flex items-center' ><Link>INDW vs RSAW - IND...</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#353535] h-full flex items-center' ><Link>MI vs GT - GT won</Link></li>
                            <li className='cursor-pointer ps-3 pe-3 hover:bg-[#353535] h-full flex items-center' ><Link>PBKS vs LSG - PBKS...</Link></li>
                        </ul>
                    </div>

                    {/* -------2------ */}
                    <div className='w-auto pe-3 h-full flex items-center justify-center'>
                        <select name="" id="" className='w-[70px] h-full ps-5 flex justify-center items-center cursor-pointer hover:bg-[#353535] text-white'>
                            <option value="">All</option>
                        </select>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header
