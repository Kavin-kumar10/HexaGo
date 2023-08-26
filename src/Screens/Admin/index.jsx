import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProducts } from "../../Redux/ProductSlice";
import { Link } from "react-router-dom";
import "./Admin.scss"

const Admin =  () =>{
    const products = useSelector((state)=>state.Products.AllProducts)
    const dispatch = useDispatch();
    const [select,setSelect] = useState("inbox");

    const handleApprove = async(elem) =>{
        try{
            console.log(`http://localhost:5000/Products/Accept/${elem._id}`);
            const response = await axios.put(`http://localhost:5000/Products/Accept/${elem._id}`);
            dispatch(getProducts());
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    const handleReject = async(elem) =>{
        try{
            console.log(`http://localhost:5000/Products/Decline/${elem._id}`);
            const response = await axios.put(`http://localhost:5000/Products/Decline/${elem._id}`);
            dispatch(getProducts());
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <div className="Admin">
            <div className="Admin_head">
                <div className="logo">
                    <h1>Hexa<span>Go</span></h1>
                </div>
                <ul>
                    <li onClick={()=>{setSelect("inbox")}}>Inbox</li>
                    <li onClick={()=>{setSelect("Accepted")}}>Accepted</li>
                    <li onClick={()=>{setSelect("Rejected")}}>Rejected</li>
                    <li id="profile">{JSON.parse(localStorage.getItem('user')).Username}</li>
                </ul>
            </div>
            {
                products.map((elem)=>{
                    if(elem.status == -1 && select == "inbox"){
                        return(
                            <>
                            <h1>{elem.title}</h1>
                            <button onClick={()=>handleApprove(elem)}>Accept</button>
                            <button>Preview</button>
                            <button onClick={()=>handleReject(elem)}>Decline</button>
                            </>
                        )
                    }
                    else if(elem.status == 1 && select == "Accepted"){
                        return(
                            <>
                                <h1>{elem.title}</h1>
                            </>
                        )
                    }
                    else if(elem.status == 0 && select == "Rejected"){
                        return(
                            <>
                                <h1>{elem.title}</h1>
                            </>
                        )
                    }
                }
                )
            }
        </div>
    )
}

export default Admin