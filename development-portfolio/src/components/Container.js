import React, { useState }from "react";
import Header from "./Header";
import Footer from "./Footer";

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

export default function Container(PageTypes) {
    const [currentPage, setCurrentPage] = useState('About');

    return (
        <div>
            <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>main content</main>
            <Footer />
        </div>
    )
};