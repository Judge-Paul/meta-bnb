import React from "react"
import Navbar from "../components/Navbar"
import Main from "../components/Main"
import Inspiration from "../components/Inspiration"
import Nfts from "../components/Nfts"

export default function Home() {
    return (
        <div>
            <Navbar />
            <Main />
            <Inspiration />
            <Nfts />
        </div>
    )
}