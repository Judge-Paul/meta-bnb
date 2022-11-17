import React from "react"
import NavBar from "../components/NavBar"
import Main from "../components/Main"
import Inspiration from "../components/Inspiration"
import Nfts from "../components/Nfts"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <div>
            <NavBar />
            <Main />
            <Inspiration />
            <Nfts />
            <Footer />
        </div>
    )
}