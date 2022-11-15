import { Route, Routes, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import pageList from "../data/pageList";

export default function Container() {

    let location = useLocation();
    console.log(location);

    // const transitions = useTransition(location, {
    // });
    
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0%, 0)" },
        leave: { opacity: 0, transform: "translate(-100%, 0)" }
    })

    return (
        <div>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
                <Header />
                <Nav pages={pageList} location={location} />
            </div>
                {transitions((props, item) => (
                    <animated.div style={props}>
                        <Routes location={item}>
                            <Route path="/Development-Portfolio" element={<About />} />
                            <Route path="/Development-Portfolio/work" element={<Portfolio />} />
                            <Route path="/Development-Portfolio/contact" element={<Contact />} />
                            <Route path="/Development-Portfolio/resume" element={<Resume />} />
                        </Routes>
                    </animated.div>
                ))}
        </div>
    )
};