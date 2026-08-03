import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <InputBox></InputBox>
      
      <InputBox></InputBox>
    </>
    
  )
}

export default App
