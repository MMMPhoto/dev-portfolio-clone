import React from "react";
import { AiFillGithub } from "react-icons/ai";

import portfolioItems from "../../data/portfolioItems";

export default function Portfolio() {

    return (
        <div>
            <h2>Portfolio</h2>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {portfolioItems.slice(0).reverse().map((item) => (
                    <div key={item.id} className="card text-black col-5 m-4">
                        <img className="" src={item.imgSrc}></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">
                                <a className="m-2" href={item.deploymentUrl} target="_blank">{item.name}</a>
                                <a className="m-2" href={item.githubRepo} target="_blank"><AiFillGithub /></a>
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>   
    )
};

/*                 
                <div className="card text-black col-5 m-4">
                    <img className="" src="https://via.placeholder.com/500x200"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Project Name</h5>
                    </div>
                </div>
                <div className="card text-black col-5 m-4">
                    <img className="" src="https://via.placeholder.com/500x200"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Project Name</h5>
                    </div>
                </div>
                <div className="card text-black col-5 m-4">
                    <img className="" src="https://via.placeholder.com/500x200"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Project Name</h5>
                    </div>
                </div>
                <div className="card text-black col-5 m-4">
                    <img className="" src="https://via.placeholder.com/500x200"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Project Name</h5>
                    </div>
                </div>
                <div className="card text-black col-5 m-4">
                    <img className="" src="https://via.placeholder.com/500x200"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Project Name</h5>
                    </div>
                </div>
            </div> */