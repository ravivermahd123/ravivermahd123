import React from 'react'
import './style.css'
// import Image from 'src/asset/image.webp'
// import { Image } from '../../../src/asset/image.webp'

export default function TradeBanner() {
  return (

<div className="CAKEMakes">
    <div className="container2">
    <div className="row">
        <div className="col-6">
            <div className="text">
                <h1 style={{fontSize: '30px' }}>Trade <span style={{color:' rgb(122, 110, 170)'
                }}>Trade anything. No registration, no hassle..</span></h1>
                <p style={{color: 'rgb(122, 110, 170)'}}
              >Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.</p>
                <button className="bannr-button" style={{float:'left'}}>Trade Now</button>
                <h4 > Learn</h4>


            </div>
        </div>
        <div className="col-6">
            <div className="bannerseconImage2"><img src="https://pancakeswap.finance/images/home/flying-pancakes/1-top@2x.webp" alt=""/></div>
            <div className="bannerseconImage"><img src="https://pancakeswap.finance/images/home/flying-pancakes/1-top@2x.webp" alt=""/></div>
            <div className="bannerseconImage1"><img src="https://pancakeswap.finance/images/home/flying-pancakes/1-top@2x.webp" alt=""/></div>
    
        </div>
    </div>
</div>
   
</div>
    
    )
}
