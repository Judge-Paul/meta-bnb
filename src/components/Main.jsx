import React from "react"
import "../assets/bootstrap/css/bootstrap.css"
import BG from "../assets/images/Background1.png"
import MBToken from "../assets/images/MBToken.png"
import MMask from "../assets/images/Meta-Mask.png"
import OSea from "../assets/images/OpenSea.png"

export default function Main() {
    return (
        <div>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-xl-6 col-lg-7 outline main--col-one">
                        <h2 className="pb-4 pt-4">Rent a <strong>Place</strong> away from <strong>Home</strong> in the <strong>Metaverse</strong></h2>
                        <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                        <div className="input-group input-group-lg">
                            <input type="text" class="form-control" placeholder="Search" />
                            <div class="input-group-append">
                                <a href="#" className="btn px-5 pl-5 pr-5">Search</a>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                        </div>
                    </div>
                    <div className="col-xl-1 invis-col">

                    </div>
                    <div className="col-xl-5 col-lg-5 outline">
                        <img src={BG} alt="Background Image 1" width="100%" />
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className="container-fluid main--footer mt-5">
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={MBToken} alt="MBToken" />
                            </div>
                            <div className="col-md-4"> 
                                <img src={MMask} alt="MetaMask" />
                            </div>
                            <div className="col-md-4">
                                <img src={OSea} alt="OpenSea" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}