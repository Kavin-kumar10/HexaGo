import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./SignIn.scss"

const SignIn = ({setSigned}) =>{
    const navigate = useNavigate();
    const [user,setUser] =  useState({
        email:'',
        password:''
    });


    const handleChange = (e) =>{
        const { name, value } = e.target;
        setUser((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const localData = JSON.parse(sessionStorage.getItem('Users'));
        localData.filter((elem)=>{
            (elem.email == user.email && elem.password == user.password)?
            navigate('/'):
            setSigned(true);
            Swal.fire({
                icon: 'error',
                title: 'User Not found',
                // text: 'User Not Found',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
    }

    return(
        <div className="SignIn">
            <div className="poster">
                <div className="poster_contain">
                    <h1>Hexa<span>Go</span></h1>
                    <p>Auction platform</p>
                </div>
            </div>
            <div className="SignForm">
                <div className="heading">
                    <h1>Kickstart your business here</h1>
                    <h4>We help you make your life fruiteful</h4>
                </div>
                <form onSubmit={handleSubmit} action="/">
                    <div className="Data_entry">
                        <label htmlFor="Email">Email:</label>
                        <input type="email" id="Email" name="email" required value={user.email} onChange={(e)=>handleChange(e)}/>
                        <div className="line"></div>
                    </div>
                    <div className="Data_entry">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required value={user.password} onChange={(e)=>handleChange(e)}/>
                        <div className="line"></div>
                    </div>
                    <div className="agree">
                        <input type="checkbox"/>
                        <p>I agree to all policy</p>
                    </div>
                    <button type="submit" >SignIn</button>
                    <p>Create New Account <span><Link to="/Signup">SignUp</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn