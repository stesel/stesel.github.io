import * as React from "react";
import "./App.css";
import { Home } from "./components/home/Home";

export const App: React.FunctionComponent = () => (
    <div className="App">
        <main>
            <Home />
        </main>
    </div>
);
