import React from 'react'

function Home(){
    return(
<div>


  <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="caption header-text">
            <h6 style={{fontSize:'60px',fontStyle:'italic',fontFamily:'cursive'}}>Welcome to Maleo</h6>
            <h2>A Best Site For Downloading Bus,Truck Simulation Games!</h2>
            <p>Maleo is a online site for downloading & playing Bus,Truck Simulation games. You can download both online & offline games for both mobile & PC.</p>
            <div class="search-input">
              <form id="search" action="#">
                <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                <button role="button">Search Now</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-2">
          <div class="right-image">
            <img src="assets/images/bussid.webp" alt="" width="300px" height="350px"/>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <a href="#">
            <div class="item">
              <div class="image">
                <img src="assets/images/featured-01.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>Less Storage</h4>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a href="#">
            <div class="item">
              <div class="image">
                <img src="assets/images/featured-02.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>10Million+Downloads</h4>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a href="#">
            <div class="item">
              <div class="image">
                <img src="assets/images/featured-03.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>User Friendly</h4>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-md-6">
          <a href="#">
            <div class="item">
              <div class="image">
                <img src="assets/images/featured-04.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>Easy Handling</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="section trending">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Trending</h6>
            <h2>Trending Bus Simulations</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/bussid-1.jpg" alt=""/></a>
              <span class="price"><em>$80</em>$70</span>
            </div>
            <div class="down-content">
              <span class="category">Trending</span>
              <h4>Bus Simulator Indonesia</h4>
              <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/bus-simulator-ultimate.jpg" alt=""/></a>
              <span class="price">$44</span>
            </div>
            <div class="down-content">
              <span class="category">Simulation</span>
              <h4>Bus Simulator Ultimate</h4>
              <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/city-bus-game.jpeg" alt=""/></a>
              <span class="price"><em>$60</em>$45</span>
            </div>
            <div class="down-content">
              <span class="category">Racing</span>
              <h4>City Bus Game</h4>
              <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/urban-bus-simulator.jpg" alt=""/></a>
              <span class="price">$40</span>
            </div>
            <div class="down-content">
              <span class="category">City Rush</span>
              <h4>Urban Bus Simulator</h4>
              <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section most-played">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Truck Simulations</h6>
            <h2>Most Played</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/ets.jpg" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Adventure</span>
                <h4>Truck Simulator Indonesia</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/ets-2.webp" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Long Haul</span>
                <h4>Euro Truck Driver</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/Truck-simulator.jpg" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Adventure</span>
                <h4>Truck Simulator Indonesia</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/truck-simulator-ultimate.webp" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Fun</span>
                <h4>Truck Simulator Ultimate</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/ats.jpg" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Smoking</span>
                <h4>American Truck Simulator</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/last-truck.jpeg" alt=""/></a>
            </div>
            <div class="down-content">
                <span class="category">Experience</span>
                <h4>Real Truck Simulation</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="section cta">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="shop">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h6>Our Shop</h6>
                  <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For <em>You!</em></h2>
                </div>
                <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                <div class="main-button">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-2 align-self-end">
          <div class="subscribe">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h6>NEWSLETTER</h6>
                  <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                </div>
                <div class="search-input">
                  <form id="subscribe" action="#">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..."/>
                    <button type="submit">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <div class="container">
      <div class="col-lg-12">
        <p>Copyright © Maleo 2025 . All rights reserved. &nbsp;&nbsp; <a rel="nofollow" href="kernet@bussimulator.id" target="_blank"></a></p>
      </div>
    </div>
  </footer>
  </div>
  )
  }

  export default Home