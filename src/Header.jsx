import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default ({lambang, to, history, children}) => {
  
    const [value, setValue] = useState("");

    useEffect(()=>{
        document.title = children ? `${children} | Borneo Culture Wiki` : "Borneo Culture Wiki";
    },[]);

    return (<div className="header">
        <img src={lambang ? lambang : "/Borneo.png"} width="80" alt=""/>
        <h1><Link style={{color:"black",textDecoration:"transparent",fontSize:"30px"}} to={
            to ? to : '/'
        }> {children} </Link></h1>	
        <input onChange={ev=>{
            setValue(ev.target.value);
        }} id="query-search" onKeyPress={ev=>{
            if (ev.key == "Enter") 
                history.push("/search/" + value);
        }} placeholder="Pencarian..." type="search"/>
    </div>);

}