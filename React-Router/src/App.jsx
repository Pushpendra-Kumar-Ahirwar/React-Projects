import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <h1 className='block bg-black text-white text-3xl p-4 font-bold rounded-lg'>Learning React Router Dom</h1>

    </>
  )
}

export default App
