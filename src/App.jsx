import React from "react"
import Home from "./pages/Home"
import Places from "./pages/Places"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={
                <div>
                    <Home />
                </div> 
            } />
            <Route path="/home" element={
                <div>
                    <Home />
                </div> 
            } />
            <Route path="/places" element={
                <div>
                    <Places />
                </div>
            } />
        </Routes>
    </Router>
  )
}