import { useState } from 'react';

function ContactLinks () {
    return (
        <section className="contact-links">
            <div className="link">
                <h3>Email</h3> 
                <p>ashleyh5440@gmail.com</p>
            </div>
            <div className="link">
                <h3>GitHub</h3> 
                <p>ashleyh5440</p>
            </div>
            <div className="link">
                <h3>LinkedIn</h3> 
                <p>Ashley Hill</p>
            </div>
        </section>
    );
};

export default ContactLinks;