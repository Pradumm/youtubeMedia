'use client';

import { useState } from 'react';
export default function SidenavBar({ open, setopen }) {

    const mamu = ["Home", "shorts", "your videos", "history", "Library", " watch videos", "Like videos"]


    return (
        <>
            <div className=' md:block w-[200px] bg-black h-screen  overflow-y-auto absolute md:relative translate-x-[-200px] md:translate-x-0 transition-all text-white'>
                <div className='flex px-5 flex-col py-2'>
                    {
                        mamu.map((item) => {
                            return (
                                <>
                                    <div className='text-white  h-10 text-sm cursor-pointer  flex items-center px-3 mb-[1px]
                                       rounded-lg hover:bg-white/[0.5]'>

                                        <span className='text-md capitalize  mr-5'>{item}</span>
                                    </div></>
                            )
                        })
                    }
                    <hr />
                </div>
            </div>
        </>
    )
}


