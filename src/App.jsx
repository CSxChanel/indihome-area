// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Router from "./Router.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import BannerSlider from './components/BanerSlider/BannerSlider.jsx'

function App() {
    return (
        <ErrorBoundary>
            <Navbar />
                <BannerSlider />
            <Router />
        </ErrorBoundary>
    );
}

export default App;
