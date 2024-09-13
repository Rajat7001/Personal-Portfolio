import React from "react";
import "./Contact.css";
import Gits from "../../img/Gits.png";

function Contact() {
    return (
        <div className="c-main">
            <div className="c-text">
                <div className="c-head">
                    <h1
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        Get In Touch
                    </h1>
                    <img src={Gits} alt="reload" className="c-img" />
                </div>
                <div className="c-icon">
                    <a
                        href="https://telegram.org/dl"
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-telegram fa-1x"></i>
                    </a>
                    <a
                        href="https://github.com/Rajat7001"
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-github fa-1x"></i>
                    </a>
                    <a
                        href="https://wa.me/8958081603"
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-square-whatsapp fa-1x"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/_anonymous_7001?igsh=MWMyYmh1cDE2OGwxOQ=="
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-instagram fa-1x"></i>
                    </a>
                    <a
                        href="https://www.facebook.com/share/nJqMu1GzSYQ8TQsD/?mibextid=qi2Omg"
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-facebook fa-1x"></i>
                    </a>
                    <a
                        href="#contact"
                        target="_blank"
                        rel="noreferrer noopner"
                    >
                        <i className="fa-brands fa-discord fa-1x"></i>
                    </a>
                </div>
            </div>
            <div className="form" data-aos="zoom-out-down">
                <form action="https://formspree.io/f/mqkolpyd" method="POST">
                    <div className="input-container">
                        <label htmlFor="username" className="f-label">
                            Name
                        </label>
                        <input
                            placeholder="Enter your Name"
                            type="text"
                            name="username"
                            className="f-input"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="Email" className="f-label">
                            Email
                        </label>
                        <input
                            placeholder="xyz@gmail.com"
                            type="email"
                            name="Email"
                            className="f-input"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="Message" className="f-label">
                            Message
                        </label>
                        <textarea
                            placeholder="Type you message here..."
                            type="text"
                            name="Message"
                            className="f-input f-textarea"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="s-btn">
                        <button type="submit" className="s-send">
                            Send <i className="fa-regular fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
