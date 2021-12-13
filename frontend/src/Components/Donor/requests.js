import React,{useEffect,useState} from 'react'
import DonorNavbar from './Navbar'
import axios from 'axios'
import { useHistory, useLocation } from 'react-router-dom'
import "../Admin/admin.css"

const DonationsMade = () => {
    const location = useLocation ()
    const history = useHistory ()
    const [data,setData] = useState([])
    useEffect (() => {
        getData ()
    },[])
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('Donorprofile')));
    useEffect (() => {
        // const token =user?.token;
        setUser(JSON.parse(localStorage.getItem('Donorprofile')))
    },[location])

    const getData = async () => {
        const response = await fetch (`http://localhost:5000/api/donor/donate/${user.json.result._id}`)
        const result = await response.json ()
        console.log (result)
        setData(result)
    }
    const onClick = (id) => {
        axios.patch(`http://localhost:5000/api/donor/donate/${id}`)
        history.go(0)
    }

    return (
        <div>
            <DonorNavbar/>
            <div className="container admin">
                {data.length ===0? <h5 className='text-center mt-3'>No verified donations for now</h5>:
                <>
                <h5 className='mb-5 text-center'>These are the verified donation requests</h5>
                <div className="row" style ={{display:"flex"}}>
                    {
                        data.map (donation => (
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
                                        <button className="btn btn-md btn-primary" onClick={(() => onClick(donation._id))} >Accept</button>
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

export default DonationsMade;
