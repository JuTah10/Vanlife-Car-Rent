import { NavLink } from "react-router-dom"
import "./UserVansnav.css"

export default function UserVansNav(){
    return(
        <div className="UserVansNav-container">
            <NavLink end className={({isActive})=> isActive ? "isActive": ""} to=".">Details</NavLink>
            <NavLink className={({isActive})=> isActive ? "isActive": ""} to="price">Price</NavLink>
            <NavLink className={({isActive})=> isActive ? "isActive": ""} to="photos">Photos</NavLink>
        </div>
    );
}