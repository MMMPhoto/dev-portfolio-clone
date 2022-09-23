import React, { useState }from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
    const pageList = [
        {
            id: 1,
            name: 'About',
            url: '#About'
        },
        {
            id: 2,
            name: 'Portfolio',
            url: '#Portfolio'
        },
        {
            id: 3,
            name: 'Contact',
            url: '#Contact'
        },
        {
            id: 4,
            name: 'Resume',
            url: '#Resume'
        },
    ];

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
            <div className="d-flex flex-row col-12">
                <Header pageList={pageList} currentPage={currentPage} handlePage={handlePage} />
                <Nav pages={pageList} currentPage={currentPage} handlePage={handlePage}/>
            </div>
            <main className="p-3">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
};