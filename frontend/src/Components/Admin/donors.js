import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import AdminNavbar from './Navbar'

const AdminDonors = () => {
    const history = useHistory()
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
    const onDelete = (id) => {
        axios.delete( `http://localhost:5000/api/admin/donor/${id}`)
        alert("Confirm deletion of this account")
        history.go(0)
    }
    const onUpdate = (id,name,email) => {
        localStorage.setItem("admindonorid",JSON.stringify({id}))
        localStorage.setItem("admindonorname",JSON.stringify({name}))
        localStorage.setItem("admindonoremail",JSON.stringify({email}))
        history.push("/admin/update-donor")
    }
    return (
        <div>
            <AdminNavbar/>
            <div className="container mt-5">
            <h5 className="text-center text-info mb-4">Registered Donors</h5>
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
                        <div className="btn btn-md btn-outline-info" onClick={(() => onUpdate(donor._id,donor.donor,donor.email))} >Update</div>
                    </div>
                    <div className="m-2">
                        <div className="btn btn-md btn-outline-danger" onClick={(() => onDelete(donor._id))} >Delete</div>
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
