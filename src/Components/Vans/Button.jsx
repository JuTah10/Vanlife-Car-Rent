export default function Button({type,key,...props}){
    return(
        <button {...props} key={key} className={"button button-"+type}>{type}</button>
    );
}