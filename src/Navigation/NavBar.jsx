import { NavLink } from "react-router-dom"
import { LuUserCircle } from "react-icons/lu";
import "./NavBar.css"
export default function NavBar(){
    return(
        <div className="nav-bar">
            {/* <NavLink
                        className={({isActive}) => {
                        console.log(`Path: ${window.location.pathname}, isActive: ${isActive}`)
                        return isActive ? "logo isActive" : "logo"
                    }} to="/"> #VANLIFE </NavLink> */}
                <NavLink to="/" className="logo">#VANLIFE</NavLink>

            <div className="option">
                <NavLink className={({isActive})=> isActive?"host isActive":"host"} to="/host">Host</NavLink>
                <NavLink className={({isActive})=> isActive?"about isActive":"about"} to="/about">About</NavLink>
                <NavLink className={({isActive})=> isActive?"vans isActive":"vans"} to="/vans">Vans</NavLink>
                <NavLink className={({isActive})=>isActive?"login-icon isActive":"login-icon"}to="login"><LuUserCircle size="1.5rem"/></NavLink>
            </div>
        </div>
    );
}