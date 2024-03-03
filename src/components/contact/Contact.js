import React from 'react'
 import Back from "../common/back/Back"


const Contact = () => {
  const data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.566952476042!2d3.3845706750305418!3d6.5762066225485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92850c978757%3A0x5e5635f111f66d9d!2s29%20Muri%20Folami%20St%2C%20Ojota%2C%20Lagos%20105102%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1709491243553!5m2!1sen!2sus" ;
  return (
    <>
    <Back title="Contact Us"/>
    <section className='contact padding'>
        <div className='container shadow flexSB'>
            <div className='left row'>
                <iframe src={data}></iframe>
            </div>
            <div className='right row'>
              <h1>Contact us</h1>
              <p>Lorem20xE41d2489571d322189246DaFA5ebDe1F4699F498</p>


              <div className='items grid2'>
                <div className='box'>
                  <h4>ADDRESS:</h4>
                  <p>29 muri folami ogudu G.R.A lagos </p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p>ojiehdavid5@gmail.com</p>
                </div>
              </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Contact
