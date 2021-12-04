import React from "react";
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
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import store from "./store";

const history = createBrowserHistory();

let Main = () => {

    return (
        <Router>
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/provinsi/:prov" component={Provinsi}/>
                <Route path="/budaya/:nama" component={Budaya}/>
                <Route path="/about" component={About}/>
                <Route path="/search/:query" component={Search}/>
                <Route path="/login" component={Login}/>
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