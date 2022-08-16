import React from 'react'
import "./footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { IoLogoXing } from "react-icons/io"

const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <a href="#" className='logo'><IoLogoXing /></a>
                <ul className='permlinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experince">Experince</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
                <div className="foter_social">
                    <a href="https://github.com/enki-somer" target={"_blank"}><BsGithub /></a>
                    <a href="www.linkedin.com/in/ahmed-a-issa-933798201" target={"_blank"}><BsLinkedin /></a>
                    <a href="https://www.facebook.com/miloventega/" target={"_blank"}><BsFacebook /></a>
                </div>
                <div className="copyright">
                    <small>&copy;All Right Receved</small>
                </div>
            </footer>
        </section>
    )
}

export default Footer