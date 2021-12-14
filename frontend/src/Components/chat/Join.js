import React, { useState } from 'react'
import "./styles.css"
import {useHistory } from 'react-router-dom'
import io from "socket.io-client";
import Chat from "./Chat"

const socket = io.connect("http://localhost:5000");

const Join = () => {
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== "") {
          socket.emit("join_room", room);
          setShowChat(true);
        }
      };

    const onClick = (() => {
        history.go(-1)
    })
    return (
        <div className='container-fluid'>
            <div className='back-button'>
                <button className='btn btn-warning btn-md' onClick={onClick} > <i class="fa fa-arrow-circle-left"></i> Go back</button>
            </div>
        <div className="container join ">
            {
                !showChat? (
                    <form>
                <h5 className='text-center mb-5'>Join a chat</h5>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" placeholder="Name" className="form-control" id="exampleInputEmail1" onChange={(event) => {
              setUsername(event.target.value);
            }} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Room</label>
                    <input type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary" onClick={joinRoom}>Join</button>
                </div>
            </form>
                ):(
                    <Chat socket={socket} username={username} room={room} />
                  )
            }
            
        </div>
        </div>
    )
}

export default Join
