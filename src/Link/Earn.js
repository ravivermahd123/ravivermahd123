import React from 'react'

import Headers from '../../src/header/header'
import Footer from '../component/footer/Footer';
import TradeBanner from '../component/tradeBanner/tradeBanner';
import UsedCard from '../component/usedCard/usedCard';


export default function Earn() {
  return (
    <>
     {/* <Headers/> */}
        <UsedCard/>
        <TradeBanner/>
        {/* <Footer/> */}
    </>
  )
}
