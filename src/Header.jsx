import React, {create} from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    render() {
        return (<div className="header">
            <img src="Borneo.png" width="80" alt=""/>
            <h1><Link style={{color:"black",textDecoration:"transparent"}} to="/"> {this.props.children} </Link></h1>	
            <input onChange={ev=>{
                this.setState({value:ev.target.value});
            }} id="query-search" onKeyPress={ev=>{
                if (ev.key == "Enter") 
                    this.props.history.push("/search/" + this.state.value);
            }} placeholder="Pencarian..." type="search"/>
        </div>);
    }
}