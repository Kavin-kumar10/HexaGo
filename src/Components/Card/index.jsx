import React from "react";
import {FaBookmark} from 'react-icons/fa'
import "./Card.scss"

const Card = ({elem}) =>{
    return(
        <div className="Card">
            <div className="img" style={{backgroundImage:`url(${elem.img_url})`}}>
                <p>latest bid ${elem.latestBid}</p>
            </div>
            <div className="Card_desc">
                <h3>{elem.title}</h3>
            </div>
            <div className="Card_btn">
                <button id="Preview">Preview Auction</button>
                <button><FaBookmark color="var(--tertiary-color)"/></button>
            </div>
        </div>
    )
}

export default Card;