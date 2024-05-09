import "./About.css"
import image from "./about-image.png"
import { Link } from "react-router-dom"

export default function About(){
    return(
        <div className="about">
            <img className="about-image" src={image}></img>
            <div className="main-body">
                
                <div className="about-title">
                    Don't squeeze in a sedan when you could relax in a van.
                </div>
                <div className="about-des-1">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertifed before each trip to ensure your travel plans can go off without a hitch.<br/>(Hitch costs extra 😉)
                </div>
                <div className="about-des-2">
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </div>
                <div className="about-endline">
                    <div className="end-statement">Your destination is waiting.<br/>Your van is ready.</div>
                    <Link to="/vans"><button>Expore our vans</button></Link>
                </div>
            </div>
            <footer></footer>
        </div>
    );
}