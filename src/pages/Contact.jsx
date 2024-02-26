import { useState, useEffect } from 'react';
import 'animate.css';
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

    useEffect(() => {
        emailjs.init("xQBDGz01GePOVKots");
    }, []);

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
        emailjs.send('service_jhx2cty', 'template_t9fklkg', {
            from_name: name,
            reply_to: email,
            message: message,
        }).then((response) => {
            setUserMessage("Email sent!");
            setFormState({name: '', email: '', message: ''});
        }).catch((error) => {
            setUserMessage("Error; please try again later.")
        });
    };

  return (
    <section className="contact-container">
        <img id="contact-img" src={contactPic} />
        <h1 className="animate__animated animate__heartBeat animate__infinite">Send me a message!</h1>
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

