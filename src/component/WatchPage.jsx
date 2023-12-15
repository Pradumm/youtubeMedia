import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { BiLike, BiDislike } from "react-icons/bi"
import { FaShare } from "react-icons/fa"
import LiveMessage from './LiveMessage'
const WatchPage = () => {
    const dispatch = useDispatch()

    const location = useLocation();
    const { id } = useParams()
    // const { snippet, statistics } = location.state.item
    const { title, channelTitle, likeCount, publishedAt } = location.state.item;

    // console.log(likeCount, "__________item")

    // const videos = useSelector((state) => state.video.videos)
    // Replace with the actual like count

    function convertViews(viewCount) {
        if (viewCount >= 1e9) {
            return (viewCount / 1e9).toFixed(1) + "b";
        } else if (viewCount >= 1e6) {
            return (viewCount / 1e6).toFixed(1) + "m";
        } else if (viewCount >= 1e3) {
            return (viewCount / 1e3).toFixed(1) + "k"
        } else {
            return viewCount
        }
    }

    // Input duration string


    // Regular expressions to extract minutes and seconds



    return (

        <>
            <div className="py-4">
                <div className='flex flex-col lg:flex-row gap-5'>
                    <div className='lg:w-[70%]'>

                        <div className=''>
                            <iframe className=" w-full lg:h-[405px] rounded-xl" src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                frameBorder="0"
                                allowFullScreen
                                title="Youtube Player"
                                autoplay
                            >
                            </iframe>
                        </div>

                        <div>
                            <div className='py-2'>
                                <h1 className='text-xl capitalize '> {title}</h1>

                                {/* <div className=' flex  justify-between  py-2 items-center'>

                                    <div className='flex  flex-wrap '>

                                        <div className=' flex lg:gap-10'>
                                            <div className='flex gap-2  '>
                                                <div className='rounded-full h-10 w-10  bg-slate-200'>
                                                    <img src="" alt="ss" />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span>{channelTitle}</span>
                                                    <small> <span className='text-slate-400'> 185K subscribers</span></small>
                                                </div>
                                            </div>

                                            <div className='px-4 flex h-10 cursor-pointer justify-center items-center rounded-full text-black text-center  bg-slate-200 '>
                                                subscribe
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex gap-3'>
                                        <div className='bg-slate-700  rounded-full flex items-center px-5 py-2'>
                                            <div className='flex justify-center items-center gap-2  '>
                                                <span><BiLike /></span>
                                              <span>{convertViews(likeCount)}</span>
                                                <span><BiDislike /></span>
                                            </div>
                                        </div>
                                        <div className='bg-slate-700  h-10 rounded-full px-5 py-2'>

                                            <div className='flex justify-center gap-2  cursor-pointer items-center'><span className='hidden sm:block'><FaShare /></span>

                                                <span> share</span>
                                            </div>
                                        </div>
                                        <div className='bg-slate-700 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer  px-3 '>...</div>
                                    </div>

                                </div> */}

                                <div className='flex flex-col sm:flex-row justify-between py-2 items-center'>

                                    <div className='flex flex-wrap'>

                                        <div className='flex flex-col sm:flex-row gap-2 lg:gap-10'>
                                            <div className='flex gap-2'>
                                                <div className='rounded-full h-10 w-10 bg-slate-200'>
                                                    <img src="" alt="ss" />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <span>{channelTitle}</span>
                                                    <small><span className='text-slate-400'>185K subscribers</span></small>
                                                </div>
                                            </div>

                                            <div className='px-4 flex h-10 cursor-pointer justify-center items-center rounded-full text-black text-center bg-slate-200'>
                                                subscribe
                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex gap-3'>
                                        <div className='bg-slate-700 rounded-full flex items-center px-5 py-2'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <span><BiLike /></span>
                                                <span>{convertViews(likeCount)}</span>
                                                <span><BiDislike /></span>
                                            </div>
                                        </div>

                                        <div className='bg-slate-700 h-10 rounded-full px-5 py-2'>
                                            <div className='flex justify-center gap-2 cursor-pointer items-center'>
                                                <span className='hidden sm:block'><FaShare /></span>
                                                <span>share</span>
                                            </div>
                                        </div>

                                        <div className='bg-slate-700 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer px-3'>...</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='bg-gray-800 p-1 rounded-md'>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora fuga, accusantium numquam totam repellat eveniet sunt eaque odio consequuntur molestiae excepturi magnam veritatis facilis repudiandae modi minima reiciendis. Placeat, aliquam!</span>
                        </div>

                    </div>





                    <div className='lg:w-[30%]'>

                        <LiveMessage />

                    </div>
                </div>
            </div>
        </>



    )
}

export default WatchPage