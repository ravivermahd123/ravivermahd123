import './App.css';
import Headers from './header/header'
import Banner from './banner/banner'
import Footer from './component/footer/Footer';
import BannerLast from './component/lastBanner/bannerLast';
import CakemakeCounter from './component/cakemakeCounter/cakemakeCounter';
import CardBillinary from './component/cardBillinary/cardBillinary';
import Slider from './component/slider/slider';
import UsedCard from './component/usedCard/usedCard';
import TradeBanner from './component/tradeBanner/tradeBanner';
import Counter from './component/counter/counter';
// import Home from './Link/Home';
import Earn from './Link/Earn'
import Win from './Link/Win'
import Home from './Link/Home'
import { BrowserRouter ,Router} from "react-router-dom";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import RoutesFolder from './Routes';

function App() {
  return (
    <div className="App">
   
    <Headers/>
   
     <RoutesFolder/>
     <Footer/>
          
            {/* <Routes>
            
               <Route exact path="/" element={<Home />} />
                <Route path="/Earn" element={<Earn />} />
                <Route path="/win" element={<Win />} />
          
            </Routes> */}
                {/* <Route path="*" element={<Faq />} /> */}
        {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
