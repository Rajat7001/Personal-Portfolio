import { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <div className="sticky">
                <nav>
                    <h2>Rajat</h2>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar ul-active" : "#navbar"}>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Project">Project</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar"
                            className={this.state.clicked ?
                                "fa-regular fa-circle-xmark" : "fa-solid fa-bars"}
                        ></i>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;