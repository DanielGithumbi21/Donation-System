import React,{useState,useEffect} from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DoneeNavbar from './Navbar'
import "./Sign.css"

const MakeRequest = () => {
    const location =useLocation ()
    const history = useHistory()
    const initialState = {title:'',description:""}
    const [formData, setFormData] = useState(initialState)
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Doneeprofile')));
    const [errors,setErrors] = useState([])
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('Doneeprofile')))
    },[location])
    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) => {
        const post = {
            title:formData.title,
            description:formData.description,
            donee:user.json.result._id
        }
        e.preventDefault ()
        fetch (`http://localhost:5000/api/donee/request/${user.json.result._id}`, {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify (post)
        })
        .then(res => res.json())
        .then(json => {
            console.log("json",json)
            if (json.message) {
                setErrors(json.message)
            } else {
                alert("Are you sure you want to submit your donation request",formData.title)
                history.go(0)
            }
        })
    }
    return (
        <div>
            <DoneeNavbar/>
            <div className="container sign">
              <div className="container donation">
              {errors?
            <p className='text-danger text-center'>{errors}</p>
            :""}
                  <h5 className="mb-3">Make A donation Request</h5>
                  <form onSubmit={onSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input onChange={handleChange} type="text" name="title" className="form-control" id="exampleFormControlInput1" placeholder="Food aid"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">description</label>
                    <textarea className="form-control"onChange={handleChange} name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default MakeRequest
