import { useLocation } from "react-router-dom"
export default function Login(){
    const Location = useLocation();
    
   
    return(
     
       
        <div> 
            {Location.state?.prevPage === "host" && <div>You have to login first</div>}
            <div>This is a login page</div>
        </div>
    );
}