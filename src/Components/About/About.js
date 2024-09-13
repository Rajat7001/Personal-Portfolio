import React from "react";
import "./About.css";

function About() {
    return (
        <div className="m-About">
            <div
                className="a-info"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <h1>ABOUT ME</h1>
                <p>
                    HI! I am a Final year undergrad at Graphic Era Hill University
                    pursuing a Bachelor of Technology majoring in Computer Science and
                    Engineering. I am a passionate Programmer and love giving structure to
                    my ideas using coding and I hope to pursue a career in that field
                    after graduation.
                </p>
                <div className="b-btn">
                    <a href="#Contact">
                        <button className="a-btn">Connect</button>
                    </a>
                </div>
            </div>
            <div className="a-acad">
                <h1>ACADEMICS</h1>
                <div
                    className="h-scl"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                >
                    <i className="fa-solid fa-graduation-cap fa-2x">
                        <span>2018-2019</span>
                    </i>
                    <h1>High School | Sanwal School | Nainital</h1>
                    <h2>74%</h2>
                </div>
                <div
                    className="i-scl"
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                >
                    <i className="fa-solid fa-graduation-cap fa-2x">
                        <span>2019-2020</span>
                    </i>
                    <h1>Intermediate | S.t Xavier,s School | Nainital</h1>
                    <h2>80%</h2>
                </div>
                <div
                    className="b-tech"
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <i className="fa-solid fa-graduation-cap fa-2x">
                        <span>2020-Present</span>
                    </i>
                    <h1>B.Tech | Graphic Era Hill University | Bhimtal</h1>
                    <h2>(8.25/10) CGPA</h2>
                </div>
            </div>
        </div>
    );
}
export default About;
