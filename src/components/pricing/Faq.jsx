import React from 'react'
import Title from "../common/title/Title"
import { faq } from "../../dummydata"

const Faq = () => {
  return (
    <>
      <Title subtitle="FAQS" title="Frequently AskQuestion"/>
      <section className="faq">
        <div className="container">
            {faq.map((val)=>(
                <div className="box">
                    <button>
                        <h2>{val.title}</h2>
                    </button>
                    <div className="text">
                        <p>{val.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

    </>
  )
}

export default Faq
