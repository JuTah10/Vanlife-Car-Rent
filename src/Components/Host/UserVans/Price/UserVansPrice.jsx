import { useParams } from "react-router-dom"
import server from "../../../../server";
import React from "react";
export default function UserVansPrice(){
    const params = useParams();
    const Vans = React.useRef(server)
    const value = Vans.current.find((van)=> van.id===params.id)
    return(
        <div style={{fontSize: "25px"}}><strong style={{fontSize:"30px"}}>${value.price}</strong>/day</div>
    );
}