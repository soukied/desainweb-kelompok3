import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from './Footer';
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
    const {nama} = useParams();
    const [budaya, setBudaya] = useState(false);

    useEffect(()=>{
        setBudaya(getBudaya(data,nama));
    }, []);
    return budaya ? (<div className="flex flex-col h-screen">
        <Header to={budaya.back} lambang={budaya.logo} history={history}>{budaya.title}</Header>
        <div className="flex-grow">
            <div className="px-20 my-10">
                <div className="flex justify-center items-center" style={{textAlign:"center"}}>
                    <img className="rounded-xl" src={budaya.content?budaya.content.gambar:""} alt=""/>
                </div>
            <h1 className="text-xl font-bold title py-5"> {budaya.content?budaya.content.judul:""} </h1>
                <p className="text-sm" dangerouslySetInnerHTML={{__html:budaya.content?budaya.content.paragraf:""}}></p>
            </div>
        </div>
        <Footer/>
    </div>) : <></>;
}