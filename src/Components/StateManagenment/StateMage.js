import React, { useState, useReducer } from "react"
import Header from "../Header/Header";

const initState = {
  kicker: 10,
}




function StateMage() {
  const [kicker, setKicker] = useState(0)
    const [counter, setCounter] =useState(0)
    const [input, setInput] = useState("")
    const counting = () =>{
        setCounter(parseInt(counter)+1)
    }

    const countingMinus = () =>{
        setCounter(counter-1)
    }

    return (
      <div>
          <Header />
         <center>
         <h1>StateManagement</h1>
        <div>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <button onClick={()=>{setCounter(input)}}>Enter</button>
        </div>
        <h1>  {counter} </h1>
        <div>
        <button onClick={counting}>Add</button>
        <button onClick={countingMinus} >Minus</button>
        </div>
         </center>
      </div>
    );
  }
  
  export default StateMage;