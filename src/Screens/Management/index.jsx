import React,{ useState } from "react";
import {AiOutlineUser} from 'react-icons/ai'
import { useSelector,useDispatch } from "react-redux";
import "./Management.scss"
import axios from "axios";

const Management = () =>{
    const Admins = useSelector((state)=>state.Admin.AllAdmin);
    const Users = useSelector((state)=>state.Users.AllUsers);
    const [Members,setMembers] = useState(Users);
    return(
        <div className="Management">
            <div className="Top">
                <h1>Hexa<span>Go</span></h1>
                <p>Management <span>Dashboard</span></p>
            </div>
            <div className="selectors">
                <div className="selector" onClick={()=>{setMembers(Admins)}}>
                    <AiOutlineUser id="icon"/>
                    <h2>Admin - 20</h2>
                </div>
                <div className="selector" onClick={()=>{setMembers(Users)}}>
                    <AiOutlineUser id="icon"/>
                    <h2>Users - 120</h2>
                </div>
            </div>
            <table id="table">
                <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Kavin kumar M</td>
                    <td>kavinkumar.prof@gmail.com</td>
                    <td>Delete</td>
                </tr>
                {
                    Members?.map((Member)=>
                        <tr className="Member">
                            <td>{Member.Username}</td>
                            <td>{Member.email}</td>
                            <td>Delete</td>
                        </tr>   
                    )
                }
            </table>
        </div>
    )
}

export default Management