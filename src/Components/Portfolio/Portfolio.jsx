import React from 'react'
import "./portfolio.css"
import Data from './Data'

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container port_container">
                {
                    Data.map(({ id, img, title }) => {
                        return (
                            <article key={id} className='port_item'>
                                <div className="port_img">
                                    <img src={img} alt="img" />
                                </div>
                                <h3>This is a portfolio item</h3>
                                <div className="port_cta">
                                    <a href={title} className='btn btn-primary' target="_blank">Take a look</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio