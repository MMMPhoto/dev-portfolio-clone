import React from "react";
import { AiFillGithub } from "react-icons/ai";

import portfolioItems from "../../data/portfolioItems";
import "../../styles/Portfolio.css";

export default function Portfolio() {

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {portfolioItems.slice(0).reverse().map((item) => (
                    <div key={item.id} className="card text-black col-5 m-4">
                        <div className="d-flex justify-content-center align-items-start overflow-hidden">
                            <img className="flex-shrink-0 portfolio-img" src={item.imgSrc} alt={item.name}></img>
                        </div>
                        <div className="card-img-overlay overlay">
                            <h5 className="card-title w-100 h-20">
                                <a className="m-2 portfolio-link" href={item.deploymentUrl} target="_blank" rel="noreferrer">{item.name}</a>
                                <a className="m-2 portfolio-link" href={item.githubRepo} target="_blank" rel="noreferrer"><AiFillGithub /></a>
                            </h5>
                            <p className="card-text w-100 h-80 m-2 portfolio-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
};