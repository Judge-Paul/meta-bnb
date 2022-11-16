import React, { useState } from "react"
import "../assets/bootstrap/css/bootstrap.css"
import Logo from "../assets/images/logo.png"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import Card from "react-bootstrap/Card"
import MMIcon from "../assets/images/metamask.png"
import WCIcon from "../assets/images/walletconnect.png"

export default function NavBar() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
                <Navbar expand="lg" className="pt-3 pb-5 container">
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Meta bnb logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/" className="pr-3">Home</Nav.Link>
                        <Nav.Link href="/places" className="pr-3 pl-2">Places to stay</Nav.Link>
                        <Nav.Link href="#nfts" className="pr-3 pl-2">NFTs</Nav.Link>
                        <Nav.Link href="#" className="pl-2">Community</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button className="btn" id="navbar-btn" onClick={handleShow}> Connect Wallet</Button>

                    <Modal show={show} onHide={handleClose} centered  className="modal">
                        <Modal.Header>
                            <Modal.Title>
                                Connect Wallet
                                <button type="button" onClick={handleClose} className="modal-close ml-auto">&times;</button>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="pb-4">
                            <p>Choose your preferred wallet:</p>
                            <Card className="mb-2">
                                <a href="#">
                                    <Card.Body className="pb-3">
                                        <img src={MMIcon} alt="Metamask" className="pr-3" />
                                        <b className="">Metamask</b>
                                    </Card.Body>
                                </a>
                            </Card>
                            <Card className="mt-3">
                                <a href="#">
                                    <Card.Body className="pb-3">
                                        <img src={WCIcon} alt="Wallet Connect" className="pr-3" />
                                        <b>WalletConnect</b>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Modal.Body>
                    </Modal>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
        </div>
    )
}