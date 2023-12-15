import React from 'react'

import ButtonList from './ButtonList'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
   
    const  buttonList= ["All", "Javascript", "Live", "Mixin", "Lecture", "Grammer", "Website","Civil"]




    return (
        <div className=''>
            <ButtonList buttonList={buttonList} />
            <Outlet/>

        </div>
    )
}

export default MainContainer