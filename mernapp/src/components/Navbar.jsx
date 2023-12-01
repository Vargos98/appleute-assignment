import React from 'react'
import { Link } from "react-router-dom";
import logo from './Logo2.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <div className="container-fluid">
                    <img src={logo} alt="logo" style={{"width":"15rem"}}/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark bold fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-dark bold fw-bold" to="/login">Login</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>

       
    )
}
