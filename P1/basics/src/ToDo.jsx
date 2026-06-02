import "./App.css";

const ToDo = () => {
    function clicked(){
        alert("button is clicked!!");
    }
  return (

    <div>
      <p> hello from ToDo component</p>
      <img src="https://images.unsplash.com/photo-1780004189175-202169141544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <ul>
            <li> create an list of all days in a week</li>
            <li> Create an list of all months in a Year</li>
            <li> Create an list of all vowels</li>
        </ul>
        <button onClick={clicked}> CLICK ME</button>
    </div>
  )
}

export default ToDo ;
