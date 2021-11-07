import React, {useState, useEffect} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./styles/index.css"
import Footer from "./Footer";

export default ({history}) => {
    const [provinsi,setProvinsi] = useState([
        {url:"kalimantan-timur",nama:"Kalimantan Timur"},
        {url:"kalimantan-utara",nama:"Kalimantan Utara"},
        {url:"kalimantan-barat",nama:"Kalimantan Barat"},
        {url:"kalimantan-selatan",nama:"Kalimantan Selatan"},
        {url:"kalimantan-tengah",nama:"Kalimantan Tengah"},
    ]);
    useEffect(()=>{
        document.title = "Borneo Culture Wiki";
    },[]);
    return (<>
        <Header history={history}>Borneo Culture Wiki</Header>
        <div className="banner"><img src="/images/kalimantan.png" alt="Peta Kalimantan"/></div>
        <div className="conten" style={{textAlign: 'center'}}>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
                {provinsi.map(val=>(
                    <li key={val.url}><Link to={`/provinsi/${val.url}`}>{val.nama}</Link></li>
                ))}
        </ul>
    </div>
    </>);
}

