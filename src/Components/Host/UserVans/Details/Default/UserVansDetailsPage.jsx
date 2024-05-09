import {useParams} from "react-router-dom"
import React from "react";
import VansData from "../../../../../server";
import "./Default.css"
export default function UserVansDetailsPage(){
    const Params = useParams();
    const Vans = React.useRef(VansData)
    const value = Vans.current.find((van)=> van.id === Params.id)
   
    return(
        <div className="UserVansDetailsPage-container">
            <div><strong>Name: </strong>{value.name}</div>
            <div><strong>Category: </strong>{value.type}</div>
            <div><strong>Description: </strong>{value.description}</div>
            <div><strong>Visibility: </strong>Public</div>
        </div>
    );
}