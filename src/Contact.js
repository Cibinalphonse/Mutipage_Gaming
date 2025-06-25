import React from 'react'

function Contact() {
  return (
    <div>

  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
        
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="" style={{width: '158px'}}/>
                    </a>
                    
                    <ul class="nav">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="shop.html">Our Shop</a></li>
                      <li><a href="product-details.html">Product Details</a></li>
                      <li><a href="contact.html" class="active">Contact Us</a></li>
                      <li><a href="#">Sign In</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                
                </nav>
            </div>
        </div>
    </div>
  </header>

  <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Contact Us</h3>
          <span class="breadcrumb"><a href="#">Home</a> Contact Us</span>
        </div>
      </div>
    </div>
  </div>

  <div class="contact-page section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="left-text">
            <div class="section-heading">
              <h6>Contact Us</h6>
              <h2>Say Hello!</h2>
            </div>
            <p>Maleo is a small video game development company and collaborates based in Indonesia. They are well-known for creating a popular game called "Bus Simulator Indonesia" (aka BUSSID) since 2017. This game is a bus-driving simulation that has gained significant popularity among simulation game enthusiasts, especially in Indonesia. Their second game was called "Car Driving Online: Race World" (aka CDO), since 2022. Both games have been downloaded by 15 million users.</p>
            <ul>
              <li><span>Address</span> Indonesia</li>
              <li><span>Phone</span> +123 456 7890</li>
              <li><span>Email</span> queries@maleo.com</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-content">
            <div class="row">
              <div class="col-lg-12">
                <div id="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2774382627517!2d106.80385707475176!3d-6.358124293631877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef001c92dd69%3A0x2f496b1004755cd!2sMaleo%20Studio%20Jagakarsa!5e0!3m2!1sen!2sin!4v1749651776663!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div class="col-lg-12">
                <form id="contact-form" action="" method="post">
                  <div class="row">
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="name" name="name" id="name" placeholder="Your Name..." autocomplete="on" required/>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="surname" name="surname" id="surname" placeholder="Your Surname..." autocomplete="on" required/>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required=""/>
                      </fieldset>
                    </div>
                    <div class="col-lg-6">
                      <fieldset>
                        <input type="subject" name="subject" id="subject" placeholder="Subject..." autocomplete="on" />
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <textarea name="message" id="message" placeholder="Your Message"></textarea>
                      </fieldset>
                    </div>
                    <div class="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" class="orange-button">Send Message Now</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
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
        <p>Copyright © Maleo 2025. All rights reserved. &nbsp;&nbsp; <a rel="nofollow" href="https://templatemo.com" target="_blank"></a></p>
      </div>
    </div>
  </footer>

    </div>
  )
};

export default Contact