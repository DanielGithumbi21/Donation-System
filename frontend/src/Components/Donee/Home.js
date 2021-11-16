import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DoneeNavbar from './Navbar'
import "./Sign.css"

const DoneeHome = () => {
    const location = useLocation
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Doneeprofile')));
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('Doneeprofile')))
    },[location])
    const handleChange = (e) => {

    }

    const onSubmit = () => {

    }
    return (
        <div>
            <DoneeNavbar/>
            <div className="container home">
              <h5>Wecome, {user.json.result.donee}</h5>
              <div className="container donation">
                  <h5 className="mb-3">Make A donation Request</h5>
                  <form onSubmit={onSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input onChange={handleChange} type="text" name="donee" className="form-control" id="exampleFormControlInput1" placeholder="john doe"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Telephone</label>
                    <input onChange={handleChange} type="text" name="telephone" className="form-control" id="exampleFormControlInput1" placeholder="your phone number"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleFormControlInput1" />
                </div>
            
                <div className="text-center">
                <button className="btn btn-md btn-outline-primary">Request</button>
                </div>
                </form>
              </div>  
            </div>
        </div>
    )
}

export default DoneeHome
