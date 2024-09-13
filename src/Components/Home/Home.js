import React from "react";
import "./Home.css";
import Coding from "../../img/Coding.png";

function Home() {
    return (
        <div className="a-home">
            <div className="h-top">
                <div className="h-info">
                    <h2>
                        Hi There! <span className="emoji">👋🏻</span>
                    </h2>
                    <h1>
                        I'M <span className="glow-text">Rajat Bisht</span>
                    </h1>
                    <h1>Upcoming Software Engineer</h1>
                    <div className="h-button">
                        <span>
                            <a href="https://drive.google.com/file/d/1IshGirVfQS3t0Q2_jRqQ-MQEIMI85CIq/view?usp=sharing" target="_blank" rel="noreferrer">
                                <button className="b-1">Download CV</button>
                            </a>
                        </span>
                        <span>
                            <a href="#Contact">
                                <button className="b-2">Connect</button>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="h-photo">
                    <img src={Coding} alt="reload" className="picture" />
                </div>
            </div>
            <div className="h-bottom">
                <a
                    href="http://linkedin.com/in/rajat-bisht-0b4915217"
                    target="_blank"
                    rel="noreferrer noopner"
                >
                    <i className="fa-brands fa-linkedin fa-3x"></i>
                </a>
                <a
                    href="https://github.com/Rajat7001"
                    target="_blank"
                    rel="noreferrer noopner"
                >
                    <i className="fa-brands fa-square-github fa-3x"></i>
                </a>
                <a
                    href="https://www.instagram.com/_anonymous_7001?igsh=MWMyYmh1cDE2OGwxOQ=="
                    target="_blank"
                    rel="noreferrer noopner"
                >
                    <i className="fa-brands fa-square-instagram fa-3x"></i>
                </a>
            </div>
            <div className="line">
                <hr className="line-1" />
                <hr className="line-2" />
                <hr className="line-3" />
            </div>
        </div>
    );
}
export default Home;
