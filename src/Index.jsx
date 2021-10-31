import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./styles/index.css"

export default class Index extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            provinsi: [
                {url:"kalimantan-timur",nama:"Kalimantan Timur"},
                {url:"kalimantan-utara",nama:"Kalimantan Utara"},
                {url:"kalimantan-barat",nama:"Kalimantan Barat"},
                {url:"kalimantan-selatan",nama:"Kalimantan Selatan"},
                {url:"kalimantan-tengah",nama:"Kalimantan Tengah"},
            ]
        }
    }
    render() {
        return (<>
            <Header history={this.props.history}>Borneo Culture Wiki</Header>
            <div className="banner"><img src="kalimantan.png" alt="Peta Kalimantan"/></div>
	    	<div className="conten" style={{textAlign: 'center'}}>
			<ul>
				<li>
					<Link to="/about">About</Link>
                </li>
				    {this.state.provinsi.map(val=>(
                        <li key={val.url}><Link to={`/provinsi/${val.url}`}>{val.nama}</Link></li>
                    ))}
			</ul>
		</div>
        </>);
    }
}