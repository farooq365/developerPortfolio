import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5jqh8hb', 'template_rty7pw9', e.target, 'user_85OBmKIItCcMJyc4bEeMj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="container" style={{ marginTop: '30px' }}>
            <div className="row">
                <div className="col-md-5 d-flex align-items-center justify-content-center border">
                    <div>
                        <h2>Contact Me</h2>
                        <div className="text-white">
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+8801788262433" className="m-1 text-white text-decoration-none">01788262433</a>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelopeSquare}/>
                            <a href="mailto:mojnu.cse.pust@gmail.com" className="m-1 text-white text-decoration-none">mojnu.cse.pust@gmail.com</a>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="col-md-7">
                    <form onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name <span>*</span></label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Sakib Khan" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput2" className="form-label">Email <span>*</span></label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message <span>*</span></label>
                            <textarea className="form-control input-bg" id="message" name="message" rows="6" required></textarea>
                        </div>
                        <div className="row p-2">
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;