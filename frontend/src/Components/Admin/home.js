import React,{useState,useEffect} from 'react'
import AdminNavbar from './Navbar'
import "./admin.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AdminHome = () => {
    const history = useHistory ()
    const [data,setData] = useState([])
    useEffect (() => {
        getData ()
    },[])

    const getData = async () => {
        const response = await fetch ("http://localhost:5000/api/admin/donations")
        const result = await response.json ()
        console.log (result)
        setData(result)
    }

    const onClick = (id) => {
        axios.patch(`http://localhost:5000/api/admin/request/${id}`)
        history.go(0)
    }

    return (
        <div>
            <AdminNavbar/>
            <div className="container admin">
                <div className="row" style ={{display:"flex"}}>
                    {
                        data.map (donation => (
                            <div class="card" style ={{width:"20rem"}}>
                            <img src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                            <h5 class="card-header mt-3">{donation.title}</h5>
                            <div class="card-body">
                              <p class="card-text">{donation.description}</p>
                              {donation.verification === false?
                              <div className='text-center mb-3'>
                              <button className="btn-info btn btn-md" onClick={(()=> onClick(donation._id))} >Verify</button>
                              </div>:
                              <div className='text-center mb-3'>
                              <button className="btn-success btn btn-md" disabled={true} >Verified</button>
                              </div>
                            }
                            </div>
                          </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminHome
