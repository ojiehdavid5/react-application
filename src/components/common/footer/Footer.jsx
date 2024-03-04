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
                


                <span>
              <i className="fa fa-user"></i>
              <label htmlfor="">{val.type}</label>
            </span>
            <span>
              <i className="fa fa-calendar-alt"></i>
              <label htmlfor="">{val.date}</label>
            </span>
            <h4>{val.title}</h4>

            
            </div>
        </div>
    )})}
</div>
<div className="box last">
    <h3>Have a question?</h3>
    <ul>
        <l1>
            <i className='fa fa-map'></i>
            29,muri folami ogudu G.R.A lagos
        </l1>
        <li>
            <i className='fa fa-phone-alt'></i>
            09047247836

        </li>
        <li>
            <i className='fa fa-paper-plane'></i>
            ojiehdavid5@gmail.com
            
        </li>
    </ul>
</div>
        </div>
    </footer>
    <div className="legal">
        <p>Copyright @2022 All Right Reserved</p>
    </div>
    </>
  )
}

export default Footer
