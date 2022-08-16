import React from 'react'
import "./experince.css"
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const Experince = () => {
    return (
        <section id='experince'>
            <h5>What Skills I have ?</h5>
            <h2>My Experince</h2>
            <div className="container exp_container">
                <div className="exp_frontend">
                    <h3>Frontend Development </h3>
                    <div className="exp_content">
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>Bootstrab</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>WordPress</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="exp_backend">
                    <h3>Backend Development </h3>
                    <div className="exp_content">
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>Git & github</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>API</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>
                        <article className='exp_details'>
                            <HiOutlineBadgeCheck className='exp_icon' />
                            <div>
                                <h4>MYSQL</h4>
                                <small className='text-light'>Experinced</small>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experince