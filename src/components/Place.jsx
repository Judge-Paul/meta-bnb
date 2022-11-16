import React from "react"
import "../assets/bootstrap/css/bootstrap.css"
import Card from "./Card"

export default function Place() {
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
        "img12.png",
        "img13.png",
        "img14.png",
        "img15.png",
        "img16.png"
    ]

    return (
        <div>
            <div className="container pb-5 mb-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[5]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[6]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[7]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[8]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[1]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[2]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[3]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[4]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[9]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[10]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[11]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[12]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[13]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[14]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[15]} /></div>
                    <div className="col-xl-3 col-lg-4 col-md-6 pb-4"><Card img={Images[16]} /></div>
                </div>
            </div>
        </div>
    )
}