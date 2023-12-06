import { useState } from 'react'



function App() {
  const [color,setColor] = useState("olive")

  return (
  <>
 
   <div className="w-full h-screen duration-200 jutify-center"
    style={{backgroundColor:color}}>
      <div className=' flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 bottom-12 yshadow-lg bg-red px-3 py-2 rounded-3xl  shadow-lg'>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("red")}
        style={{backgroundColor:"red"}}>Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("green")}
        style={{backgroundColor:"green"}}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("yellow")}
        style={{backgroundColor:"yellow"}}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("blue")}
        style={{backgroundColor:"blue"}}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("orange")}
        style={{backgroundColor:"orange"}}>Orange</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("lightblue")}
        style={{backgroundColor:"lightblue"}}>Lightblue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white'
        onClick={()=>setColor("gray")}
        style={{backgroundColor:"gray"}}>Gray</button>
        </div>
      </div>
  </div> 
  </>
   
  )
}

export default App
