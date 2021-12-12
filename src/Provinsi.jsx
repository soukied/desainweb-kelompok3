import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import './styles/provinsi.css'
import Footer from "./Footer";

function Card({judul, urlGambar, tujuan, konten}) {
    if (konten instanceof Array) konten = konten.join(" ");
    konten = konten.slice(0, 201);
    if (konten.length > 200) konten += "...";
    return (
    <Link to={tujuan} className="text-green-900">
        <div className="flex hover:bg-gray-300 bg-white rounded-md shadow-md items-center justify-center flex-col" style={{width:300}}>
            <img src={urlGambar?urlGambar:""} className="rounded-tl-md rounded-tr-md" width={400}/>
            <div style={{textAlign:"center"}} className="p-4">
            <span className="text-sm font-bold">{judul}</span>
            <br/>
            <span>{konten}</span>
            </div>
        </div>    
    </Link>
    )
}

export default function Provinsi(props) {
    const data = useSelector(selector => selector);
    const {prov} = useParams();
    const provData = data[prov];

    return (
        <div className="flex flex-col">
            <Header lambang={provData.logo} history={props.history}>{'Provinsi '+ provData.title}</Header>
            <div className="flex-grow relative">
                <img src={provData.logo} style={{top:20,right:30}} className="absolute" width="100" />
                <div className="flex justify-center items-center flex-col mx-20 mt-5">  
                    <img className="rounded-xl" style={{width:500}} src={provData.cover}/>
                        <span className="text-3xl font-bold mt-2">{provData.title}</span><br/>
                        <span>{provData.deskripsi}</span>
                </div>
                <div className="flex bg-green-200 justify-around mt-10 p-10">
                    {
                        [['baju-adat', 'Baju Adat'],['rumah-adat','Rumah Adat'],['tari-adat', 'Tari Adat']].map(([id, name],i)=>
                        <Card key={i} judul={name} konten={provData[id]['paragraf']} urlGambar={provData[id]["gambar"]} tujuan={"/budaya/"+id + "-"+prov}/>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );           
}