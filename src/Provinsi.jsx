import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import './styles/provinsi.css'

export const PROVINSI = {
    KalimantanTimur: {
        nama: "Kalimantan Timur",
        namespace: "kalimantan-timur"
    },
    KalimantanSelatan: {
        nama: "Kalimantan Selatan",
        namespace: "kalimantan-selatan"
    },
    KalimantanBarat: {
        nama: "Kalimantan Barat",
        namespace: "kalimantan-barat"
    },
    KalimantanTengah: {
        nama: "Kalimantan Tengah",
        namespace: "kalimantan-tengah"
    },
    KalimantanUtara: {
        nama: "Kalimantan Utara",
        namespace: "kalimantan-utara"
    }
}

export default function Provinsi(props) {
    const {prov} = useParams();
    // const {valid, setValid} = useState(true);
    const {nama, setNama} = useState("");
    let s = <Link to='/budaya'>S</Link>
    
    return (
        <>
        <Header history={props.history}>Provinsi {prov}</Header>
        <div style={{marginTop:0}} className="conten">
			<div style={{textAlign:"center"}}>
				<img className="foto" style={{marginTop:0}} src="/provinsi/kalimantanbarat.jpg"/>
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