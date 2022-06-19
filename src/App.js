import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Projects from "./components/Projects";
import Home from "./components/Home";

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="App">
                <Home />
                <Projects />
            </div>
        </React.Fragment>
    );
};

export default App;
