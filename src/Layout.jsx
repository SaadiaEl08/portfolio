import React from 'react';
import { Outlet } from 'react-router-dom';
import FirstSideBar from './components/FirstSideBar';
import SecondSideBar from './components/SecondSideBar';
import TopNavBar from './components/TopNavBar';

function Layout() {
    return (
        <div className='flex flex-row '>
            <sidebar className="basis-1/12 border border-spacing-1" >
                <FirstSideBar />
            </sidebar>
            <sidebar className="basis-2/12">

                <SecondSideBar />
            </sidebar>
            <nav>

                <TopNavBar />
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;