import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import './styles/search.css';
import data from './data/index';

function queryData(query) {
    let ret = [];
    ['timur','selatan','barat','tengah','utara'].forEach(p=>{
        ['baju','tari','rumah'].forEach(b=>{
            let qData = data[`kalimantan-${p}`][`${b}-adat`];
            // console.log(qData);
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
    const {query} = useParams();
    const [pencarian, setPencarian] = useState(query);
    const [val, setVal] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Search '${query}' | Borneo Culture Wiki`;
    },[]);

    useEffect(()=>{
        setVal(queryData(query.toLowerCase()));
    },[val]);

    return (<>
        <Header history={props.history}>Pencarian '{query}'</Header>
        <div className="content">
            <h3 onClick={()=>{console.log(val)}}> {val.length > 0 ? `${val.length} hasil pencarian` : "Pencarian tidak ditemukan"}</h3>
            {
                [...val].map(item=>{
                    return (<div className="container">
                    <Link to={item.url} style={{display:'block'}}> {item.judul} </Link>
                    <img src={item.gambar} style={{height:'50px',display:'block'}} alt=""/>
                </div>);
                })
            }
            
        </div>
        
    </>);
}
