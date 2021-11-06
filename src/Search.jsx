import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import './styles/search.css';

export default function Search(props) {
    const {query} = useParams();
    return (<>
        <Header history={props.history}>Pencarian</Header>
        <div className="content">
            <h3>Pencarian {query}</h3>
            {
                [].map(val=>{
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