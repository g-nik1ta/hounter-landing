import React from "react";
import './styles/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
        </div>
    );
}

export default App;
