import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";

import './App.css';
const App = () => {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <div className="h-screen w-full flex justify-center mt-10">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                </div>
            </Switch>
        </HashRouter>
    )
}

const root = createRoot(document.body);
root.render(<App />);