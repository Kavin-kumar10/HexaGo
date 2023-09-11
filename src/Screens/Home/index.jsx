import React from "react";
import Header from "../../Components/Header";
import "./Home.scss"
import Carousel_comp from "../../Components/Carousel_comp";
import Card from "../../Components/Card";
import { Navigate } from "react-router-dom";
import { bg } from "../../Assets";

const Home = ({signed,setPop}) =>{
    if(signed){
        return<Navigate to="/Signup"/>
    }
    return(
        <div className="Home">
            <Header setPop={setPop}/>
            <Carousel_comp/>
            <div className="Trending">
                <h1>Trending Auction</h1>
                <div className="line"></div>
                <div className="Card_container">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="seller" style={{background:`url(${bg})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                    <div className="layer">
                        <div className="layer_top">
                            <h1>Let's grow together with HexaGo</h1>
                            <div className="layer_line"></div>
                        </div>
                        <div className="layer_bot">
                            <p>Send your product details to us and get verified</p>
                            <button>Start Selling</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home