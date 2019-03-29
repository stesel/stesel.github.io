import React, { Component } from "react";
import "./App.css";
import { Home } from "./components/home/Home";

class App extends Component {
    public render() {
        return (
            <div className="App">
                <main>
                    <Home />
                </main>
            </div>
        );
    }
}

export default App;
