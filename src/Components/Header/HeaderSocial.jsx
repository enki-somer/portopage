import React from 'react'
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://github.com/enki-somer" target={"_blank"}><BsGithub /></a>
            <a href="www.linkedin.com/in/ahmed-a-issa-933798201" target={"_blank"}><BsLinkedin /></a>
            <a href="https://www.facebook.com/miloventega/" target={"_blank"}><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial