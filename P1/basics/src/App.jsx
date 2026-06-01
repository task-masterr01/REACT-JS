
import './App.css'
import Header from './header'
import UserComponent,{Extra,key,More} from './userComponent'
import Maths from './maths'

function App() {
  

  return (
    <div>
      <p>hello guys </p>
      <p>this is an multiline code</p>
      <Header />
      <p>upper text is exported from header file</p>
      <UserComponent />
      <Extra />
      <More />
      <p>{key}</p>

      <Maths />
      
    </div>
    
  )
}

export default App
