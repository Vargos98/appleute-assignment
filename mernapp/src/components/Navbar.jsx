import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import logo from './Logo2.png'
import Badge from 'react-bootstrap/Badge';

export default function Navbar() {
    const navigate = useNavigate();
    const handleLogout= ()=>{

        localStorage.removeItem("authToken");
        navigate("/login");

    }
    const handleMyCart= ()=>{
        
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <div className="container-fluid">
                    <img src={logo} alt="logo" style={{ "width": "15rem" }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active text-dark bold fw-bold fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active text-dark fw-bold " aria-current="page" to="/" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn bg-dark bg-gradient active text-white bold fw-bold mx-1" to="/login">Login</Link>
                                <Link className="btn bg-dark bg-gradient active text-white bold fw-bold mx-1" to="/creatuser">Sign Up</Link>

                            </div>

                            :

                            <div>

                                <div className='btn bg-dark bg-gradient active text-white bold mx-2' to='/cart'>
                                    My Cart{" "}
                                    <Badge pill bg="danger">2</Badge>
                                </div>

                                <div className='btn bg-dark bg-gradient active text-white bold mx-2' onClick={handleLogout}>
                                    Logout
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav >
        </div >


    )
}
