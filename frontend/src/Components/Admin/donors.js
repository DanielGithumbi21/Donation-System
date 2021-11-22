import React,{ useState,useEffect } from 'react'
import AdminNavbar from './Navbar'

const AdminDonors = () => {
    const [donorData,setDonorData] = useState ([])

    useEffect (() => {
        getData ()
    },[])

    const getData = async () => {
        const response = await fetch ("http://localhost:5000/api/donor/register")
        const result = await response.json ()
        setDonorData(result)
        console.log(result)
    }
    return (
        <div>
            <AdminNavbar/>
            <div className="container mt-5">
            <h5 className="text-center mb-4">Registered Donors</h5>
            <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Telephone</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            {
                donorData.map(donor => (
                    <tbody>
                <tr>
                <td>{donor.donor}</td>
                <td>{donor.email}</td>
                <td>{donor.telephone}</td>
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

export default AdminDonors
