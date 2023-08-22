import React from "react";
import "./Aside.scss"

const Aside = () =>{
    return(
        <div className="Aside">
            <div className="Aside_head" id="Aside_head">
                <h2>Showing 1 Result</h2>
                <div className="line"></div>
            </div>
            <div className="Date_filter">
                <h3>Date filter</h3>
                <div className="line"></div>
                <div className="filter_box">
                        From Date
                </div>
                <div className="filter_box">
                    To Date
                </div>
            </div>
            <div className="Category_filter">
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
            </div>
        </div>
    )
}

export default Aside