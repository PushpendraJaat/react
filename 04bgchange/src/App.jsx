import { useState } from 'react'

function App() {
  const [color, setColor] = useState()

  return (
  
      <div className="w-full h-screen duration-300" 
      style={{backgroundColor: color}}>

        <div className="bg-orange-400 fixed flex justify-center bottom-14 rounded-lg inset-x-0">
          <button onClick={() => setColor("red")} className='bg-orange-400 px-4 py-4'>Red</button>
          <button onClick={() => setColor("green")} className='bg-orange-400 px-4 py-4'>Green</button>
          <button onClick={() => setColor("orange")} className='bg-orange-400 px-4 py-4'>Orange</button>
          <button onClick={() => setColor("olive")} className='bg-orange-400 px-4 py-4'>Olive</button>
          <button onClick={() => setColor("black")} className='bg-orange-400 px-4 py-4'>Black</button>
          <button onClick={() => setColor("white")} className='bg-orange-400 px-4 py-4'>White</button>
          <button onClick={() => setColor("yellow")} className='bg-orange-400 px-4 py-4'>Yellow </button>
          <button onClick={() => setColor("grey")} className='bg-orange-400 px-4 py-4'>Grey</button>
        </div>

        
      </div>
 
  )
}

export default App
