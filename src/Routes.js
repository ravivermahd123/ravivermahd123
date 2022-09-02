
import React from 'react'
import Headers from './header/header'
import Earn from './Link/Earn'
import Win from './Link/Win'
import Home from './Link/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function RoutesFolder() {
  return (
          
            <Routes>
            
               <Route exact path='/' element={<Home />} />
                <Route path="/Earn" element={<Earn />} />
                <Route path="/win" element={<Win />} />
                {/* <Route path="*" element={<Faq />} /> */}
          
            </Routes>
        // </Router>
  )
}
