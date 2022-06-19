import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Projects from "./Projects";

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="App">
                <h1>App</h1>
                <Projects />
            </div>
        </React.Fragment>
    );
};

export default App;
