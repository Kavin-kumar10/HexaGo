import React,{useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Form from "../../Components/Form";
import {
    FacebookShareButton,
    FacebookIcon,
    InstapaperIcon,
    InstapaperShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappIcon,
    WhatsappShareButton,
  } from "react-share";
import "./Desc.scss"
import { useSelector } from "react-redux";

const Desc = ({setPop}) =>{
    const AllProducts = useSelector((state)=>state.Products.AllProducts);
    const param = useParams();
    console.log(param);
    const Elem = AllProducts.find(item => item._id == param.id)
    console.log(Elem);
    return(
        <div className="Desc">
            <Header setPop={setPop}/>

            <div className="Container">
                <div className="img" style={{background:`url(${Elem.img_url})`,backgroundRepeat:'no-repeat',backgroundPosition:"center",backgroundSize:"cover"}}>
                    {/* <img src="https://5.imimg.com/data5/TW/ML/KK/SELLER-9406150/hanging-item.jpg" alt="img" /> */}
                </div>
                <div className="description">
                    <div className="live">
                        <div className="dot"></div>
                        <p>live</p>
                    </div>
                    <h1>{Elem.title}</h1>
                    <div className="detail">
                        <p>SELLER : {Elem.username} </p>
                        <p>DURATION: AUG 1 2023 -  AUG 15 2023</p>
                        <p>LOCATION : {Elem.location}</p>
                        <p>STARTING BID: ${Elem.minimum}</p>
                    </div>
                    <div className="Share">
                    <WhatsappShareButton id="media" url="http://localhost:3000">
                        <WhatsappIcon size={35} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton id="media" url="http://localhost:3000">
                        <LinkedinIcon size={35} round={true} />
                    </LinkedinShareButton>
                    <TelegramShareButton id="media" url="http://localhost:3000">
                        <TelegramIcon size={35} round={true} />
                    </TelegramShareButton>                 
                    <TwitterShareButton id="media" url="http://localhost:3000">
                        <TwitterIcon size={35} round={true} />
                    </TwitterShareButton>

                    </div>
                    <div className="describe">
                        <h3>Description</h3><br />
                        <p>{Elem.description}</p>
                    </div>
                    <div className="latest">
                        <h2>Latest bid : $500 &nbsp;<span>by kiran</span></h2>
                        <br />
                        <div className="latest_btn">
                            <button>Bid Now</button>
                            <button>Contact Seller</button>
                            <p>Must be greater <br /> than latest bid</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desc