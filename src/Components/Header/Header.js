import React from "react"
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
      <div className="GeneralHeader">
          <div className="widthHead">
            <div className="HeaderTextHold">
               <Link className="HeaderTextHold" to="/"> <p>Home</p></Link>
                <Link className="HeaderTextHold" to='/quotes'> <p>Quotes</p></Link>
               <Link className="HeaderTextHold" to="/statemage"> <p>State Managenment</p></Link>
               <Link className="HeaderTextHold" to="/countdown"> <p>CountDown</p> </Link>
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;