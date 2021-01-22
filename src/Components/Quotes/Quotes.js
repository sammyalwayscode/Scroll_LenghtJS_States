import React, { useState } from "react"
import Header from "../Header/Header";
import "./Quotes.css"

function Quoter() {
    const quotes=[
        "Never Give Up",
        "Always Do Good",
        "Hard Work Pays",
        "Always Do The Next Right Thing",
        "I Am For God, And Will Always Work For Him"
    ];

    const [allquotes, setAllQuotes] = useState(0)
    return (
      <div>
          <Header />
         <center>
         <h1>The Best Quotes</h1>
          <h3 onClick={()=>{
              setAllQuotes(allquotes + 1)
          }}  className="quotesHold"> {quotes[allquotes % quotes.length] } </h3>
         </center>
      </div>
    );
  }
  
  export default Quoter;