import React from 'react'
import "./about.css"
import BG from '../Assets/gh.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { SiPolymerproject } from 'react-icons/si'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about_img">
                        <img src={BG} alt="about image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='abot_card'>
                            < FaAward className='about_icon' />
                            <h5>Experince</h5>
                            <small className='text-light'>1+ Years of self taught</small>
                        </article>
                        <article className='abot_card'>
                            <FiUsers className='about_icon' />
                            <h5>Vision</h5>
                            <small className='text-light'>Modren & distinctive</small>
                        </article>
                        <article className='abot_card'>
                            <SiPolymerproject className='about_icon' />
                            <h5>Projects</h5>
                            <small className='text-light'>Bring the idea to reality</small>
                        </article>

                    </div>
                    <p className='text-light'>The modern vision to create distinctive content worthy of creative ideas and discreet goals to come up with an attractive interface that speaks for itself</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About