import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getData } from './Data';
import Header from "./Header";
import "./styles/budaya.css";


export default function Budaya(props) {
    const {nama} = useParams();
    const {judul, setJudul} = useState('');
    const {gambar, setGambar} = useState('');
    const {paragraf, setParagraf} = useState('');
    const {kembali, setKembali} = useState('/');
    return(<>
        <Header history={props.history}>Borneo Culture</Header>
        <h1 className="title"> {judul} </h1>
        <div className="container">
            <div className="banner" style={{textAlign:"center"}}>
                <img src={gambar} alt=""/>
            </div>
            <p> {paragraf} </p>
        </div>
    </>);
}