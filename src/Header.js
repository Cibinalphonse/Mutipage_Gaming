import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div><header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
        
                    <Link to="/" class="logo">
                        <img src="assets/images/logo.jpg" alt="" style={{width: '158px',background:'transparent'}}/>
                    </Link>
                    
                    <ul class="nav">
                      <li><Link to="/" class="Active">Home</Link></li>
                      <li><Link to="/Shop">Our Shop</Link></li>
                      <li><a href="product-details.html">Product Details</a></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li><a href="#">Sign In</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                
                </nav>
            </div>
        </div>
    </div>
  </header></div>
  )
}

export default Header