import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../utils/helpers';
import ContactLinks from '../components/ContactLinks';
import contactPic from '../assets/contact-img.png';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    const [userMessage, setUserMessage] = useState('');

    const handleInputChange = (e) => {
        setFormState({
            ...formState, [e.target.name]: e.target.value
        });
    };

    const handleValidation = (e) => {
        if (e.target.name === "email"){
            if (!validateEmail (e.target.value)){
                setUserMessage("Invalid Email");
            }else {
                setUserMessage("");
            }
        }else {
            if (!e.target.value.length) {
                setUserMessage("Required");
            }else {
                setUserMessage("");
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setUserMessage("Email sent!");
        setFormState({name: "", email: "", message: ""});
        //email js package to send actual email
    };

  return (
    <section className="contact-container">
        <img id="contact-img" src={contactPic} />
        <h1>Send me a message!</h1>
        <div className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="First and last name" value={name} name="name" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlInput2">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} name="email" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} value={message} name="message" onChange={handleInputChange} onBlur={handleValidation}/>
                </Form.Group>
                {userMessage && <div>{userMessage}</div>}
                <Button variant="primary" type="submit" id="form-submit-btn" onClick={handleFormSubmit}>Submit</Button>
            </Form>
        </div>
        <h1>You can also get in touch with me through:</h1>
        <div>
            <ContactLinks />
        </div>
    </section>
  );
};

export default Contact;

