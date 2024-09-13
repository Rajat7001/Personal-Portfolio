import React from "react";
import Html from "../../img/Html.png";
import Csss from "../../img/Csss.png";
import Javascript from "../../img/Javascript.png";
import ReactLogo from "../../img/ReactLogo.png";
import Nodejss from "../../img/Nodejss.png";
import Php from "../../img/Php.png";
import Bootstrap from "../../img/Bootstrap.png";
import Express from "../../img/Express.png";
import Clanguage from "../../img/Clanguage.png";
import Cplus from "../../img/Cplus.png";
import Myysql from "../../img/Myysql.png";
import Mongodb from "../../img/Mongodb.png";
import './Skills.css'

function Skills() {
    return (
        <section className="s-skills">
            <header>Skills</header>
            <div className="skill">
                <div className="set" data-aos="flip-up">
                    <header>Web Development</header>
                    <div className="list">
                        <label>Html</label>
                        <img src={Html} alt="reload" />
                    </div>
                    <div className="list">
                        <label>Css</label>
                        <img src={Csss} alt="reload" />
                    </div>
                    <div className="list">
                        <label>JavaScript</label>
                        <img src={Javascript} alt="reload" />
                    </div>
                    <div className="list">
                        <label>PHP</label>
                        <img src={Php} alt="reload" />
                    </div>
                    <div className="list">
                        <label>React</label>
                        <img src={ReactLogo} alt="reload" />
                    </div>
                </div>
                <div className="set" data-aos="flip-up">
                    <header>Framework</header>
                    <div className="list">
                        <label>NodeJS</label>
                        <img src={Nodejss} alt="reload" />
                    </div>
                    <div className="list">
                        <label>Bootstrap</label>
                        <img src={Bootstrap} alt="reload" />
                    </div>
                    <div className="list">
                        <label>Express</label>
                        <img src={Express} alt="reload" />
                    </div>
                </div>
                <div className="set" data-aos="flip-up">
                    <header>Languages</header>
                    <div className="list">
                        <label>C </label>
                        <img src={Clanguage} alt="reload" />
                    </div>
                    <div className="list">
                        <label>C++</label>
                        <img src={Cplus} alt="reload" />
                    </div>
                </div>
                <div className="set" data-aos="flip-up">
                    <header>Databases</header>
                    <div className="list">
                        <label>My Sql</label>
                        <img src={Myysql} alt="reload" />
                    </div>
                    <div className="list">
                        <label>MongoDb</label>
                        <img src={Mongodb} alt="reload" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;