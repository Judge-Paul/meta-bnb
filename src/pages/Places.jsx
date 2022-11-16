import React from "react"
import NavBar from "../components/NavBar"
import Place from "../components/Place"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export default function Places() {
    return (
        <div>
            <NavBar />
            <Navigation />
            <Place />
            <Footer />
        </div>
    )
}