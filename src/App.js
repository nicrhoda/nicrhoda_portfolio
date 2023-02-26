import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About/About";
import 'bootstrap';
import './App.css';

function App() {
    return <Routes>
        <Route path="/" element={<><Header /><Home /></>}/>
        <Route path="/About" element={<About />}/>
    </Routes>
}

export default App;