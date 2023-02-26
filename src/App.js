import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About/About";
import Footer from "./components/Footer";
import 'bootstrap';
import './App.css';

function App() {
    return <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/About" element={<><Header /><About /><Footer /></>}/>
        {/* finish routing after the rest of the pages are created */}
    </Routes>
}

export default App;