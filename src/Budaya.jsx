import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import "./styles/budaya.css";
// import data from './data/index';

function getBudaya(data,name) {
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
    return {};
}

export default function Budaya({history}) {
    const data = useSelector(selector => selector);
    const [budaya, setBudaya] = useState(false);
    const {nama} = useParams();

    useEffect(()=>{
        setBudaya(getBudaya(data, nama));
    }, []);
    return budaya ? (<>
        <Header to={budaya.back} lambang={budaya.logo} history={history}>{budaya.title}</Header>
        <h1 className="title"> {budaya.content.judul} </h1>
        <div className="container">
            <div className="banner" style={{textAlign:"center"}}>
                <img src={budaya.content.gambar} alt=""/>
            </div>
            <p dangerouslySetInnerHTML={{__html:budaya.content.paragraf}}></p>
        </div>
    </>) : <></>;
}