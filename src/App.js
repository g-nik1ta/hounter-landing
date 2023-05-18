import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";
import ReadySell from "./components/ReadySell";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <FeaturedHouse/>
            <ReadySell/>
        </div>
    );
}

export default App;
