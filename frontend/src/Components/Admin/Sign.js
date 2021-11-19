import React,{useEffect,useState} from 'react'
import { useLocation,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../Donee/Sign.css"

const AdminSign = () => {
    const initialState = {donee:'',email:'',telephone:'',password:''}
    const [isLoading,setIsLoading] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [errors,setErrors] = useState();
    const history = useHistory ();
    
    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        
            setIsLoading(true)
            fetch ("http://localhost:5000/api/admin/login", {
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
                    localStorage.setItem("adminprofile",JSON.stringify({json}))
                    history.push("/admin/home")
                }
            })
       
        
    }
    return (
        <div>
            <div className="container sign">
            {errors?
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
         {errors}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            :""}
              <div className="card">
                  <h5 className="mb-3">Admin Login</h5>
                  <form onSubmit={onSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleFormControlInput1" />
                </div>
            
                <div className="text-center">
                <button className="btn btn-md btn-outline-primary">Login</button>
                </div>
                </form>
              </div> 
              </div> 
        </div>
    )
}

export default AdminSign
