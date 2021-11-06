import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import dataCulture from './data/index';
import Header from "./Header";
import "./styles/budaya.css";
import data from './data/index';

function nameToData(name) {
    for (let prov of ['timur','barat','tengah','utara','selatan']) {
        for (let type of ['baju','rumah','tari']) {
            if (name == `${type}-adat-kalimantan-${prov}`) {
                let provData = data[`kalimantan-${prov}`];
                return {
                    logo: provData.logo,
                    title: provData.title,
                    content: provData[`${type}-adat`]
                }
            }
        }
    }
}

export default function Budaya(props) {
    const {nama} = useParams();
    console.log(nameToData(nama));
    const {data, setData} = useState(nameToData(nama));
    return(<>
        <Header lambang={nameToData(nama).logo} history={props.history}> Provinsi {nameToData(nama).title} </Header>
        <h1 className="title"> {nameToData(nama).judul} </h1>
        <div className="container">
            <div className="banner" style={{textAlign:"center"}}>
                <img src={nameToData(nama).content.gambar} alt=""/>
            </div>
            <p dangerouslySetInnerHTML={{__html:nameToData(nama).content.paragraf}}></p>
        </div>
    </>);
}