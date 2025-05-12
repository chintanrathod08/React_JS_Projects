// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiAndroidFill, RiAppleFill, RiAppStoreFill, RiFacebookFill, RiPinterestFill, RiTwitterFill, RiTwitterXFill, RiXrpFill, RiYoutubeFill } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='w-full h-[25rem] bg-[#4A4A4A] flex justify-center items-center'>

                <section className='w-[65%] h-[80%]'>

                    {/* ---------1--------- */}
                    <div className='w-full h-[90%] grid grid-cols-4'>
                        
                        
                        <div className=''>
                          <Link to={'/'} ><img src="https://static.cricbuzz.com/images/cb_logo.svg" alt="" className='w-[50%]' /></Link>
                        </div>

                        <div className='text-[white]'>
                            <h1 className='font-bold'>APPS</h1> <br />

                            <div className='flex flex-col w-full h-auto leading-[2rem]'>
                            <Link className='flex items-center gap-2'><RiAndroidFill className='w-[15px]'/> Android</Link>
                            <Link className='flex items-center gap-2'><RiAppleFill className='w-[17px]'/> ios</Link>
                            </div>

                        </div>

                        <div className='text-[white]' >
                            <h1 className='font-bold'>FOLLOW US ON</h1> <br />
                            
                            <div className='flex flex-col w-full h-auto leading-[2rem]'>
                            <Link className='flex items-center gap-2'><RiFacebookFill className='w-[17px]'/> Facebook</Link>
                            <Link className='flex items-center gap-2'><RiTwitterXFill className='w-[17px]'/> Twitter</Link>
                            <Link className='flex items-center gap-2'><RiYoutubeFill className='w-[17px]'/> Youtube</Link>
                            <Link className='flex items-center gap-2'><RiPinterestFill className='w-[17px]'/> Pinterest</Link>
                            </div>

                        </div>

                        <div className='text-[white]'>
                            <h1 className='font-bold'>COMPANY</h1> <br />

                            <div className='flex flex-col w-full h-auto leading-[2rem]'>
                            <Link>Careers</Link>
                            <Link>Advertise</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Terms of Use</Link>
                            <Link>Cricbuzz TV Ads</Link>
                            </div>
                        </div>

                    </div>

                    {/* ---------2--------- */}

                    <div className='w-full h-[10%]  flex justify-center items-center text-[gray]'>
                        <p>© 2025 Cricbuzz.com, Cricbuzz Platforms Limited. All rights reserved | The Times of India | Navbharat Times</p>
                    </div>

                </section>

            </footer>
        </>
    )
}

export default Footer
