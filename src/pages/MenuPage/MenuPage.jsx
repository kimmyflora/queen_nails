import "./MenuPage.css";
import React from 'react'


export default function MenuPage() {
    return (
        <div className="menu-container">
            <h1>Our Services</h1>
            <div className="service">
                <h2>Manicures</h2>
                <ul>
                    <li>Regular Manicure Starts at  <span>$16</span></li>
                    <li>Gel Manicure <span>$28</span></li>
                </ul>
            </div>
            <div className="service">
                <h2>Pedicures</h2>
                <ul>
                    <li>Regular Pedicure Starts at <span>$25</span></li>
                    <li>Regualr Gel Pedicure Starts at <span>$35</span></li>
                </ul>
            
            </div>
            <div className="service">
                <h2>Nail Art</h2>
                <ul>
                    <li>Fench additional <span>$5</span></li>
                    <li>Designs start at <span>$5</span> </li>
                    <li>Chrome additional <span>$10</span></li>
                    
                </ul>
            
              
            </div>
            <div className="service">
                <h2> Other Services</h2>
                <ul>
                    <li>Lip Waxing <span>$8</span></li>
                     <li>Eyebrow Waxing <span>$12</span> </li>
                    <li>Gel Color Additional <span>$10</span> </li>
                </ul>


            </div>
        </div>
    )
}