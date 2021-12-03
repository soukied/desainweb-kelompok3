import React, {useEffect} from "react";
import ReactDOM from "react-dom";
// import Header from "./Header";
import Index from './Index';
import Provinsi from "./Provinsi";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Budaya from "./Budaya";
import About from "./About";
import "./styles/global.css"
import Search from "./Search";
import Login from "./Login";
import Footer from "./Footer";
import {createBrowserHistory} from 'history';
import {Provider, useSelector} from 'react-redux';
import store from "./store";

const history = createBrowserHistory();

let Main = () => {
    let data = useSelector(state=>state);
    useEffect(()=>{
        console.log(data);
    }, []);
    return (
        <Router>
            <div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/provinsi/:prov" component={Provinsi}/>
                <Route exact path="/budaya/:nama" component={Budaya}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/search/:query" component={Search}/>
                <Route exact path="/login" component={Login}/>
            </div>
        </Router>
    );
}

ReactDOM.render(
<Provider store={store}>
    <Main/>
</Provider>
, document.querySelector("#main"));

export {history};