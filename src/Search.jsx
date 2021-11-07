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
            if (qData.judul.includes(query)) {
                ret.push(qData);
            } else if (qData.paragraf instanceof Array) {
                for (let text of qData.paragraf) {
                    if (text.includes(query)) {
                        ret.push(qData);
                        break;
                    }
                }
            } else if (typeof qData.paragraf == "string" && qData.paragraf.includes(query))
                ret.push(qData);
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
        setVal(queryData(query));
    });

    return (<>
        <Header history={props.history}>Pencarian</Header>
        <div className="content">
            <h3>Pencarian {count} {query}</h3>
            {
                val.map(val=>{
                    <>
                    <div className="container">
                    <Link to={`/budaya/${val.namespace}`} style="display:block"> {val.title} </Link>
                    <img src={val.imgSrc} style={{height:'50px',display:'block'}} alt={val.imgTitle}/>
                </div>
                    </>
                })
            }
            <div className="container">
                    <Link to="/budaya" style={{display:'block'}}> {query} </Link>
                    <img src="" style={{height:'50px',display:'block'}} alt=""/>
                </div>
        </div>
        
    </>);
}
