import React,{useEffect,useState} from 'react'
import { useLocation,useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "../Donee/Sign.css"
import AdminNavbar from './Navbar';

const UpdateDonee = () => {
    const initialState = {donee:'',email:''}
    const [isLoading,setIsLoading] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [errors,setErrors] = useState();
    const history = useHistory ();
    const location = useLocation ();

    const [doneeId,setDonorId] = useState(JSON.parse(localStorage.getItem('admindoneeid')));
    const [doneeName,setDonorName] = useState(JSON.parse(localStorage.getItem('admindoneename')));
    const [doneeEmail,setDonorEmail] = useState(JSON.parse(localStorage.getItem('admindoneeemail')));


    useEffect (() => {
        setDonorId(JSON.parse(localStorage.getItem('admindoneeid')))
        setDonorName(JSON.parse(localStorage.getItem('admindoneename')))
        setDonorEmail(JSON.parse(localStorage.getItem('admindoneeemail')))


    },[location])

    const handleChange =(e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        
            setIsLoading(true)
            fetch (`http://localhost:5000/api/admin/donee/${doneeId.id}`, {
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify (formData)
            })
            .then(res => res.json())
            .then(json => {
                console.log("json",json)
                    history.push("/admin/donee")
            })
       
        
    }
    return (
        <div>
            <AdminNavbar/>
            <div className="container sign">
            {errors?
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
         {errors}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
            :""}
              <div className="card">
                  <h5 className="mb-3">Donee Update</h5>
                  <form onSubmit={onSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" name="email" required className="form-control" id="exampleFormControlInput1"  placeholder={doneeEmail.email}/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Donee</label>
                    <input onChange={handleChange} type="text" name="donee" required  className="form-control" id="exampleFormControlInput1" placeholder={doneeName.name} />
                </div>
            
                <div className="text-center">
                <button className="btn btn-md btn-outline-primary">Update</button>
                </div>
                </form>
              </div> 
              </div> 
        </div>
    )
}

export default UpdateDonee
