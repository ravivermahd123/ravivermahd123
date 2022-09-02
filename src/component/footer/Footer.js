import React from 'react'
import "./style.css"

export default function Footer() {
  return (

    <div className="footer">
      <div className="container">
      <div className="col">
        <h1>ABOUT</h1>
        <ul>
         <li>Contact</li> 
          <li>Brand</li> 
              <li>Blog</li> 
                  <li>Community</li> 
                      <li>Litepaper</li> 
                          <li>—</li> 
                              <li>Online Store</li> 
        </ul>
      </div>
      <div className="col">
        <h1>HELP</h1>
        <ul>
          <li>Customer Support</li>
          <li>Troubleshooting</li>
          <li>Guides</li>
        </ul>
      </div>
     
      <div className="col">
        <h1>DEVELOPERS</h1>
        <ul>
          <li>Github</li>
          <li>Documentation</li>
          <li>Bug Bounty</li>
          <li>Audits</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="col">
        <h3 href ="/" className="PancakeSwap">PancakeSwap</h3>
        <br/>
        <button className="header-button">Connect Wallet</button>
      </div>
      <br/>
    
    <div className="clearfix"></div>
    <div className="icons">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-telegram"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-gitlab"></i>
      <i className="fa-solid fa-face-drooling"></i>
  </div>
    <hr/>
    <div className="Footercen">Footer@</div>
    </div> 
    </div>
  )
}
