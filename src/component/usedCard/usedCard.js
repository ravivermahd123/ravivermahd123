import React from 'react'
import './style.css'
export default function UsedCard() {
  return (
    
    <div className ="Cards">
        <div className="container2">
            <div className="CardsText">
                    <i className="fa-brands fa-mandalorian " style={{color:'#007aff',fontSize:'40px'}}></i>
                <h1>Used by millions.</h1>
                 <h1 >Trusted with billions.</h1>
                 <p>PancakeSwap has the most users of any decentralized platform, ever.</p>
                 <p>And those users are now entrusting the platform with over $4 billion in funds.</p>
                 <h4>Will you join them?</h4>
            </div>
    
                 <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="container">
                                <i className="fa-solid fa-address-book" style={{color:'#007aff', fontSize:'40px'}}></i>
                              <h1>2.2 million</h1> 
                              <h2 >users</h2> 
                              <small>in the last 30 days</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="container">
                                <i className="fa-solid fa-address-book" style={{color:'#007aff', fontSize:'40px'}}></i>
                              <h1>2.2 million</h1> 
                              <h2 >users</h2> 
                              <small>in the last 30 days</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="container">
                                <i className="fa-solid fa-address-book" style={{color:'#007aff',fontSize:'40px'}}></i>
                              <h1>2.2 million</h1> 
                              <h2 >users</h2> 
                              <small>in the last 30 days</small>
                            </div>
                        </div>
                    </div>
                 </div>
            
        </div>
    </div>
  )
}
