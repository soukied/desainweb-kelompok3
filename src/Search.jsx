import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import './styles/search.css';

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

export default function Search(props) {
    const data = useSelector(selector => selector);
    const {query} = useParams();
    const [val, setVal] = useState([]);

    useEffect(()=>{
        setVal(queryData(data, query));
    },[]);

    return (<>
        <Header history={props.history}>{`Pencarian '${query}'`}</Header>
        <div className="content">
            <h3> {val.length > 0 ? `${val.length} hasil pencarian` : "Pencarian tidak ditemukan"}</h3>
            {
                [...val].map((item, index) => {
                    return (<div className="container" key={index}>
                    <Link to={item.url} style={{display:'block'}}> {item.judul} </Link>
                    <img src={item.gambar} style={{height:'50px',display:'block'}} alt=""/>
                </div>);
                })
            }
            
        </div>
        
    </>);
}
