import React from 'react'
import { blog } from "../../dummydata"
import "./blog.css"

const BlogCard = () => {
  return (
    <>
    { blog.map((val)=>(
      <div className="items shadow">
        <div className="img">
          <img src={val.cover} alt=""/>

        </div>
        <div className="text">
          <div className="admin flexSB">
            <span>
              <i className="fa fa-user"></i>
              <label htmlfor="">{val.type}</label>
            </span>
            <span>
              <i className="fa fa-calendar-alt"></i>
              <label htmlfor="">{val.date}</label>
            </span>
            <span>
              <i className="fa fa-comments"></i>
              <label htmlfor="">{val.com}</label>
            </span>
          </div>
          <h1>{val.title}</h1>
          <p>{val.desc}</p>
        </div>




      </div>
    ))}
      
    </>
  )
}

export default BlogCard
