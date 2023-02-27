import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import 'bootstrap';
import './App.css';

function App() {
    return <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/about" element={<><Header /><About /><Footer /></>}/>
        <Route path="/projects" element={<><Header /><Projects /><Footer /></>}/>
        <Route path="/resume" element={<><Header /><Resume /><Footer /></>}/>
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>}/>
    </Routes>
}

export default App;