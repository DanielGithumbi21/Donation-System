import React,{useState,useEffect} from 'react'
import AdminNavbar from './Navbar'
import "./admin.css"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AdminDonations = () => {
    const history = useHistory ()
    const [donationData,setDonationData] = useState([])
    useEffect (() => {
        getData ()
    },[])

    const getData = async () => {
        const response = await fetch ("http://localhost:5000/api/admin/donations")
        const result = await response.json ()
        console.log (result)
        setDonationData(result)
    }

    return (
        <div>
            <AdminNavbar/>
            <div className="container mt-5">
            <h5 className="text-center text-info mb-4">Donation Requests Made</h5>
            <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Donee</th>
                <th scope="col">Verification</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            {
                donationData.map(donation => (
                    <tbody>
                <tr>
                <td>{donation.title}</td>
                <td>{donation.donee}</td>
                {
                    donation.verification === true? <td>Verified</td>:<td>Not Verified</td>

                }
                <td>
                    <div style={{display:"flex"}}>
                    <div className="m-2">
                        <div className="btn btn-md btn-outline-info">Update</div>
                    </div>
                    <div className="m-2">
                        <div className="btn btn-md btn-outline-danger">Delete</div>
                    </div>
                    </div>
                    
                </td>
                </tr>
            </tbody>
                ))
            }
            </table>
            </div>
        </div>
    )
}

export default AdminDonations
