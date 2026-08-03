import { useState , useCallback , useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numallow, setNumallow] = useState(false)
  const [charAllow, setCharAloow] = useState(false)
  const [password, setPassword] = useState("")

  //useref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(
    () => {
      
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numallow) str += "0123456789"
      if(charAllow) str += "[]{};':/?@#$%^&*(*)"

      for (let i = 1; i <= length; i++){
        let char = Math.floor(Math.random() *str.length + 1)
        pass += str.charAt(char)
       
      }
      setPassword(pass)
    },
    [length , numallow , charAllow , setPassword],
  )
  const copyPasswordToClipboard = useCallback( ()=> {
    // passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5);
      window.navigator.clipboard.writeText(password)
  }, [password]
  ) 
  useEffect(()=>{
    passwordGenerator()
  } ,[length , numallow , charAllow , passwordGenerator])
  return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800'>
      
      {/* 1. Added larger text, bold font, and margin-bottom to space it from the input */}
      <h1 className='text-white text-center text-2xl font-bold mb-6'>
        Password Generator
      </h1>
      
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input 
          type="text"
          value={password}
          /* 2. Increased padding (py-3) and added bg-transparent */
          className='outline-none w-full py-3 px-4 bg-transparent text-gray-700 font-medium'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        
        {/* Optional: Since you used 'flex' on the wrapper, you have the perfect spot for a Copy button! */}
        <button className='bg-blue-600 text-white px-4 py-3 font-semibold hover:bg-blue-700 transition-colors' 
            onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
              type="range"
              min={6}
              max={30}
              value={length}
              cursor-pointer
              onChange={(e)=>{setLength(e.target.value)}} 
          />
          <label >Length : {length }</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
              defaultChecked={numallow}
              id='numberInput'
              onChange={()=>{
                setNumallow((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
              defaultChecked={charAllow}
              id='charInput'
              onChange={()=>{
                setCharAloow((prev) => !prev);
              }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>

    </div>
  </>
)
}

export default App
