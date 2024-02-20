import React from 'react'

const CoursesCard = () => {
  return (
    <div>
        <section className="courseCard">
            <div className="container grid2">
                {CoursesCard.map((val)=>{
                    return(
                    <div className="items">
                        <div className="content flex">
                            
                            <div className="left">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                            </div>
                            <div className="text">
                                <h1>{val.coursesName}</h1>
                                <div className="rate">  
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <label htmlFor="">(5.0)</label>
                                </div>
                            </div>
                            </div> 
                    </div>
                    ) 
             })}

            </div>

            </section> 
    </div>
  )
}

export default CoursesCard
