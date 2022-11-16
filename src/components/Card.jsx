
import React from "react";
import star from "../assets/images/star.png"
import "../assets/bootstrap/css/bootstrap.css"

export default function Card(props) {
    return (
      <div>
        <div className="card-container">
            <div className="card-el mx-2 my-3 px-1">
                <img src={`../../src/assets/images/cards/${props.img}`} alt="" />
                <div className="d-flex pt-2">
                    <span className= "mr-auto">Desert king</span>
                    <span><b>1 MBT per night</b></span>
                </div>
                <div className="d-flex pt-2">
                    <span className="mr-auto">2345km away</span>
                    <span>available for 2 weeks stay</span>
                </div>
                <div className="d-flex pt-3"> 
                    <img src={star} alt="Star" className="pr-2" />
                    <img src={star} alt="Star" className="pr-2" />
                    <img src={star} alt="Star" className="pr-2" />
                    <img src={star} alt="Star" className="pr-2" />
                    <img src={star} alt="Star" className="pr-2" />
                </div>
                </div>
        </div>
      </div>
    )
}
