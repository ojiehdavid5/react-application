import React from 'react'
import "./footer.css"
import {blog} from "../../../dummydata"

const Footer = () => {
  return (
    <>
    <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>NewsLetter</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi molestias quaerat praesentium dignissimos delectus sequi, aperiam beatae atque laudantium libero.</span>
            </div>

            <div className="right row">
                <input type="text" placeholder="Enter email"/>
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>
    <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>ACADEMIA</h1>
                <span>online education & learning</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa eum harum placeat perspiciatis voluptates nam dolorem numquam, quisquam debitis?</p>
                <i className='fab fa-facebook-f icon'></i>
      <i className='fab fa-instagram icon'></i>
      <i className='fab fa-twitter icon'></i>
      <i className='fab fa-youtube icon'></i>

            </div>
            <div className="box link">
                <h3>Explore us</h3>
                <ul>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                    <li>About us</li>
                </ul>
            </div>
<div className="box">
    <h3>Recent post</h3>
    {blog.slice(0,3).map((val)=>{
        return(
        <div className="items flexSB">

            <div className="img">
                <img src={val.cover} alt=''/>
            </div>
            <div className="text">
                <span></span>
            </div>
        </div>
    )})}
</div>
        </div>
    </footer>
    </>
  )
}

export default Footer
