import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import './styles/provinsi.css'
import data from './data/index';

export default function Provinsi(props) {
    const {prov} = useParams();
    // const {data, setData} = useState(dataCulture);
    const {nama, setNama} = useState("");
    let s = <Link to='/budaya'>S</Link>
    
    return (
        <>
        <Header lambang={data[prov]['logo']} history={props.history}>Provinsi {data[prov]['title']}</Header>
        <div style={{marginTop:0}} className="conten">
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
        </>
    );           
}