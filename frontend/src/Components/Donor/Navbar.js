import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import "../Navbar/Navbar.css"
import '../Navbar/toggle.css';
import { setTheme } from '../../utils/themes';

function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

    return (
        <div className="container--toggle">
            {
                togClass === "light" ?
                <>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" onClick={handleOnClick} value="" id="flexCheckDefault" checked/>
                    <label class="form-check-label" for="flexCheckDefault">
                        <h5>Light Theme</h5>
                    </label>
                    </div>
                </>
                :
                <>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" onClick={handleOnClick} value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        <h5>Dark Theme</h5>
                    </label>
                    </div>
            </>
            }
        </div>
    )
}

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
                            <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">DONATIONS</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">CONTRIBUTIONS</a>
                            </li>
                            <li className="nav-item">
                                <h6 className="nav-link">Welcome, {user.json.result.donor}</h6>
                            </li>
                        </ul>
                        <li style={{listStyleType:"none"}}>
                            <button className='btn btn-outline-danger btn-md' onClick={onClick}>Logout</button>
                        </li>
                        <li style={{listStyleType:"none"}}><Toggle/></li>
                        
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default DonorNavbar;