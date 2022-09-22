import React from "react";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav>
            <ul>
                {pages.map((page) => (
                <li key={page.id}>
                    <a href={page.url} onClick={() => handlePage(page.name)}>{page.name}</a>
                </li>
                ))}
            </ul>
        </nav>
    );
};