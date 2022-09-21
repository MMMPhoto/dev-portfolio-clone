import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

export default function PortfolioContainer() {
    return (
        <div>
            <Header pages={pages}/>
            <p>This is the content</p>
            <Footer />
        </div>
    )
};