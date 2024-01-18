import React from 'react'
import Head from './Head'
import {useState} from 'react'

import "./Header.css"
import { Link } from "react-router-dom" 
const Header = () => {
  const [click,setClick]=useState(false);

  return (

    <div>
      <Head/>
      <header>
        <nav className='flexSB'>
        <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/courses">All courses</Link></li>
            <li> <Link to="/About">About</Link></li>
            <li> <Link to="/Team">Team</Link></li>
            <li> <Link to="/Pricing">Pricing</Link></li>
            <li> <Link to="/Journal">Journal</Link></li>
            <li> <Link to="/Contact">Contact</Link></li>
          </ul>

          <div className="start">

            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle"  onClick={() => setClick(!click)}></button>
          {click?<i className='fab fa-times'></i>:<i className='fab fa-bars'></i>
 }

        </nav>
      </header>
    </div>
  )
}

export default Header
