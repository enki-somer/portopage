import React from 'react'
import "./services.css"
import { BiCheck } from 'react-icons/bi'
const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container serv_container">
                <article className="serv">
                    <div className="serv_head">
                        <h3>UX/UI</h3>
                    </div>
                    <ul className='serv_list'>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Figma, Deign & exporting codes.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Adobe Illustrator, creating vectors.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Adobe Photoshop, editing and designing.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>phenominal creativ ideas.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Knowldge of modren & UX/UI designe</p>
                        </li>
                    </ul>
                </article>
                <article className="serv">
                    <div className="serv_head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className='serv_list'>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>User experience (UX)</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>User interface (UI).</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Visual design</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Coding languages including HTML and CSS</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Frontend web programing languages and skills.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Understanding of SEO .</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Excellent problem-solving skills & logical thinking</p>
                        </li>
                    </ul>
                </article>

                <article className="serv">
                    <div className="serv_head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='serv_list'>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Researching industry-related.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Preparing well-structured drafts .
                            </p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Edit and proofread written pieces.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Conduct keyword research using SEO.</p>
                        </li>
                        <li>
                            <BiCheck className='serv_icon' />
                            <p>Coordinating with marketing and design teams.</p>
                        </li>
                    </ul>
                </article>
            </div>

        </section>
    )
}

export default Services