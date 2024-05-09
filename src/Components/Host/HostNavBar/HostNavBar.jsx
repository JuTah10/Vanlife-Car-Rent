import "./HostNavBar.css"
import { NavLink } from "react-router-dom"
export default function HostNavBar(){
    return(
        <div className="host-nav-container">
            <NavLink end className={({isActive})=> isActive ? "host-nav-dashboard isActive": "host-nav-dashboard"} to="/host">Dashboard</NavLink>
            <NavLink className={({isActive})=> isActive ? "host-nav-income isActive": "host-nav-income"} to="/host/income">Income</NavLink>
            <NavLink className={({isActive})=> isActive? "host-nav-vans isActive":"host-nav-vans"}to="/host/uservans">Vans</NavLink>
            <NavLink className={({isActive})=> isActive ? "host-nav-reviews isActive": "host-nav-reviews"} to="/host/reviews">Reviews</NavLink>   
        </div>
    );
}