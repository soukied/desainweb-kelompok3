import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import './styles/search.css';
import Footer from './Footer';

function queryData(data, query) {
    let ret = [];
    ['timur','selatan','barat','tengah','utara'].forEach(p=>{
        ['baju','tari','rumah'].forEach(b=>{
            let qData = data[`kalimantan-${p}`][`${b}-adat`];
            if (qData.judul.toLowerCase().includes(query)) {
                ret.push({...qData, url:`/budaya/${b}-adat-kalimantan-${p}`});
            } else if (qData.paragraf instanceof Array) {
                for (let text of qData.paragraf) {
                    if (text.toLowerCase().includes(query)) {
                        ret.push({...qData, url:`/budaya/${b}-adat-kalimantan-${p}`})
                        break;
                    }
                }
            } else if (typeof qData.paragraf == "string" && qData.paragraf.toLowerCase().includes(query))
                ret.push({...qData, url:`/budaya/${b}-adat-kalimantan-${p}`})
        });
    });
    return ret;
}

export default function Search({history}) {
    const data = useSelector(selector => selector);
    const {query} = useParams();
    const [val, setVal] = useState([]);

    useEffect(()=>{
        setVal(queryData(data, query.toLowerCase()));
    },[query]);

    return (<div className="flex-col flex h-screen">
        <Header query={query} history={history}>{`Pencarian '${query}'`}</Header>
        <div className="flex flex-grow items-center justify-center py-4">
            <div className="bg-gray-900 text-white py-10 px-40 rounded-xl">
            <h3 className="text-2xl font-bold"> {val.length > 0 ? `${val.length} hasil pencarian '${query}'` : "Pencarian tidak ditemukan"}</h3>
            <div className="grid grid-cols-2 gap-3">
            {
                [...val].map((item, index) => {
                    return (<div className="" key={index}>
                    <Link className="text-white underline text-base" title={item.judul} to={item.url} style={{display:'block'}}> 
                    <span>{item.judul} </span>
                    <img src={item.gambar} style={{height:'50px',display:'block'}} alt=""/>
                    </Link>
                </div>);
                })
            }
            </div>
            
            </div>
        </div>
        <Footer/>
    </div>);
}
