import React from 'react'
import Head from './Head'
import "./Header.css"
import { Link } from "react-router-dom "
const header = () => {
  return (
    <div>
      <Head/>
      <header>
        <nav className='flexSB'>
          <ul>
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
        </nav>
      </header>
    </div>
  )
}

export default header
