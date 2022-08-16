import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
    return (
        <header>
            <div className="container header__container">

                <h1>Hello, I'm Ahmed.</h1>
                <h4 >Welcome To My Website!</h4>
                <CTA />

                <HeaderSocial />

                <a href="#about" className='scroll__down'>Scroll Down </a>
                <div className="iconDown">
                    <a href="#about">  <IoIosArrowDown /></a>
                </div>


            </div>
        </header>
    )
}

export default Header