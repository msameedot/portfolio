import React, { useRef, FormEvent } from 'react';
import './Contact.sass';
import client1 from '../../assets/biolife.jpg';
import client2 from '../../assets/authenticPerfumes.png';
import client3 from '../../assets/griffton.png';
import client4 from '../../assets/nagi.png';
import Facebook from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import Twitter from '../../assets/twitter.png';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        // Ensure that the form reference is not null before using it
        if (form.current) {
            emailjs.sendForm('service_h05gtjx', 'template_d5r1kdm', form.current, 'rMrHj4Pr41KbCf9G9gonT')
                .then((result: any) => {
                    console.log(result.text);
                    (e.target as HTMLFormElement).reset();
                    alert('Email sent');
                })
                .catch((error: any) => {
                    console.error(error.text);
                });
        }
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I've had the privilege of collaborating with a varied range of companies. Among the noteworthy ones are:
                </p>
                <div className="clientImgs">
                    <img src={client1} alt="client1" className="clientImg" />
                    <img src={client4} alt="client4" className="clientImg" />
                    <img src={client2} alt="client2" className="clientImg" />
                    <img src={client3} alt="client3" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Kindly complete the form provided below to initiate a conversation regarding potential work opportunities.
                </span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                    <input type="email" className="email" placeholder="Your Email" name='your email' />
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button type="submit" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Facebook} alt="Facebook" className="link" />
                        <img src={Instagram} alt="Instagram" className="link" />
                        <img src={Twitter} alt="Twitter" className="link" />
                        <img src={Youtube} alt="Youtube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
