import React from "react";
import mmmLogo from "../images/mmm-web-logo.svg";

export default function Header({pageList, currentPage, handlePage}) {

    return (
        <header className="col-6 p-3">
            <h1>Max McDonough</h1>
            <img src={mmmLogo} alt="mmm site logo" />
        </header>
    );
};