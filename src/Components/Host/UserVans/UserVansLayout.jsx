import UserVansDetails from "./Shared UI/UserVansSharedUI";
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import UserVansNav from "./UserVansNav/UserVansNav";
import "./UserVansLayout.css"
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function UserVansLayout(){
    return(
        <div className="UserVansLayout-page-container">
            <div className="back-to-all-vans-container">
                <FaLongArrowAltLeft /> 
                <Link className="back-to-all-vans" to=".." relative="path">Back to all vans</Link>
            </div>
            
            <div className="UserVansLayout-page">
                <UserVansDetails/>
                <UserVansNav/>
                <Outlet/>
           </div>
        </div>
   
    );
}