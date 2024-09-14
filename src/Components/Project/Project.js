import React from "react";
import './Project.css'
import Weather from '../../img/Weather.png'
import Personal from '../../img/Personal.png'
import Path from '../../img/Path.png'

function Project() {
    return (
        <div className="p-project">
            <h1 className="heading">Projects</h1>
            <div className="p-card">
                <div className="p-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="image_overlay">
                        <div className="image_title">
                            <p className="image_des">
                                A console-based application that manages accouts, transactions, and customer details using file headling for data storage
                            </p>
                        </div>
                    </div>
                    <h2>Banking System</h2>
                    <img src={Weather} alt="reload" className="p-img" />
                    <div className="p-icon">
                        <a href="https://github.com/Rajat7001/Banking-Record-System" target='_blank' rel='noreferrer noopner'><i className="fa-regular fa-circle-play fa-2x"></i></a>
                        <a href="https://github.com/Rajat7001/Banking-Record-System" target='_blank' rel='noreferrer noopner'><i className="fa-solid fa-code fa-2x"></i></a>
                    </div>
                </div>
                <div className="p-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="image_overlay">
                        <div className="image_title">
                            <p className="image_des">
                                A portfolio website built with react js
                            </p>
                        </div>
                    </div>
                    <h2>Portfolio Website</h2>
                    <img src={Personal} alt="reload" className="p-img" />
                    <div className="p-icon">
                        <a href="/"><i className="fa-regular fa-circle-play fa-2x"></i></a>
                        <a href="/" target="_blank" rel='noreferrer noopner' ><i className="fa-solid fa-code fa-2x"></i></a>
                    </div>
                </div>
                <div className="p-one" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                    <div className="image_overlay">
                        <div className="image_title">
                            <p className="image_des">
                                Work on progress........
                            </p>
                        </div>
                    </div>
                    <h2>Algorithm Visualizer</h2>
                    <img src={Path} alt="reload" className="p-img" />
                    <div className="p-icon">
                        <a href="https://rajat7001.github.io/Algorithm-Visulaizer/"><i className="fa-regular fa-circle-play fa-2x"></i></a>
                        <a href="https://github.com/Rajat7001/Algorithm-Visulaizer"><i className="fa-solid fa-code fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;
