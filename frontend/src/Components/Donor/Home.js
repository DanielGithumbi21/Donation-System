import React,{useEffect,useState} from 'react'
import DonorNavbar from './Navbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const DonorHome = () => {
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

    return (
        <div>
            <DonorNavbar/>
            <div className="container admin">
                <h5 className='mb-5 text-center'>These are the verified donation requests</h5>
                <div className="row" style ={{display:"flex"}}>
                    {
                        data.map (donation => (
                            <>
                            {
                                donation.verification === true?
                                <div class="card" style ={{width:"20rem"}}>
                            <img src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title">{donation.title}</h5>
                              <p class="card-text">{donation.description}</p>
                              <div className='text-center'>
                                  <button className="btn btn-md btn-primary">Accept</button>
                              </div>
                            </div>
                          </div>:""
                            }
                            </>
                            
                            
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DonorHome;
