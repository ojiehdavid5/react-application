import React from 'react'
import PriceCard from "../../../pricing/PriceCard"
import Title from "../../title/Title"

const Hprice = () => {
    return(
        <>
    <section className="hprice padding">
    <Title subtitle="Our pricing" title="pricing & packages"/>

        <div className=" price container grid">
            <PriceCard/>
            </div>

</section>


        </>

    )}

    export default Hprice;


