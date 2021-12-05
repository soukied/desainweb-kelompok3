import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import './styles/provinsi.css'
import Footer from "./Footer";

export default function Provinsi(props) {
    const data = useSelector(selector => selector);
    const {prov} = useParams();

    return (
        <div className="flex flex-col">
            <Header lambang={data[prov]['logo']} history={props.history}>{'Provinsi '+data[prov]['title']}</Header>
            <div style={{marginTop:0}} className="flex-grow">
                <div style={{textAlign:"center"}}>
                    <img className="foto" style={{marginTop:0}} src={data[prov]['cover']}/>
                </div>
                <ul className="navigasi">
                    <li>
                        <Link to={`/budaya/baju-adat-${prov}`}>Baju Adat</Link>
                    </li>
                    <li>
                        <Link to={`/budaya/tari-adat-${prov}`}>Tari Adat</Link>
                    </li>
                    <li>
                        <Link to={`/budaya/rumah-adat-${prov}`}>Rumah Adat</Link>
                    </li>
                </ul>
                <br/>
            </div>
            <Footer/>
        </div>
    );           
}