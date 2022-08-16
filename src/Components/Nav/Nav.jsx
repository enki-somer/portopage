import React from 'react'
import "./nav.css"
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { SiAltiumdesigner } from 'react-icons/si'
import { useState } from 'react'

const Nav = () => {
    const [ativeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")} className={ativeNav === "#" ? "active" : ""}> < AiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav("#about")} className={ativeNav === "#about" ? "active" : ""}><BiUser /></a>
            <a href="#experince" onClick={() => setActiveNav("#experince")} className={ativeNav === "#experince" ? "active" : ""}><BiBook /></a>
            <a href="#services" onClick={() => setActiveNav("#services")} className={ativeNav === "#services" ? "active" : ""}><RiServiceLine /> </a>
            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={ativeNav === "#portfolio" ? "active" : ""}><SiAltiumdesigner /></a>
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={ativeNav === "#contact" ? "active" : ""}> <BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav