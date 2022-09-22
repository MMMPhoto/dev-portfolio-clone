import React from "react";

export default function Nav({pages}) { 
    return (
        <nav>
            <ul>
                {pages.map((page) => (
                <li key={page}>
                    <a href={page}>{page}</a>
                </li>
                ))}
            </ul>
        </nav>
    );
};