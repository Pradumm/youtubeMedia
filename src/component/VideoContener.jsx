

import React, {useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchYouTubeVideos } from '../Redux/features/Api'
import { Link } from 'react-router-dom'


const VideoContener = () => {

    const dispatch = useDispatch()

    const videos = useSelector((state) => state.video.videos)
    // console.log(videos, "________videos")

    useEffect(() => {
        dispatch(fetchYouTubeVideos())
    }, [])

    return (
        <>
            {
                videos.length ? (
                    <InfiniteScroll
                        dataLength={videos.length}
                        // next={() => dispatch(getHomePageVideos(true))}
                        hasMore={videos.length < 500}
                        loader={<Spinner />}
                        height={650}
                    >
                       <div className='grid gap-y-14 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-8'>
                            {videos.map((item) => {
                                // console.log(item, "________")

                                const title = item.snippet.localized.title
                                const channelTitle = item.snippet.channelTitle
                                const likeCount = item.statistics.likeCount
                                const publishedAt = item.statistics.publishedAt

                                return (
                                    <Link to={`/watch/${item.id}`} state={{ item: { title, channelTitle, likeCount, publishedAt } }}>
                                        <Card
                                            data={item}
                                            key={item.videoId} />
                                    </Link>
                                )
                            })}
                        </div>
                    </InfiniteScroll >

                ) : (
                    <Spinner />

                )
            }




        </>
    )
}

export default VideoContener