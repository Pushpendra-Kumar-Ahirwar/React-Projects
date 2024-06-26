import React from 'react'

export default function Card(props) {
    console.log(props.Obj)
  return (
    <div>
      <div className="relative h-[600px] w-[300px] rounded-md mt-4 mx-[500px] bg-gradient-to-t from-red-500 to-transparent">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className='absolute inset-0 bg-gradient-to-t from-red-600 to-transparent'></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.myname}</h1>
        <p className="mt-2 text-sm text-gray-300">{props.detail}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis
        </p>
        <button className="mt-2 cursor-pointer  text-sm font-semibold text-white">
          {props.bnt} &rarr;
        </button>
      </div>
    </div>

    </div>
  )
}
