import React from 'react'


const Greet = (props) => {
  return (
    <div className='text-center  block font-bold mt-5 justify-items-center justify-center '>
      hello {props.name} have a good day !!
      <div>
      {props.children}

      </div>
    </div>
  )
}

export default Greet

