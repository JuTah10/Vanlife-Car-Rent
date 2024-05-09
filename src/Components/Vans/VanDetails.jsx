import React from "react";
import { useParams,Link,useLocation } from "react-router-dom"
import server from "../../server"
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./Vans.css"
export default function VanDetail(){
    const params = useParams();
    const location = useLocation()
    const prevPage = location.state.search !== "" ? location.state.search.replace("type=","") : location.state.search
    console.log(params,location,prevPage)
    const [vans, setVans] = React.useState(server)
    const value = vans.find((van)=> van.id===params.id)
    
    return(
        <div className="vans-details-page">
            <div style={{marginBottom: "30px"}}className="back-to-all-vans-container">
                <FaLongArrowAltLeft /> 
                <Link className="back-to-all-vans" to={`..?${location.state.search}`} relative="path">Back to {prevPage || "all"} vans</Link>
            </div>
            <img src={value.imageUrl}></img>
            <div className="description">
                <div className={"type " + value.type}>{value.type[0].toUpperCase()+value.type.substring(1)}</div>
                <div className="vans-details-name">{value.name}</div>
                <div className="vans-details-price"><strong>${value.price}</strong>/day</div>
                <div className="vans-details-description">{value.description}</div>
                <button className={value.type}>Rent this van</button>
            </div>


        </div>
    );
}