import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
        const myDetails={
          name:"Pushpendra",
          location:"Indore"
        }
  return (
    <>
      <h1 className='bg-red-500 p-5 text-black text-3xl rounded-2xl block bg-center'>First Tailwind in React</h1>
      <Card myname='Pushpendra-Kumar' bnt="Click Me " detail={myDetails.name}/>
      <Card myname='Lokendra' bnt="Visti Me"/>
    </>
  )
}

export default App
