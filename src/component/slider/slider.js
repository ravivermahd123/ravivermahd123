import React from 'react'
import './style.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Slider() {
  return (
    <div>
        
    <div className="bannr1">
        <div className="container " >
        <Carousel variant="dark" >
    
      <Carousel.Item >
        <p
          className="d-block w-100"
          // src="https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg"
          alt="Second slide"
          // height="200px"
          style={{borderRadius:'10px 10px 10px 10px' ,width:'100%' ,height:'200px' ,background:'rgb(122, 110, 170)'}}
        />
        <Carousel.Caption > 
           <div className='row'>
            <div className='col-6'>
                <h2 style={{color:'yellow'}}>Soon</h2>
                <h1 style={{color:'aliceblue'}}>WOM IFO</h1>
                <button className="header-button"> Go TO  IFO</button>
           </div>
           <div className='col-6'>
               <img src =""/>
           </div>
           </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="d-block w-100 "
          src="https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg"
          alt="Third slide"
          height="200px"
        /> */}
         <p
          className="d-block w-100"
          // src="https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg"
          alt="Second slide"
          // height="200px"
          style={{borderRadius:'10px 10px 10px 10px',width:'100%' ,height:'200px' ,background:'rgb(122, 110, 170)'}}
        />
        <Carousel.Caption  style={{color:'white' }}>
        <h2 style={{color:'yellow'}}>Win $90,869 in Lottery</h2>
                <h1 style={{color:'aliceblue'}}>1 Day 4min </h1>
                <button className="header-button"> Play Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           
            <div className="row">
                <div className="col-6 ">
                    <div className="text">
                      <h1>  The moon is made of pancakes.</h1>
                      <h3>Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.</h3>
                     <div className="button-banner"> 
                        <button className="bannr-button"> Connect Wallet</button>
                      <button className="bannr1-button"> Trade Now</button>
                        </div>
                    </div>
                </div>
                <div className="col-6 " >
                   <img src='https://as1.ftcdn.net/v2/jpg/00/82/48/80/1000_F_82488030_Ryfg7hmuwtmbZ0I6gTEBnavlfi4h0CdH.jpg ' style={{width:'100%' ,height:'500px',margin:'auto 0'}}/>
                </div>
            </div> 
        </div>
    </div>
    </div>
  )
}
