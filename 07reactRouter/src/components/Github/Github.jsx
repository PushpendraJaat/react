import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';



function Github(){
    const data = useLoaderData()
    return(
        <>
        <div className='bg-violet-300 text-center text-3xl p-5 m-10'>
        <h1 >Github followers: {data.followers} </h1>
        <img src={data.avatar_url} alt="gitpic" width={300}/>
        </div>
        </>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/pushpendrajaat')
    return res.json()
}