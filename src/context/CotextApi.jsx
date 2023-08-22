import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()
// url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',


const CotextApi = (props) => {


    const [ytdata, setytdata] = useState([])

    useEffect(() => {
        Fatchdataqury()
    }, [])

    const Fatchdataqury = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=3407e234e4eb43ed4e5f5f3ce456405c").then((res) => {

            console.log(res.data.results, "________fata")
            setytdata(res.data.results)
        }).catch((Error)=>{
            console.log(Error)
        })

        
    }

    return (
        <Context.Provider value={{ ytdata }}>
            {props.children}
        </Context.Provider>
    )
}

export default CotextApi