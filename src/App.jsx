// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import './App.css';
import CamperItem from "./components/CamperItem/CamperItem";
import { Layout } from "./Layout";


function App() {
 

  return (
    <>
    {/* <Routes>
    <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperItem />} />
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>      */}
       <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperItem />} />
        <Route path="*" element={<Home />} />
       
      </Routes>     
    </>
  )
}

export default App
