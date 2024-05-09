import React from "react";
import { useParams } from "react-router-dom";
import VansData from "../../../../server";
import "./UserVansSharedUI.css"
export default function UserVansDetails(){
   
    const params = useParams();
    const [vans,setVans] = React.useState(VansData);

    const value = vans.find((van)=> van.id === params.id)
 
    return(
        <div className="UserVansDetails-container">
            {/*link goes here */}
            <div className="UserVansSharedUI-content-container">
                <img src={value.imageUrl}  />
                <div className="UserVansDetails-container-description">
                    <div className={"type "+value.type}>{value.type[0].toUpperCase(0) + value.type.substring(1)}</div>
                    <div>
                        <div className="UserVansDetails-container-name">{value.name}</div>
                        <div className="UserVansDetails-container-price"><strong>${value.price}</strong>/day</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}