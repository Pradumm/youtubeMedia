import React from 'react'




export default function Card({ data }) {

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





    const convertDuration = (duration) => {
        // Regular expressions to extract minutes and seconds
        const minutesRegex = /(\d+)M/;
        const secondsRegex = /(\d+)S/;

        // Extract minutes and seconds using regex
        const minutesMatch = minutesRegex.exec(duration);
        const secondsMatch = secondsRegex.exec(duration);

        // Convert minutes and seconds to numbers
        const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
        const seconds = secondsMatch ? parseInt(secondsMatch[1], 10) : 0;

        // Calculate hours, minutes, and remaining seconds
        const hours = Math.floor((minutes + seconds / 60) / 60);
        const minutesPart = Math.floor((minutes + seconds / 60) % 60);
        const secondsPart = Math.floor(seconds % 60);
        const videoDuration = `${hours}:${minutesPart}:${secondsPart}`
        return videoDuration

    };


    return (
        <div className='w-full h-60 flex gap-3 flex-col '>
            <div className='relative'>
                <span className='absolute bottom-0 right-8 text-sm bg-gray-900 px-2 py-0.5 z-10'>
                    {convertDuration(data.contentDetails.duration)}
                </span>

                <img src={data.snippet.thumbnails?.medium.url} alt='Thumbnail' className='h-44 rounded-lg ' />

            </div>
            <div className='flex gap-2'>
                <div className='min-w-fit'>
                    <img src={""} alt="channel image" className='h-9 w-9 rounded-full' />

                </div>
                <div>
                    <h3>
                        <a href='#' className='line-clamp-2'>
                            {data.snippet.localized.title}
                        </a>
                    </h3>
                    <div className='text-sm text-gray-400'>
                        <div>
                            <a href='#' className='hover:text-white'>

                                {data.snippet.channelTitle}

                            </a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">

                                {convertViews(data.statistics.viewCount)} views
                            </span>
                            <span>
                                {convertDate(data.snippet.publishedAt)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}