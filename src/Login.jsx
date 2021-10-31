import React from "react";
// import './styles/login.css';

export default function Login(props) {
    return (
        <>
            <div className="overlay"></div>
            <form action="login.html" method="post" className="box">
                <div className="header">
                    <h4>Login To Your Account</h4>
                    <p>
                        Silahkan Mengisi Username dan Password terlebih dahulu sebelum mengunjungi webiste kami
                    </p>
                </div>
                <div className="login-area">
                    <input type="text" className="username" placeholder="Username"/>
                    <input type="password" className="password" placeholder="Password"/>
                    <input type="submit" value="Login" className="submit"/>
                    <a href="0" style={{color:'black'}}>Lupa Sandi</a>
                </div>
            </form>
        
    </>);
}