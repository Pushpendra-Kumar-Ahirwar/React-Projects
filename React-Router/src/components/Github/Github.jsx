import React, { useEffect, useState } from 'react'

function Github() {
  const [data ,setData]=useState("")
  useEffect(()=>{
        fetch('https://api.github.com/users/pushpendra-kumar-ahirwar')
        .then(response=>response.json())
        .then(data=>setData(data))
  },
  [])
  return (
    <div className='w-[400px] h-auto bg-gray-500 flex flex-col justify-between items-center p-2 mt-3 mb-3 rounded-2xl md:ml-[400px] relative'>
    <img src={data.avatar_url} alt="Git picture" width={300}  className='rounded-xl'/>
      <h1 className='text-center text-white text-2xl'>Name: {data.name}</h1>
      <h1 className='text-center  text-white  text-2xl'>Location: {data.location}</h1>
      <h1 className='text-center  text-white  text-xl'>Followers: {data.followers}</h1>
    </div>
  )
}

export default Github
export const githubLoader= async()=>{
 const response =await fetch('https://api.github.com/users/pushpendra-kumar-ahirwar')
  return response.json()
}