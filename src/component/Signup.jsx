import React, { useEffect, useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'

import axios from 'axios';

const Signup = () => {

    const [otp, setOtp] = useState('')
    const [hotp, sethotp] = useState(true)

    const handleChange = (newValue) => {
        setOtp(newValue)
    }

    const sendOtp = () => {
        sethotp(false)
    }

   

    
   
    // searchVideos('Your search query');





    return (
        <>

            <section className="w-full mx-auto " >
                <div className="w-full grid sm:grid-cols-2 grid-cols-1 h-screen md:gap-10">
                    <div className='hidden sm:block bg-pink-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Tenetur iste placeat fugit tempora ad commodi iusto adipisci
                        cupiditate ipsum ipsam corporis, minima error dignissimos
                        atque voluptatem doloremque aperiam dolorem exercitationem.
                    </div>



                    <div className="" >

                        {
                            hotp ? <>

                                <form className="relative h-screen max-w-md mx-auto px-3">
                                    <div className=" grid grid-cols-1 py-16 ">
                                        <label className='text-xl font-Lato font-semibold mb-2 capitalize  '>Enter your mobile number</label>
                                        <input className="form-input rounded-md py-2.5 px-4 focus:border-green-500"
                                            type="text"
                                            placeholder="+91-7470853217" />

                                    </div>

                                    <div className='w-full  absolute bottom-16'>
                                        <p className='text-center text-xs'>By continuing, you agree to the Apna’s <br></br>
                                            Terms of service and Privacy Policy</p>
                                        <p className="text-xs lg:text-sm text-gray-600 mt-5">
                                            By signing up, you agree to <a href="#" className="text-blue-500">Terms of Service.</a>
                                        </p>

                                        <div className="mt-3 md:mt-4">
                                            <button
                                                onClick={sendOtp}
                                                className="btn bg-green-500 text-white w-full py-2 rounded-md" type="button">Next</button>

                                        </div>
                                    </div>
                                </form>
                            </>


                                : <>
                                    <div className=' justify-center itm mt-20 flex flex-col  '>
                                        <label className='text-xl font-Lato font-semibold mb-2 capitalize text-start '>Enter OTP</label>
                                        <MuiOtpInput
                                            length={4}
                                            value={otp}
                                            onChange={handleChange}
                                            style={{ display: "flex", gap: "5px", maxWidth: "200px", }}

                                        />
                                    </div>
                                </>
                        }




                    </div>


                </div>
            </section>



        </>

    )
}

export default Signup