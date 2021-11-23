import React,{ useState,useEffect } from 'react'
import AdminNavbar from './Navbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AdminDonees = () => {
    const history = useHistory ()
    const [doneeData,setDoneeData] = useState ([])

    useEffect (() => {
        getData ()
    },[])

    const getData = async () => {
        const response = await fetch ("http://localhost:5000/api/donee/register")
        const result = await response.json ()
        setDoneeData(result)
        console.log(result)
    }
    const onDelete = (id) => {
        axios.delete( `http://localhost:5000/api/admin/donee/${id}`)
        alert("Confirm deletion of this account")
        history.go(0)
    }
    const onUpdate = (id,name,email) => {
        localStorage.setItem("admindoneeid",JSON.stringify({id}))
        localStorage.setItem("admindoneename",JSON.stringify({name}))
        localStorage.setItem("admindoneeemail",JSON.stringify({email}))
        history.push("/admin/update-donee")
    }
    return (
        <div>
            <AdminNavbar/>
            <div className="container mt-5">
            <h5 className="text-center mb-4">Registered Donees</h5>
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
                doneeData.map(donee => (
                    <tbody>
                <tr>
                <td>{donee.donee}</td>
                <td>{donee.email}</td>
                <td>{donee.telephone}</td>
                <td>
                    <div style={{display:"flex"}}>
                    <div className="m-2">
                        <div className="btn btn-md btn-outline-info" onClick={(() => onUpdate(donee._id,donee.donee,donee.email))}>Update</div>
                    </div>
                    <div className="m-2">
                        <div className="btn btn-md btn-outline-danger" onClick={(() => onDelete (donee._id))} >Delete</div>
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

export default AdminDonees
