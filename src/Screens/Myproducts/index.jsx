import React, { useState } from 'react'
import "./Myproducts.scss"
import { useDispatch,useSelector } from 'react-redux'
import Header from '../../Components/Header'
import { searchRed } from '../../Redux/ProductSlice'

const Myproducts = ({setPop}) =>{
    const AllProducts = useSelector((state)=>state.Products.AllProducts);
    const products = AllProducts.filter((elem)=>elem.seller == JSON.parse(localStorage.getItem('user')).Username)
    const dispatch = useDispatch();

    return(
        <div className="Myproducts">
            <Header setPop={setPop}/>
            {
                (products)?.map((elem)=>
                    <h1>{elem.title}</h1>
                )
            }
        </div>
    )
}

export default Myproducts