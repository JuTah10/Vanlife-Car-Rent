import { Link } from "react-router-dom"
export default function Van({id,imageUrl,name,price,type,state}){
    
    return(
        <Link state={state} to= {id}>
            <div key={id} className="van">
                <img className="image" src={imageUrl}></img>
                <div className="details">
                    <div className="name">{name}</div>
                    <div className="price">
                        <div className="price-1">${price}</div>
                        <div className="price-2">/day</div>
                    </div>
                </div>
                <div className={"type " + type}>{type[0].toUpperCase()+type.substring(1)}</div>
            </div>
        </Link>
        
    );
    
}