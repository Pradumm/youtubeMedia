import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { toggleMenu } from "../Redux/features/appslice"
import { setsearchResults } from "../Redux/features/YoutubeSlice"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// const searchApi = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const GOOGLE_API_KEY1 = "AIzaSyCks3LtQ0qXn3cJ-DWNCja3aCm2ybeDBp8";
const Header = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [searchTerm, changeSearchTerm] = useState("")


    const requestUrl = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY1}&part=snippet&type=video&q=${searchTerm}&maxResults=${50}`;


    const fetchYoutubeSearchResults = async () => {
        try {
            const response = await axios.get(requestUrl);
            console.log(response.data); // This will contain the search results
            dispatch(setsearchResults(response.data.items));
           
            navigate('/result');

        } catch (error) {
            console.error("Error fetching YouTube search results:", error);
        }
    }


    const handleSearch = () => {
        fetchYoutubeSearchResults();
    }

    // console.log(searchTerm, "--+++_____-searchTerm")

    return (
  
        <div className="flex justify-between items-center px-2 lg:px-14 h-14  bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-1 sm:gap-2 lg:gap-8 items-center text-2xl">
                <div className=''>
                    <GiHamburgerMenu onClick={() => dispatch(toggleMenu())} />
                </div>
                <div className="flex gap-1 items-center justify-center">
                    <BsYoutube className="text-3xl text-red-600 " />
                    <span className="text-2xl hidden sm:block">Youtube</span>
                </div>
            </div>
            <div className="flex items-center justify-center 
             gap-2 lg:gap-5">
                <div

                >
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
                        <div className="flex gap-5 items-center pr-5">
                            <input
                                type="text"
                                placeholder="Search"
                                className=" w-full lg:w-96 bg-zinc-900 focus:outline-none border-none"
                                value={searchTerm}
                                onChange={(e) => changeSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                            <AiOutlineSearch className="text-xl " />
                        </button>
                    </div>
                </div>

                <div className="text-xl p-3 bg-zinc-900 rounded-full">
                    <FaMicrophone />
                </div>
            </div>
            <div className="flex gap-1 sm:gap-2 lg:gap-8 items-center text-xl">
                <RiVideoAddLine />
                <div className="relative">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        {" "}
                        9+{" "}
                    </span>
                </div>
                <img
                    src="https://yt3.googleusercontent.com/Ad8Q8PblBvMbfVEEpuSiAvcLoI6XqEecc4GEjCN41716Zc1lLEjR6lPB4JXjKzMLVFYskARDaNU=s900-c-k-c0x00ffffff-no-rj"
                    alt="profile logo"
                    className="w-9 h-9 rounded-full"
                />
            </div>
        </div>
    )
}

export default Header