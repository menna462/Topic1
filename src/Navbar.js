/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useCart } from 'react-use-cart'



function Navbar() {
    const {totalItems}= useCart();
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" to="index.html">
                        <i className="bi-back"></i>
                        <span>Topic</span>
                    </a>

                    <div className="d-lg-none ms-auto me-4">
                        <a to="#top" className="navbar-icon bi-person smoothscroll"></a>
                    </div>
    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5 me-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/BrowseTopics">Browse Topics</a>
                            </li>
    
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/How it works">How it works</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/FAQs">FAQs</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/Topics">Topics Listing</a></li>
                                    <li><a className="dropdown-item" href="/contact">Contact Form</a></li>
                                    
                                </ul>
                            </li>

                            {/* <li className="nav-item">
                                <a className="nav-link click-scroll" to="/Product">Product</a>
                            </li> */}

                            <li className="nav-item">
                                <a  className="nav-link click-scroll" href="/Shopping">Shopping</a>
                            </li>
                            <li className="nav-item">
                                <a  className="nav-link click-scroll" href="/cart">
                                <i className="fa-solid fa-person-walking-luggage icon">({totalItems})</i>
                                </a>
                            </li>
                           
                        </ul>

                        <div className="d-none d-lg-block">
                            <a to="#top" className="navbar-icon bi-person smoothscroll"></a>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar
