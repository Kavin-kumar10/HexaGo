import React, { useState } from "react";
import Header from "../../Components/Header";
import "./Upcomming.scss"
import Box from "../../Components/Box";
import Aside from "./Aside";
import { Navigate } from "react-router-dom";
import Form from "../../Components/Form";
import Counter from "../../Components/Counter";
import { useSelector,useDispatch } from "react-redux";
import { searchRed } from "../../Redux/ProductSlice";


const Upcomming = ({signed,pop,setPop}) =>{
    const ReqProducts = useSelector((state)=>state.Products.ReqProducts);
    const dispatch = useDispatch();
    console.log(ReqProducts);

    // if(!signed){
    //     return<Navigate to="/Signup"/>
    // }
    return(
        <div className="Upcomming">
            <Header setPop={setPop}/>
            <div className="gap"></div>
            <div className="Container">
                <Aside/>
                <div className="Home_main">
                   <input type="text" placeholder="Search" onChange={(e)=>{
                        let value = e.target.value;
                        dispatch(searchRed({value}))
                   }}/>
                    <div className="box_container">
                        {
                            ReqProducts.filter(item => item.status != 0).map((elem)=>{
                                return(
                                    <Box elem={elem} key={elem.title}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcomming