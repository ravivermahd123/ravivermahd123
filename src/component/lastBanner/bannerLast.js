import React from 'react'
import Image from '../../asset/images12.jpeg'

export default function BannerLast() {
  return (
   
    <div class="bannerInSeconData">

    <div id="grad1">
        <div class="bannerseconImage"><img src={{Image}} alt="" /></div>
        <div class="bannerseconImage1"><img src="../asset/image.webp" alt="" /></div>
        <div class="bannerseconImage2"><img src="../asset/image.webp" alt="" /></div>

        <div class="grad1-text">
            <h1>Start in seconds.</h1>
            <p>Connect your crypto wallet to start using the app in seconds.</p>
               <h4>No registration needed.</h4> 
                <h4 style={{color:'rgb(31, 199, 212)'}}>Learn how to start</h4>
                <button class="bannr-button">Connect Wallet</button>
               
              
        </div>
       
        
    </div>
     {/* <div class ="grad12876">
        <div class="bannerseconImage"><img src="../asset/image.webp" alt=""></div>
        <div class="bannerseconImage1"><img src="../asset/image.webp" alt=""></div>
        <div class="bannerseconImage2"><img src="../asset/image.webp" alt=""></div>
    </div>  */}
</div>
    
  )
}
