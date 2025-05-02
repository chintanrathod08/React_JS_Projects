import { RiMenuLine, RiMessage3Line, RiNotification2Line, RiSearchLine } from '@remixicon/react';
import React from 'react'
import { useDispatch } from 'react-redux'

function Header() {

  const dispatch = useDispatch();

  const hlToggle = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      {/* Header */}
      <header className='w-[100%] lg:h-[90px] xl:h-[75px] h-[auto] pt-3 pb-3 md:flex  md:justify-between md:items-center  xl:flex xl:items-center xl:grid xl:grid-cols-2  px-4  '>

        {/* first-div */}
        <div className='h-full md:flex md:items-center xl:flex xl:items-center gap-4'>
          
          <div >
            <RiMenuLine size={24} className='text-[gray] cursor-pointer' onClick={hlToggle} />
          </div>


          <div className='w-auto h-auto relative mt-2 xl:mt-0'>
            <RiSearchLine width='18px' className="absolute left-2 top-[0.3rem]  text-[dimgray] hidden xl:block" />
            <input type="text" placeholder='Search here' className='w-full h-[2rem] md:h-[2.5rem] ps-2 text-[14px] xl:ps-8 xl:w-[250px] xl:h-[35px] rounded-[7px] border border-[gray] ' />
          </div>
        </div>


        {/* second-div */}
        <div className='h-full flex justify-between items-center  xl:flex xl:justify-center xl:grid xl:grid-cols-2 items-center  mt-3 xl:mt-0' >

          {/* --------1--------- */}
          <div className='flex justify-start xl:justify-end items-center gap-2 xl:gap-5 '>
            <RiNotification2Line width='20px' className='text-[dimgray]'/>
            <RiMessage3Line width='20px' className='text-[dimgray]'/>
          </div>

          {/* --------2--------- */}
          <div className='flex items-center ps-5  w-[13rem] sm:w-[13rem]  xl:w-[15rem]'>

            <div className='w-full flex justify-arround items-center bg-[#F5F5F5] w-[50%] h-auto ps-2 rounded-[7px] shadow-xl'>
              <div className='w-[2rem] h-[2rem] xl:w-[45px] xl:h-[44px] flex justify-end items-center rounded-[100px]'>
                <img src="https://media-hosting.imagekit.io/ddbc282c2e6241c2/user.png?Expires=1839564575&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tZ1s5zOTbHjnF4j0gImNT6KS22YKhDFKgjiRUVvR0uuMik7FrUI0bvqgXAGVZ5vuW60hv6cP68Xdbub5VOWsByfy8TQMwOKGNz8JhA-a7aYVLmOREDrC~-r7x~UkYGgdekaVDIo29pvArHMp2cPJV-18jO9KfvP4d0HNiKmzeZBCrs2mbm5gX1alpkXm4JnokNTZH6eaygoDT9j3VGdJZwH0ttNe5bGrNxnEa2KITTe2~nntduCGW-27i3-V6kMsXIgsmJLq8GoLE8-wQes8c7XnEKjX3Od6eoTBkCFA8vSkVQKod0kzmLggyZVDxTjrRoHYbfsishl~87vVAkXGxw__" alt="" className='w-[100%]' />
              </div>
              <div className='w-[120px] h-[50px] p-2 '>
                <p className='text-[13px] overflow-x-auto'>User</p>
                <p className='text-[11px] text-[dimgray] overflow-x-auto'>Superadmin</p>
              </div>
            </div>

          </div>


        </div>

      </header>


    </>
  )
}

export default Header
