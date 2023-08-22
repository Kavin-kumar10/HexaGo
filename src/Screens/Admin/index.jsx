import React from "react";
import { Link } from "react-router-dom";
import "./Admin.scss"

const Admin =  () =>{
    return(
        <div className="Admin">
            <div className="Admin_head">
            <div className="logo">
                <h1>Hexa<span>Go</span></h1>
            </div>
            <ul>
                <li>Inbox</li>
                <li id="profile">{JSON.parse(localStorage.getItem('user')).Username}</li>
            </ul>
            </div>
        </div>
    )
}

export default Admin