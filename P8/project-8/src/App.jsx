import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("#fea")

  return (
    <div className='body' style={{backgroundColor: color}}>
      <div className='txt'>
        <p>BG color changer</p>
      </div>
      <nav>
        <ul>
        <button style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>blue</button>
        <button style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>red</button>
        <button style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>green</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>yellow</button>
        <button style={{backgroundColor:"lavender"}} onClick={()=> setColor("lavender")}>lavendar</button>
        <button style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>pink</button>
        <button style={{backgroundColor:"orange"}} onClick={()=> setColor("orange")}>orange</button>
        <button style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>purple</button>
        <button style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>olive</button>
        <button style={{backgroundColor:"aqua"}} onClick={()=> setColor("aqua")}>aqua</button>
        
      </ul>
      </nav>
    
    </div>
  )
}

export default App




{/* <nav>
      
    </nav> */}