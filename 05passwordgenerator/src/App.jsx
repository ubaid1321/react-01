import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
 const [length,setLength]= useState(6)
 const [numberAllowed,setnumberAllowed]=useState(false)
 const [charAllowed,setCharAllowed]=useState(false)
 const [password,setPassword]=useState("")
 //ref hook
 const passwordRef =  useRef(null)

 const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz"
 
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+="~!@#$%^&*()"
  for (let i=1;i<=length;i++){
let char = Math.floor(Math.random()*str.length +1)
  
  pass+=str.charAt(char)
 }
 setPassword(pass)

 },[length,numberAllowed,charAllowed,setPassword])
 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,9)

  window.navigator.clipboard.writeText(password)
 })
 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

 

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3 '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 py-3'
      placeholder='password'
      readOnly
      ref={passwordRef}

      />
      <button onClick={copyPasswordToClipboard} className='=outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer' 
        onChange={(e) => {setLength(e.target.value)}}/>
        <label htmlFor="">length:{length}</label>


      </div>
      <div>
      <input type="checkbox"
      defaultChecked={numberAllowed} 
      id="numberInput"
      onChange={()=>{
        setnumberAllowed((prev)=>!prev)
      }}
      />
      <label htmlFor="">Numbers</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={charAllowed} 
      id="charInput"
      onChange={()=>{
        setCharAllowed((prev)=>!prev)
      }}
      />
      <label>Characters</label>

    </div>
      </div>
     </div>
    </>
  )
}

export default App
