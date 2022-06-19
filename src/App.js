import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </React.Fragment>
    );
};

export default App;
