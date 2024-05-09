import {useParams} from "react-router-dom"
import server from "../../../../server";
import React from "react";
export default function UserVansPhotos(){
    const params = useParams();
    const Vans = React.useRef(server)
    const value = Vans.current.find((van)=>van.id===params.id)
    return(
        <img style={{maxWidth:"200px"}}src={value.imageUrl}  />
    );
}