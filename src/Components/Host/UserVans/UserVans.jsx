import VansData from "../../../server";
import { Link } from "react-router-dom"
import React from "react";
import "./UserVans.css"
export default function UserVans(){
    const [vans,setVans] = React.useState(VansData)
    const [userVans,setUserVans] = React.useState([vans[0],vans[1],vans[5]])
    console.log(userVans)
    return(
        <div className="host-vans-userVans">
            <div className="userVans-title">Your listed vans</div>
            <div className="userVans-display">
                {userVans.map((userVan)=>{
                    return(
                        <Link to={`/host/uservans/${userVan.id}`} className="userVan">
                            <img src={userVan.imageUrl} className="userVans-image"></img>
                            <div className="userVan-description">
                                <div className="userVan-description-title">{userVan.name}</div>
                                <div className="userVan-description-price">${userVan.price}/day</div>
                                <div className="userVan-description-description">{userVan.description}</div>
                            </div>
                        </Link>
                      
                    );
                })}
            </div>
        </div>
    );
}