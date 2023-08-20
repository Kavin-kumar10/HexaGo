import React, { useState } from "react";
import Header from "../../Components/Header";
import "./Upcomming.scss"
import Box from "../../Components/Box";
import Aside from "./Aside";
import { Navigate } from "react-router-dom";
import Form from "../../Components/Form";
import Counter from "../../Components/Counter";
import { useSelector } from "react-redux";

const Upcomming = ({signed,pop,setPop}) =>{
    const AllProducts = useSelector((state)=>state.Products.AllProducts);
    console.log(AllProducts);
    // const [products,setProducts] = useState([
    // {
    //     title: 'Bottle of Guardian - (ancient decoration used by britain)',
    //     date: 'AUG 15 2023',
    //     place:'TAMIL NADU',
    //     min:250, 
    //     latest:{
    //         person:'Kiran',
    //         bid:500
    //     }
    // },
    // {
    //     title: 'New title',
    //     date: 'SEP 18 2023',
    //     place:'KERALA',
    //     min:100, 
    //     latest:{
    //         person:'KAVIN',
    //         bid:300
    //     }
    // },
    // ]);
    if(signed){
        return<Navigate to="/Signup"/>
    }
    return(
        <div className="Upcomming">
            <Header setPop={setPop}/>
            <div className="gap"></div>
            <div className="Container">
                <Aside/>
                <div className="Home_main">
                   <input type="text" placeholder="Search"/>
                    <div className="box_container">
                        {
                            AllProducts.map((elem)=>{
                                // console.log(elem);
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