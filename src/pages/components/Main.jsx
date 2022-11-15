import React from "react"
import "../../assets/bootstrap/css/bootstrap.css"
import BG from "../../assets/images/Background1.png"

export default function Main() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-6 outline main--col-one">
                    <h2 className="pb-4 pt-4">Rent a <strong>Place</strong> away from <strong>Home</strong> in the <strong>Metaverse</strong></h2>
                    <p>We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    {/* <div className="input-group pt-4">
                        <input type="text" className="form-control" placeholder="Search for location" />
                        <div className="input-group-append">
                            <button className="btn btn-success pl-5 pr-5" type="submit">Search</button>
                        </div>
                    </div> */}
                </div>
                <div className="col-lg-1 invis-col">

                </div>
                <div className="col-lg-5 outline">
                    <img src={BG} alt="Background Image 1" width="100%" />
                </div>
            </div>
        </div>
    )
}