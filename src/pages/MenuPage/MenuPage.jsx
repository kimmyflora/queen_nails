import "./MenuPage.css";
import React from 'react';

export default function MenuPage() {
    return (
        <div className="content">
            <div className="menu-container">
                <h1 className="menu-title">Our Services</h1>

                <div className="services-grid">
                    {/* Manicures */}
                    <div className="service-card">
                        <h2>Manicures</h2>
                        <ul>
                            <li>Regular Manicure Starts at <span>$16</span></li>
                            <li>Gel Manicure <span>$28</span></li>
                        </ul>
                    </div>

                    {/* Pedicures */}
                    <div className="service-card">
                        <h2>Pedicures</h2>
                        <ul>
                            <li>Regular Pedicure Starts at <span>$25</span></li>
                            <li>Regular Gel Pedicure Starts at <span>$35</span></li>
                        </ul>
                    </div>

                    {/* Nail Art */}
                    <div className="service-card">
                        <h2>Nail Art</h2>
                        <ul>
                            <li>French additional <span>$5</span></li>
                            <li>Designs start at <span>$5</span></li>
                            <li>Chrome additional <span>$10</span></li>
                        </ul>
                    </div>

                    {/* Other Services */}
                    <div className="service-card">
                        <h2>Other Services</h2>
                        <ul>
                            <li>Lip Waxing <span>$8</span></li>
                            <li>Eyebrow Waxing <span>$12</span></li>
                            <li>Gel Color Additional <span>$10</span></li>
                            <li>Gel Removal <span>$5</span></li>
                            <li>Nail Removal <span>$15</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
