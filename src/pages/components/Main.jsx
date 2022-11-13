import React from "react"
import "../../assets/bootstrap/css/bootstrap.css"
import BG from "../../assets/images/Background1.png"

export default function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 pt-5 pr-5">
                    <div className="row main--row-one">
                       <p>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></p> 
                    </div>
                    <div className="row main--row-two pr-4">
                        We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </div>
                    <div className="row input-group mt-5 main--row-three">
                        <input type="text" className="form-control" placeholder="Search for location" />
                        <div className="input-group-append">
                            <button className="btn btn-success pl-5 pr-5" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 pt-2">
                    <img src={BG} alt="" />
                </div>
            </div>
        </div>
    )
}