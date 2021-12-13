import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Helping Hand</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">DONATIONS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">CONTRIBUTIONS</a>
                            </li>
                        </ul>
                        <li style={{listStyleType:"none"}} class="nav-item dropdown">
                            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className="d-flex">
                            <Link to='/donor/sign'>
                            <button className="btn btn-outline-success mb-2">REGISTER</button>
                            </Link>
                            </div>
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                <Link to='/donor/sign'>
                                    <button className="btn btn-primary m-2">Donor</button>
                                </Link>
                                </li>
                                <li>
                                <Link to='/donee/sign'>
                                    <button className="btn btn-primary m-2">Donee</button>
                                </Link>
                                </li>
                            </ul>
                        </li>                        
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar;