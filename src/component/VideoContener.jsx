import React from 'react'

const VideoContener = ({ item }) => {

    return (
        <>
            <div className='w-auto md:w-1/3 lg:w-1/4 p-3'>
                <img src="" alt="did" className='rounded-xl' />
                <h5 className=' mt-2 text-sm font-semibold'>{item.title}</h5>
                <p className=' mt-2 text-sm text-gray-500'>{item.vote_average}</p>
            </div>
        </>


    )
}

export default VideoContener