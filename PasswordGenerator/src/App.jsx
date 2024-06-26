import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [CharAllowed, setCharAllowed] = useState("false");
  const [isNumber, setNumber] = useState("false");
  const [Password, setPassword] = useState("");

  const passwordreference=useRef(null)
  const PasswordGenerate = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (CharAllowed) str +="!@#$%^&*()_+{}";
    if (isNumber) str +="0123456789";
    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass +=str.charAt(char);
    }
    setPassword(pass);
  }, [lenght, CharAllowed, isNumber, setPassword]);
  const CopytoClipboard= useCallback(()=>{
    passwordreference.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    PasswordGenerate()
  },[isNumber,PasswordGenerate,CharAllowed,lenght])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-white text-center mb-4 text-3xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            readOnly
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
          ref={passwordreference}
          />
          <button 
          onClick={CopytoClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink hover:bg-blue-950">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght: {lenght}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={isNumber} onChange={()=>{setNumber((prev)=>!prev)}} />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={CharAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}} />
            <label>Charater</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
