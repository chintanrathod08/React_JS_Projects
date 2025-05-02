import { RiArrowDownSFill, RiArrowRightSFill, RiDashboard3Line, RiFlag2Line, RiCloseLine } from '@remixicon/react';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Asiderbar() {
  const sidebarOpen = useSelector((state) => state.sidebarOpen);
  const dispatch = useDispatch();

  const [jobOpen, setJobOpen] = useState(false);

  const handleCloseSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR', payload: false }); 
  };

  return (
    <aside
      className={`
        fixed xl:static top-0 left-0 h-[100vh] bg-white shadow-lg z-50 transition-all duration-300
        ${sidebarOpen ? 'w-[100%] xl:w-[16%]' : 'w-0 xl:w-0'} 
        overflow-hidden
      `}
    >
     
      <div className='w-full h-[6rem] flex items-center justify-between px-4'>
        <img
          src='https://www.techlabbusiness.com/admin/images/icon/Untitled%20(500%20x%20500%20px)%20(1).png'
          alt='Logo'
          className='w-[5.5rem]'
        />
     
        
        <button
          className='xl:hidden text-gray-700 text-2xl'
          onClick={handleCloseSidebar}
        >
          <RiCloseLine size={24} />
        </button>
      </div>

      {/* Menu Section */}
      <section className='w-full h-[90.1vh] px-4 pt-5 overflow-y-auto' id='aside-scroll'>
        <p className='ps-1 text-[dimgray]'>Menu</p>

        {/* Dashboard */}
        <div className='py-2 text-[dimgray]'>
          <li className='flex items-center gap-2'>
            <RiDashboard3Line width='20px' />
            <Link to='/dashboard'>Dashboard</Link>
            <RiArrowRightSFill width='20px' className='ml-auto' />
          </li>
        </div>

        {/* Jobs Dropdown */}
        <div className='py-2 text-[dimgray]'>
          <li
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setJobOpen(!jobOpen)}
          >
            <RiFlag2Line width='20px' />
            <span>Jobs</span>
            {jobOpen ? (
              <RiArrowDownSFill width='20px' className='ml-auto' />
            ) : (
              <RiArrowRightSFill width='20px' className='ml-auto' />
            )}
          </li>
          {jobOpen && (
            <div className='pl-6 pt-2 leading-7 text-[14px]'>
              <li><Link to='/joblist'>Job List</Link></li>
              <li><Link to='/jobapplication'>Job Application</Link></li>
            </div>
          )}
        </div>
      </section>
    </aside>
  );
}

export default Asiderbar;
