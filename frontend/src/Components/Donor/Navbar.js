import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css"


const DonorNavbar = () => {
    const location = useLocation();
    const history = useHistory();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Donorprofile')));
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('Donorprofile')))
    },[location])
    const onClick = () => {
        localStorage.clear("Donorprofile")
        history.push("/")
    }
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
                            <a className="nav-link active" aria-current="page" href="/donor/home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/donor/donations">Requests</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/join">Chat</a>
                            </li>
                            <li className="nav-item">
                                <h6 className="nav-link">Welcome, {user.json.result.donor}</h6>
                            </li>
                        </ul>
                        <li style={{listStyleType:"none"}}>
                            <button className='btn btn-outline-danger btn-md' onClick={onClick}>Logout</button>
                        </li>
                        
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default DonorNavbar;