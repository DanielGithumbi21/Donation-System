import React,{useEffect,useState} from 'react'
import {  useLocation } from 'react-router-dom'
import "../Admin/admin.css"
import DoneeNavbar from './Navbar'

const AcceptedRequests = () => {
    const location = useLocation ()
    const [data,setData] = useState([])
    useEffect (() => {
        getData ()
    },[])
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Doneeprofile')));
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('Doneeprofile')))
    },[location])

    const getData = async () => {
        const response = await fetch ("http://localhost:5000/api/admin/donations")
        const result = await response.json ()
        console.log (result)
        setData(result)
    }
    return (
        <div>
            <DoneeNavbar/>
        <div className="container admin">
        {data.length ===0? <h5 className='text-center mt-3'>No verified donations for now</h5>:
        <>
        <h5 className='mb-5 text-center'>These are your donation requests</h5>
        <div className="row" style ={{display:"flex"}}>
            {
                data.map (donation => (
                    <>
                    {
                        donation.donee === user.json.result._id?
                        <>
                             {
                        donation.donor === null?
                        <div class="card" style ={{width:"20rem"}}>
                            <img src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                            <h5 class="card-header mt-3">{donation.title}</h5>

                            <div class="card-body">
                            <p class="card-text">{donation.description}</p>
                            
                            <div class="card-footer">
                            <div className='text-center'>
                                <button className="btn btn-md btn-primary" disabled={true} >Not Accepted</button>
                            </div>
                            </div>
                            </div>
                        </div>
                        :
                        <div class="card" style ={{width:"20rem"}}>
                            <img src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                            <h5 class="card-header mt-3">{donation.title}</h5>

                            <div class="card-body">
                            <p class="card-text">{donation.description}</p>
                            <div class="card-footer">
                            <div className='text-center'>
                                <button className="btn btn-md btn-warning" disabled={true} >Accepted</button>
                            </div>
                            </div>
                            </div>
                        </div>

                    }
                  
                        </>:""
                    }
                   
                        
                    
                    </>
                    
                    
                ))
            }
        </div>
        </>
}
    </div>
    </div>
    )
}

export default AcceptedRequests
