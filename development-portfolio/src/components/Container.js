import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
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

    const transitions = useTransition(location, {
        from: { position: "absolute", opacity: 0, transform: "translate3d(100%, 0, 0)" },
        enter: { position: "relative", opacity: 1, transform: "translate3d(0%, 0, 0)" },
        leave: { position: "absolute", opacity: 0, transform: "translate3d(-25%, 0, 0)"}
    });

    return (
        <div>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
                <Header />
                <Nav pages={pageList} location={location} />
            </div>
            <div className="d-flex flex-column">
                <div className="order-first">
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
                <div className="order-last">
                    <Footer />
                </div>
            </div>
        </div>
    )
};