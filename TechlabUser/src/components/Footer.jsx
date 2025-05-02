import { RiMapPinFill, RiPhoneFill } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsHolding, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'


function Footer() {
    return (
        <>

            <footer className='w-[100%] h-[400px] flex justify-center items-center mt-5'>

                <section className='w-[90%] h-[100%]  grid grid-cols-3 gap-10'>

                    {/* ------------ 1 --------- */}

                    <div className='bg-[white] ps-[1.5rem] pt-[2rem] pe-[1.5rem]'>

                        {/* ---------logo-------- */}
                        <div className='w-full h-auto'>
                            <img src="https://www.techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png" alt=""
                                className='w-[5vw]'
                            />
                        </div>

                        {/* ----------address-------- */}
                        <div className='w-full h-auto mt-[2rem]'>

                            <div className='w-full h-auto'>
                                <span className='flex  pe-[10rem]'><FontAwesomeIcon icon={faLocationDot} className='me-2' /><span className=''> Unit 213-262 Chapman Rd, Newark, DE 19702-5448, USA</span></span>
                            </div>

                            <div className='w-full h-auto mt-2'>
                                <span className='flex items-center pe-[10rem]'><FontAwesomeIcon icon={faPhone} className='me-2' /> 1-800-577-1949</span>
                            </div>

                            <div className='w-full h-auto mt-2'>
                                <span className='flex items-center pe-[10rem]'><FontAwesomeIcon icon={faEnvelope} className='me-2' /> b2bsales@techlabbusiness.com</span>
                            </div>

                            <div>

                            </div>

                            <hr className='mt-3' />

                            <p className='mt-2'> Copyright © 2024 Tech Lab Business & All Rights Reserved.</p>

                        </div>

                    </div>

                    {/* ------------ 2 --------- */}
                    <div className='w-[100%] border-[red] col-span-2 grid grid-cols-4'>

                        <div className='pt-[2rem]'>
                            <h1 className='text-[white] text-[19px] font-semibold'><Link>Products</Link></h1><br />
                            
                            <div className='leading-7 text-[#DBD7D6]'>
                            <p><Link>Kiosk</Link></p>
                            <p><Link>Digital Signage</Link></p>
                            <p><Link>Stands and Mounts</Link></p>
                            <p><Link>Custom Products</Link></p>
                            </div>
                        </div>

                        <div className='pt-[2rem]'>
                            <h1 className='text-[white] text-[19px] font-semibold'><Link>About Us</Link></h1><br />
                            
                            <div className='leading-7 text-[#DBD7D6]'>
                            <p><Link>About Tech Lab</Link></p>
                            <p><Link>Core values</Link></p>
                            <p><Link>Our Blogs</Link></p>
                            <p><Link>Partner Hub</Link></p>
                            <p><Link>Return Policy</Link></p>
                            </div>
                        </div>

                        <div className='pt-[2rem]'>
                            <h1 className='text-[white] text-[19px] font-semibold'><Link>Achievement</Link></h1><br />
                            
                            <div className='w-full h-auto  leading-7 text-[#DBD7D6] flex justify-between'>
                              <img src="https://techlabbusiness.com/assets/images/achievement/IAS.png" alt=""  className='ps-2 pe-2 pt-3 pb-3 w-[5vw] rounded-[7px] bg-[white]' />
                              <img src="https://techlabbusiness.com/assets/images/achievement/smg.png" alt=""  className='ps-2 pe-2 pt-3 pb-3 w-[7vw] rounded-[7px] bg-[white]' />
                            </div>

                            <div className='mt-3 bg-[white] h-auto pt-3 pb-3 ps-2 pe-2 rounded-[20px]'>
                                <img src="https://techlabbusiness.com/assets/images/achievement/allbrands.png" alt="" />
                            </div>
                        </div>

                        <div className='col-span-3 h-[140px]'>
                            <p><Link className='text-[white] text-[19px] font-semibold'>Newsletter</Link></p>

                            <p>Follow our newsletter to stay updated about our company</p>
                        </div>


                    </div>

                </section>

            </footer>

        </>
    )
}

export default Footer
