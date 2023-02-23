import React from "react";
import Header from "./components/Header";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import 'bootstrap';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
        </div>
    )
}

export default App;