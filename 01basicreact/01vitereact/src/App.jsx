import { useState } from 'react'
import Chai from "./chai"



function App() {
  const [count, setCount] = useState(0)

  return (
    //fragment
    <>
    <Chai/>
    <h1>chai aur react</h1>
    </>
  )
}

export default App
