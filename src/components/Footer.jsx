import React from "react"
import Logo from "../assets/images/footer-logo.png"
import "../assets/bootstrap/css/bootstrap.css"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer() {
    return (
        <footer>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Logo} alt="Metabnb" className="mb-5 pb-5" />
                        <div className="social-icons pb-5">
                            <a href="#" className="pr-4"><FaFacebook /></a>
                            <a href="#" className="pr-4"><FaInstagram /></a>
                            <a href="#" className="pr-4"><FaTwitter /></a>
                        </div>
                        <h5>&copy; 2022 Metabnb</h5>
                    </div>
                    <div className="col-md">
                        <h5 className="py-3">Community</h5>
                        <p>NFT</p>
                        <p>Tokens</p>
                        <p>Landlords</p>
                        <p>Discord</p>
                    </div>
                    <div className="col-md">
                        <h5 className="py-3">Places</h5>
                        <p>Castle</p>
                        <p>Farms</p>
                        <p>Beach</p>
                        <p>Learn more</p>
                    </div>
                    <div className="col-md">
                        <h5 className="py-3">About us</h5>
                        <p>Road map</p>
                        <p>Creators</p>
                        <p>Career</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}