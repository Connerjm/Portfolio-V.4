import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

export default function App()
{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={["/", "/home"]}>
                    <Home />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}