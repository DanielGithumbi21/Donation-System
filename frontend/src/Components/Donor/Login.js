import React,{useState} from "react"
import { useHistory } from "react-router-dom"
import "../Donee/Sign.css"

const DonorLogin = () => {
    const initialState = {donor:'',email:'',telephone:'',password:''}
    const [isSignUp,setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const [errors,setErrors] = useState();
    const history = useHistory ();
    const switchmode = () => {
        setIsSignUp((prev) => !prev)
    }
    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (isSignUp) {
            fetch ("http://localhost:5000/api/donor/register", {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify (formData)
            })
            .then(res => res.json())
            .then(json => {
                console.log("json",json)
                if (json.message) {
                    setErrors(json.message)
                } else {
                    localStorage.setItem("Donorprofile",JSON.stringify({json}))
                    history.push("/donor/home")
                }
            })
        }else {
            fetch ("http://localhost:5000/api/donor/login", {
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify (formData)
            })
            .then(res => res.json())
            .then(json => {
                console.log("json",json)
                if (json.message) {
                    setErrors(json.message)
                    
                        
                
                } else {
                    localStorage.setItem("Donorprofile",JSON.stringify({json}))
                    history.push("/donor/home")
                }
            })
        }
       
        
    }
    return (
        <div className="container sign">
            {errors?
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
         {errors}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            :""}
            <div className="card">
            {isSignUp? <h5 className="text-center mb-3">Donor Registration</h5>:<h5 className="text-center mb-3">Donor Login</h5>}
            {isSignUp?
            <div>
                <form onSubmit={onSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input onChange={handleChange} type="text" required name="donor" className="form-control" id="exampleFormControlInput1" placeholder="john doe"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" required name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Telephone</label>
                    <input onChange={handleChange} type="text" required name="telephone" className="form-control" id="exampleFormControlInput1" placeholder="your phone number"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input onChange={handleChange} type="password" required name="password" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="text-center">
                <button className="btn btn-md btn-primary mb-3">Register</button>
                </div>
                <div className="text-center">
                <button className="btn btn-md btn-info" onClick={switchmode}>Already have an account? click here to login</button>
                </div>
                </form>
            </div>
            :<div>
            <form onSubmit={onSubmit} >
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" required onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" required onChange={handleChange} name="password" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="text-center">
            <button className="btn btn-md btn-primary mb-3">Login</button>
            </div>
            <div className="text-center">
            <button className="btn btn-md btn-info" onClick={switchmode}>Don't have an account? click here to Register</button>
            </div>
            </form>
        </div>}
            </div>

        </div>
    )
}

export default DonorLogin;