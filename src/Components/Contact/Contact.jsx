import React from 'react'
import "./contact.css"
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xnr7wej', 'template_4k5tc9m', form.current, 'Lk0i_udYbnPITqouO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <HiOutlineMail className='co_icon' />
                        <h4>E-mail</h4>
                        <h5>xahmedammar@gmail.com</h5>
                        <a href="mailto:xahmedammar@gmail.com" target={'_blank'}>Send A Message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='co_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+9647805628606</h5>
                        <a href="https://api.whatsapp.com/send?phone=009647805628606" target={'_blank'}>Send A Message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" rows="7" placeholder='Type Your Message' style={{ resize: "none" }}></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact