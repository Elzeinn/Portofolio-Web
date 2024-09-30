function ContactSection() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>If you have any questions or want to collaborate, feel free to reach out!</p>
                
                <form className="contact-form" action="https://formspree.io/f/yourformid" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
