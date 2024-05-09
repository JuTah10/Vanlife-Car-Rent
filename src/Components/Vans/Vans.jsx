import React from "react";
import server from "../../server"
import Van from "./Van";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import "./Vans.css"

export default function Vans(){
    const [vans, setVans] = React.useState(server)
    const buttonType = React.useRef(["Simple","Luxury","Rugged"])

    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type")
    const displayType = typeFilter ? vans.filter((van)=>van.type===typeFilter) : vans
    
    const vansElement = displayType.map((van)=>{
        return <Van state={{search: searchParams.toString()}}
                    id={van.id}
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    type={van.type}/>
    })

    return(
       
            <div className="vans-page">
                <div style={{fontSize:"40px",fontWeight:"700"}}className="vans-title">Explore our van options</div>
                <div className="vans-buttons">
                    {buttonType.current.map((button)=>{
                        return <Button 
                        onClick={()=>setSearchParams({type:button.toLowerCase()})}
                        type={button}
                        key={button}/>
                        
                    })}
                    {typeFilter && <div onClick={()=>setSearchParams({})} className="clear-filters">Clear filters</div>}
                </div>
                <div className="vans-list">{vansElement}</div>
            </div>
    
        
    );
}



//    React.useEffect(() => {
//        fetch("/api/vans").then(res => res.json()).then(data => setVans(data.vans))
//     }, [])