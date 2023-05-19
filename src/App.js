import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import FeaturedHouse from "./components/FeaturedHouse/FeaturedHouse";
import ReadySell from "./components/ReadySell/ReadySell";
import SeeReview from "./components/SeeReview";
import TipsTrick from "./components/TipsTrick";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <FeaturedHouse/>
            <ReadySell/>
            <SeeReview/>
            <TipsTrick/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}


export default App;
