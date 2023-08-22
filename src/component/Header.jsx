import React, { useState } from 'react'
import { BiSearch, BiSolidMicrophone, BiSolidUserCircle } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <>

            <header className='w-full'>
                <div className='max-w-[1200px] mx-auto px-[10px]'>

                    <div class="grid grid-cols-[auto_70%] items-center py-1 ">
                        <div className=''>
                            <a class="flex  w-[100px] md:w-[200px] ">
                                <img src="https://i.pinimg.com/originals/01/9c/ca/019cca15314a62b8fe7240bcc4b4528c.jpg" class=" mr-3" alt="Flowbite Logo" />
                            </a>
                        </div>
                        <div className=''>
                            <div class=" flex justify-end">
                                <ul class="font-medium flex flex-row p-4 md:p-0 mt-4 rounded-lg  md:flex-row space-x-4  md:space-x-4 md:mt-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link to="#" class=" py-3 px-3 block text-[16px] font-Lato  text-white bg-[#004b87] hover:bg-[#51830f] duration-[0.5] dark:text-white rounded md:dark:text-blue-500" aria-current="page">Employer Login </Link>
                                    </li>
                                    <li>
                                        <Link to="#" class="block py-3 px-3  text-[16px] font-Lato  text-white bg-[#004b87] hover:bg-[#51830f] duration-[0.5] dark:text-white rounded md:dark:text-blue-500" aria-current="page">Candidate Login</Link>
                                    </li>
                                    <li>
                                        {/* <Link to="#" class="block py-3 px-3 text-[16px] font-Lato  text-white bg-[#004b87] hover:bg-[#51830f] duration-[0.5] dark:text-white md:dark:text-blue-500" aria-current="page">Login</Link> */}
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="bg-[#004b87] px-[10px]" >
                    <nav class="">
                        <div class="max-w-screen-xl flex flex-wrap items-center md:justify-start justify-between mx-auto ">
                            <a href="" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                            </a>
                            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                                <ul class="font-Lato  font-[600] flex flex-col  md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#" class="block px-3 py-2 xl:px-5 xl:py-3.5  hover:bg-[#52514e]   text-white" >Academics</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-3 py-2 xl:px-5 xl:py-3.5  hover:bg-[#52514e]  text-white" >Academics</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-3 py-2 xl:px-5 xl:py-3.5  hover:bg-[#52514e]  text-white" >Academics</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-3 py-2 xl:px-5 xl:py-3.5   hover:bg-[#52514e] text-white" >Academics</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-3 py-2 xl:px-5 xl:py-3.5   hover:bg-[#52514e] text-white" >Academics</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>





                    {/* <ul class=" font-Lato flex flex-col p-4 md:p-0 mt-4   md:flex-row    md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block px-3 py-2 xl:px-5 xl:py-2 font-semibold  text-white" >Academics</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 xl:px-5 xl:py-2 font-semibold  text-white" >Academics</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 xl:px-5 xl:py-2 font-semibold  text-white" >Academics</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 xl:px-5 xl:py-2 font-semibold  text-white" >Academics</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 xl:px-5 xl:py-2 font-semibold text-white" >Academics</a>
                        </li>
                        <li>
                            <a href="#" class=" hidden lg:block  px-3 py-2 xl:px-5 xl:py-2 font-semibold text-black text-white" >Academics</a>
                        </li>


                    </ul> */}
                </div>
            </header>


            {/* <section className='w-full'>
                <div className="bg-[url('https://content.georgiancollege.ca/wp-content/uploads/WEB-21-597-Web-Header-HomePage.jpg')]
                 bg-cover bg-center py-[30px] bg-no-repeat w-full ">
                    <div className=' px-5 md:px-32 flex flex-col justify-center'>
                        <h1 className='capitalize font-[400] text-blue-500  md:text-[3.2rem]'>Experience</h1>
                        <div className=' w-[300px] md:w-[400px] '>
                            <img src="https://content.georgiancollege.ca/wp-content/uploads/MORE_Shadow.png" alt="" />
                        </div>
                    </div>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5   px-2 md:px-28'>
                        <div className='flex justify-center items-center bg-[#004b87] p-3 text-white'>Programs</div>
                        <div className='flex justify-center items-center bg-[#004b87] p-3 text-white'>Programs</div>
                        <div className='flex justify-center items-center bg-[#004b87] p-3 text-white'>Programs</div>

                        <div className='flex justify-center items-center bg-[#004b87] p-3 text-white'>Programs</div>
                    </div>


                </div>
            </section> */}

















        </>
    )
}

export default Header