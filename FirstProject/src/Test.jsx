import { useState } from "react"
import './App.css'
function Test(){
    const [count, setCount] = useState(0)
  const Invalue=()=>{
    setCount(count+1)
    if(count==20){
      setCount(0)
    }
  }
  const Dvalue=()=>{
    setCount(count-1)
    if(count==0)
      setCount(0)
  }

    return(
        <>
        <h1 className="numbers">{count}</h1>
     <button className="bt" onClick={Invalue}>Increase</button>
     <button className="bt"  onClick={Dvalue}>Decrease</button>
        </>
    )
}
export default Test;