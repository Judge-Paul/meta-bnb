import React, { useState } from "react"
import "../../assets/bootstrap/css/bootstrap.css"
import Logo from "../../assets/images/logo.png"
import Modal from "react-bootstrap/Modal"
import Card from "react-bootstrap/Card"
import { FaChevronRight } from "react-icons/fa"
import MMIcon from "../../assets/images/metamask.png"
import WCIcon from "../../assets/images/walletconnect.png"

export default function Navbar() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <nav className="navbar navbar-expand-sm pt-3 pb-5">
                <a className="navbar-brand ml-5 pl-5" href="#"> <img src={Logo} alt="Meta bnb logo" /> </a>
                
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item pr-3">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item pr-3 pl-2">
                    <a className="nav-link" href="#">Place to stay</a>
                    </li>
                    <li className="nav-item pr-3 pl-2">
                    <a className="nav-link" href="#">NFTs</a>
                    </li>
                    <li className="nav-item pl-2">
                    <a className="nav-link" href="#">Community</a>
                    </li>
                </ul>
                <form className="form-inline ml-auto mr-5 pr-5">
                    <button type="button" className="btn" onClick={handleShow}>Connect Wallet</button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                        <Modal.Title>
                            <div className="row">
                                <div className="col-md-10">  
                                    Connect Wallet
                                </div>
                                <div className="col-md-2">
                                    <span><button type="button" className="align-top" onClick={handleClose}>&times;</button></span>  
                                </div>
                            </div>
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="pb-4">
                            <p>Choose your preferred wallet:</p>
                            <Card className="mb-2">
                                <Card.Body className="pb-3">
                                    <a href="">`<img src={MMIcon} alt="Metamask" className="pr-3" /></a>
                                    <b className="">Metamask</b>
                                    <span><FaChevronRight className="align-bottom" /></span>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3">
                                <Card.Body className="pb-3">
                                    <img src={WCIcon} alt="Wallet Connect" className="pr-3" />
                                    <b>WalletConnect</b>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                    </Modal>
                </form>
            </nav>
        </div>
    )
}