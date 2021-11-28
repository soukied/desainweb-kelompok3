import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import "./styles/budaya.css";
import data from './data/index';

function getBudaya(name) {
    for (let prov of ['timur','barat','tengah','utara','selatan']) {
        for (let type of ['baju','rumah','tari']) {
            if (name == `${type}-adat-kalimantan-${prov}`) {
                let provData = data[`kalimantan-${prov}`];
                return {
                    back: `/provinsi/kalimantan-${prov}`,
                    logo: provData.logo,
                    title: provData.title,
                    content: provData[`${type}-adat`]
                }
            }
        }
    }
}

export default function Budaya({history}) {
    const {nama} = useParams();

    return(<>
        <Header to={getBudaya(nama).back} lambang={getBudaya(nama).logo} history={history}>{getBudaya(nama).title}</Header>
        <h1 className="title"> {getBudaya(nama).content.judul} </h1>
        <div className="container">
            <div className="banner" style={{textAlign:"center"}}>
                <img src={getBudaya(nama).content.gambar} alt=""/>
            </div>
            <p dangerouslySetInnerHTML={{__html:getBudaya(nama).content.paragraf}}></p>
        </div>
    </>);
}