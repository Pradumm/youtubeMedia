import React from 'react'

import { useSelector } from "react-redux"
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import SearchCard from './SearchCard';

const SearchVideos = () => {

    const { searchResults } = useSelector((state) => state.video)

    // console.log(searchResults, "searchResults_________-searchResults")
    return (

        <div>

            {

                searchResults.length ? (
                    <InfiniteScroll
                        dataLength={searchResults.length}
                        // next={() => dispatch(getHomePageVideos(true))}
                        hasMore={searchResults.length < 500}
                        loader={<Spinner />}
                        height={650}
                    >

                        <div className='grid  grid-cols-1 '>
                            {searchResults.map((item) => {
                              
                                const title = item.snippet.title
                                const channelTitle = item.snippet.channelTitle
                                const likeCount = 0
                                const publishedAt = ""
                                return (
                                    <Link to={`/watch/${item.id.videoId}`} state={{ item: { title, channelTitle, likeCount, publishedAt } }}>
                                        <SearchCard
                                            data={item}
                                            key={item.videoId} />
                                    </Link>

                                )
                            })}
                        </div>

                    </InfiniteScroll>
                )

                    : (
                        <Spinner />
                    )


            }

        </div>
    )
}

export default SearchVideos