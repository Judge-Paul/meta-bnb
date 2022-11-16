import React from "react"
import "../assets/bootstrap/css/bootstrap.css"
import BG from "../assets/images/Background2.png"

export default function Nfts() {
    return (
        <section id="nfts" className="pt-5 pb-5 px-5">
            <div className="container pt-5 pb-5">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h4 className="display-4 font-weight-bold pb-4">Metabnb NFTs</h4>
                        <p className="pb-4">
                        Discover our NFT gift cards collection.
                        Loyal customers get amazing gift cards which are traded as NFTs.
                        These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>
                        <button type="button" className="btn btn-light btn-lg px-5 pt-3 pb-3">Learn More</button>
                    </div>
                    <div className="col-lg-7 pt-5">
                        <img src={BG} alt="NFTs Background" />
                    </div>
                </div>
            </div>
        </section>
    )
}