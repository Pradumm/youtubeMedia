import React from 'react'


export default function SearchCard({ data }) {

    console.log(data, "_____-----v")

    function convertViews(viewCount) {
        if (viewCount >= 1e9) {
            return (viewCount / 1e9).toFixed(1) + 'b';
        } else if (viewCount >= 1e6) {
            return (viewCount / 1e6).toFixed(1) + 'm';
        } else if (viewCount >= 1e3) {
            return (viewCount / 1e3).toFixed(1) + 'k';
        } else {
            return viewCount;
        }
    }

    function convertDate(publishedAt) {
        const currentDate = new Date();
        const videoDate = new Date(publishedAt);
        const timeDifference = Math.abs(currentDate - videoDate);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference + ' days ago';
    }



    return (
        <div className='w-full mb-3  flex gap-4 lg:flex-row px-5'>
            <div className='relative  '>
                <span className='absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10'>
                    {/* {data.snippet.videoDuration} */}
                </span>

                <img src={data.snippet.thumbnails?.medium.url} alt='Thumbnail' className='  object-cover  rounded-xl ' />

            </div>
            <div className='flex  flex-col  '>

                <div>
                    <h3>
                        <a href='#' className='line-clamp-2 text-xl'>
                            {data.snippet.title}
                        </a>
                    </h3>
                    <div className='text-md text-gray-400 mt-2 '>
                        <div>
                            <a href='#' className='hover:text-white'>

                                {data.snippet.channelTitle}

                            </a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">

                                {/* {convertViews(data.statistics.viewCount)} views */}
                            </span>
                            <span>
                                {/* {convertDate(data.snippet.publishedAt)} */}
                            </span>
                        </div>
                        <div className='min-w-fit'>
                            <img src={""} alt="channel image" className='h-9 w-9 rounded-full' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}