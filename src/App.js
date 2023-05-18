import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <FeaturedHouse/>
        </div>
    );
}

export default App;
