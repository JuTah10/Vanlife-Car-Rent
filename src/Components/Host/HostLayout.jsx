import { Outlet,Navigate } from "react-router-dom"
import HostNavBar from "./HostNavBar/HostNavBar";
export default function HostLayout(){
    const authenticated = false;
   
    return(
        <>
            <HostNavBar/>
            {
                !authenticated? <Navigate state={{prevPage : "host"}} to="/login"/> : <Outlet/>
            }
        
        </>
    );
}