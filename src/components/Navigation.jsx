import React from "react"
import geo from "../assets/images/location.png"

export default function Navigation() {
    return (
        <div>
            <nav>
                <ul class="nav justify-content-center nav-fill pt-1">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Resturant</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cottage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fantasy City</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Beach</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Cabins</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Off-grid</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Farm</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src={geo} width="130px" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}