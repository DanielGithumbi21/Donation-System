import React, { useEffect, useState } from 'react';
import {useLocation,useHistory } from "react-router-dom";
import "../Navbar/Navbar.css"


const AdminNavbar = () => {
    const history = useHistory();
    const location = useLocation ();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('adminprofile')));
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('adminprofile')))
    },[location])
    const onClick = () => {
        localStorage.removeItem("adminprofile")
        history.push("/admin")
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
                            <a className="nav-link active" aria-current="page" href="/admin/home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/admin/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/admin/donors">Donors</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/admin/donee">Donees</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="/admin/donations" >Donations</a>
                            </li>
                            {/* <li className="nav-item">
                                <h6 className="nav-link">Welcome, {user.json.result.donee}</h6>
                            </li> */}
                            
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

export default AdminNavbar;