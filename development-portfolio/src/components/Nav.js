import React from "react";

export default function Nav({pages}) { 
    return (
        <nav>
            <ul>
                {pages.map((page) => (
                <li>{page}</li>
                ))}            
            </ul>
        </nav>
    );
};