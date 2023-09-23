import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterStatus } from "../../../Redux/ProductSlice";
import "./Aside.scss"

const Aside = () =>{
    const ReqProducts = useSelector((state)=>state.Products.ReqProducts);
    const dispatch = useDispatch();
    console.log(ReqProducts);
    return(
        <div className="Aside">
            <div className="Aside_head" id="Aside_head">
                <h2>Showing {ReqProducts.length} Result</h2>
                <div className="line"></div>
            </div>
            <div className="Date_filter">
                <h3>Catagory</h3>
                <div className="line"></div>
                <select className="filter_box" onChange={(e)=>{
                    let value = e.target.value;
                    dispatch(filterStatus({value}))
                }}>
                        <option value="">Select Catagory</option>
                        <option value={-1}>Pending</option>
                        <option value={1}>Live</option>
                        <option value={10}>Completed</option>
                </select>
            </div>
            {/* <div className="Category_filter">
                <h3>Category</h3>
                <div className="line"></div>
                <div className="filter_box">
                    Select Category
                </div>
            </div>
            <div className="Location_filter">
                <h3>Location</h3>
                <div className="line"></div>
                <div className="filter_box">
                    Select Location
                </div>
            </div> */}
        </div>
    )
}

export default Aside