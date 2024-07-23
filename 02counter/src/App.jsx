import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  function counter01(){
    if(count<20){
      setCount(prevCounter => prevCounter+1);
      setCount(prevCounter => prevCounter+1);
      setCount(prevCounter => prevCounter+1);
      setCount(prevCounter => prevCounter+1);
      setCount(prevCounter => prevCounter+1);
    }
  }
  function counter02(){
    if(count>0){
      setCount(prevCounter => prevCounter-1);
      setCount(prevCounter => prevCounter-1);
      setCount(prevCounter => prevCounter-1);
      setCount(prevCounter => prevCounter-1);
      setCount(prevCounter => prevCounter-1);
    }
 }

  return (
    <>
      <h1>HEllo Pushpendra!</h1>
      <button onClick={counter01}
      >Add Count{count}</button>
      <br />
      <button onClick={counter02}
      >Reduce Count{count}</button>
    </>
  )
}

export default App
