
import './App.css'
import Header from './header'
import UserComponent,{Extra,key,More} from './userComponent'
import Maths from './maths'
import Todo from './ToDo'

function App() {
  

  return (
    <div>
      <Todo />
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
