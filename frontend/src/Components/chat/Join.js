import React, { useState } from 'react'
import "./styles.css"
import { Link, useHistory } from 'react-router-dom'

const Join = () => {
    const history = useHistory()
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')

    const onClick = (() => {
        history.go(-1)
    })
    return (
        <div className='container-fluid'>
            <div className='back-button'>
                <button className='btn btn-warning btn-md' onClick={onClick} > - Go back</button>
            </div>
        <div className="container join ">
            <form>
                <h5 className='text-center mb-5'>Join a chat</h5>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" placeholder="Name" className="form-control" id="exampleInputEmail1" onChange={(event) => setName(event.target.value)} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Room</label>
                    <input type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary">Join</button>
                </div>
                </Link>
            </form>
        </div>
        </div>
    )
}

export default Join
