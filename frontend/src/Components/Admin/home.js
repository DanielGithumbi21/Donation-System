import React,{useState,useEffect} from 'react'
import AdminNavbar from './Navbar'
import "./admin.css"

const AdminHome = () => {
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
            <AdminNavbar/>
            <div className="container admin">
                <div className="row" style ={{display:"flex"}}>
                    {
                        data.map (donation => (
                            <div className='card' style ={{width:"18rem"}}>
                                <p className='lead'>A donation request with id, {donation._id},<br/> was made by donee id {donation.donee}</p>
                                <div style ={{display:"flex"}}>
                                <h5>Title: </h5><p className='lead'> {donation.title}</p>
                                </div>
                                <div style ={{display:"flex"}}>
                                <h5>Description:  </h5><p className='lead'>{donation.description}</p>
                                </div>
                                <div className='text-center'>
                                    <button className="btn-info btn btn-md">Verify</button>
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
