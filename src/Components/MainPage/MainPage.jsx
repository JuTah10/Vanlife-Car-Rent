import { Link } from "react-router-dom"
import "./MainPage.css"
export default function MainPage(){
    return(
        <div className="main-page">
            <div className="main-main">
                <div className="slogan">
                    <div className="first-half">You got the travel plans, we got the travel vans</div>
                    <div className="second-half">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip</div>
                </div>
                <button><Link to="/vans">Find your vans</Link></button>
            </div>
        </div>
    );
}