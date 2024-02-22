import { useState } from 'react';

function ContactLinks () {
    return (
        <section className="contact-links">
            <div className="link">
                <h3>Email</h3> 
                <p><a href = "mailto:ashleyh5440@gmail.com">ashleyh5440@gmail.com</a></p>
            </div>
            <div className="link">
                <h3>GitHub</h3> 
                <p><a href="https://github.com/ashleyh5440" target="_blank">ashleyh5440</a></p>
            </div>
            <div className="link">
                <h3>LinkedIn</h3> 
                <p><a href="https://www.linkedin.com/in/ashley-hill-63b209154/" target="_blank">Ashley Hill</a></p>
            </div>
        </section>
    );
};

export default ContactLinks;