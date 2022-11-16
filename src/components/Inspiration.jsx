import React from "react"
import "../assets/bootstrap/css/bootstrap.css"
import Card from "./Card"

export default function Inspiration() {
    const Images = ["nothing",
        "img1.png",
        "img2.png",
        "img3.png",
        "img4.png",
        "img5.png",
        "img6.png",
        "img7.png",
        "img8.png",
        "img9.png",
        "img10.png",
        "img11.png",
        "img12.png"
    ]
    
    return (
        <div>
            <h2 className="text-center display-4 pt-5 mt-3 pb-4" style={{ fontWeight: 500 }}>
                Inspiration for your next adventure
            </h2>
            <div className="container pb-4">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[1]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[2]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[3]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[4]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[5]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[6]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[7]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[8]} /></div>
                </div>
            </div>
        </div>
    )
}