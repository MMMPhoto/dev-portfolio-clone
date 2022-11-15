import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import pageList from "../data/pageList";

export default function Container() {

    return (
        <div>
            <Router>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <Header />
                    <Nav pages={pageList} />
                </div>
                    <Routes>
                        <Route exact path="/Development-Portfolio" element={<About />} />
                        <Route exact path="/Development-Portfolio/work" element={<Portfolio />} />
                        <Route exact path="/Development-Portfolio/contact" element={<Contact />} />
                        <Route exact path="/Development-Portfolio/resume" element={<Resume />} />
                    </Routes>
                <Footer />
            </Router>
        </div>
    )
};