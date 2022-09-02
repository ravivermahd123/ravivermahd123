import React from 'react'
import CakemakeCounter from '../component/cakemakeCounter/cakemakeCounter'
import CardBillinary from '../component/cardBillinary/cardBillinary'
import Counter from '../component/counter/counter'
import Footer from '../component/footer/Footer'
import BannerLast from '../component/lastBanner/bannerLast'
import Slider from '../component/slider/slider'
import TradeBanner from '../component/tradeBanner/tradeBanner'
import UsedCard from '../component/usedCard/usedCard'
import Headers from '../header/header'

export default function Home() {
  return (
   <>
        {/* <Headers/><br/><br/> */}
        <Slider/>
        {/* <Banner/> */}
        <UsedCard/>
        <TradeBanner/>
        <CardBillinary/>
        <CakemakeCounter/>
        <Counter/>
        <BannerLast/>
        {/* <Footer/> */}
   </>
  )
}
