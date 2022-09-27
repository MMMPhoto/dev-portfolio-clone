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

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            default:
                return <Resume />;
        };
    };

    const handlePage = (page) => setCurrentPage(page);

    return (
        <div>
            <div className="d-flex flex-row justify-content-between">
                <Header pageList={pageList} currentPage={currentPage} handlePage={handlePage} />
                <Nav pages={pageList} currentPage={currentPage} handlePage={handlePage}/>
            </div>
            <main className="p-3 col-12 w-100">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
};