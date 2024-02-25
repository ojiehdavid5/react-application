import React from 'react'
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import Faq from "./Faq"

const price = () => {
  return (
    <>
    <Back title="chose the right plan"/>
    <section className="price padding">
        <div className="container grid">
            <PriceCard/>

        </div>
    </section>
    <Faq/>

      
    </>
  )
}

export default price
