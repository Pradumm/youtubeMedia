import React, { useState } from 'react'

import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

import { useSelector } from 'react-redux';


// import VideoContener from './VideoContener'
const Home = () => {

    const { isMenuOpen } = useSelector((state) => state.appSlice);
    // style={{ height: "92.5vh" }}
    return (
        <>
            <div className="flex h-screen mt-2">
                {/* Sidebar */}
                <div className={`${isMenuOpen
                        ? 'w-1/4 md:w-1/5 lg:w-1/6 transition-all duration-300 ease-in-out'
                        : 'hidden'
                    } pr-5 overflow-auto pb-8 sidebar`}>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="w-full">
                    <MainContainer />
                </div>
            </div>

        </>
    )
}

export default Home