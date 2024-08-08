import React from 'react';
import { useParams } from 'react-router-dom'



export default function Github(){
    const {userid} = useParams()
    return(
        <>
        <h1 className='bg-violet-300 text-center text-3xl p-5 m-10'>hello : {userid}</h1>
        
        </>
    )
}