import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import pageList from "../data/pageList";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    // const renderPage = () => {
    //     switch (currentPage) {
    //         case "About":
    //             return <About />;
    //         case "Portfolio":
    //             return <Portfolio />;
    //         case "Contact":
    //             return <Contact />;
    //         default:
    //             return <Resume />;
    //     };
    // };

    const handlePage = (page) => setCurrentPage(page);

    return (
        <div>
            <Router>
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                    <Header pageList={pageList} currentPage={currentPage} handlePage={handlePage} />
                    <Nav pages={pageList} currentPage={currentPage} handlePage={handlePage}/>
                </div>
                    <Routes>
                        <Route exact path="/" element={<About />} />
                        <Route exact path="/porfolio" element={<Portfolio />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/resume" element={<Resume />} />
                    </Routes>
                    {/* {renderPage()} */}
                <Footer />
            </Router>
        </div>
    )
};