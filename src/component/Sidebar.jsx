import React from 'react';
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater,
} from 'react-icons/md';
import { LuThumbsUp } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const { isMenuOpen } = useSelector((state) => state.appSlice);

    const mainLinks = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: 'Home',
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: 'Shorts',
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
            name: 'Subscriptions',
        },
    ];

    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: 'Library',
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: 'History',
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: 'Watch Later',
        },
        {
            icon: <LuThumbsUp className='text-xl' />,
            name: 'Liked Video',
        },
    ];

    return (
        <div

        >
            <ul className='flex flex-col border-b-2 border-gray-700'>
                {mainLinks.map(({ icon, name }) => (
                    <li
                        key={name}
                        className={`lg:pl-6 pl-2 py-3 hover:bg-zinc-700 ${name === 'Home' ? 'bg-zinc-600' : ''
                            } rounded-xl`}
                    >
                        <Link to='/' className='flex items-center  gap-2 lg:gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='flex flex-col border-b-2 border-gray-800'>
                {otherLinks.map(({ icon, name }) => (
                    <li
                        key={name}
                        className={`pl-2 lg:pl-6 py-3 ${name === 'Home' ? 'bg-zinc-600' : ''
                            } rounded-xl`}
                    >
                        <Link to='/' className='flex items-center gap-2 lg:gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
