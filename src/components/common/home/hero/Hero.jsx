import React from 'react'
import './Hero.css'
import Title from '../../title/Title'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
            <div className="row">
              <Title subtitle='WELCOME TO ACADEMIA'   title='Best Online Education'/>
                <p>All rights reserved. No part of this book shall be reproduced, stored in a retrieval system, or transmitted by any means, electronic, mechanical, photo- copying, recording, or otherwise, without written permission from the pub- lisher. No patent liability is assumed with respect to the use of the information contained herein.</p>
                <div className="button">
                  <button className="primary-btn">
                    GET STARTED NOW       <i className='fa fa-long-arrow-alt-right '></i>

                  </button>
                  <button >
                    VIEW COURSE      <i className='fa fa-long-arrow-alt-right '></i>

                  </button>
            
                </div>
            </div>
        </div>
    </section>
    <div className="margin"></div>
    </>
  )
}

export default Hero
