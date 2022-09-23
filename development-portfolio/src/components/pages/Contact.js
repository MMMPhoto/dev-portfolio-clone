import React from "react";

export default function Contact() {
    return (
        <div>
            <h3>Contact</h3>
            <form className="form-control border-0">
                <div className="form-group m-2">
                    <label for="name">Name</label>
                    <input name="name" type="text" className="form-control col-8"></input>    
                </div>
                <div className="form-group m-2">
                    <label for="email">Email</label>
                    <input name="email" type="email" className="form-control col-8"></input>    
                </div>
                <div className="form-group m-2">
                    <label for="message">Message</label>
                    <textarea name="" type="text" className="form-control col-8"></textarea>    
                </div>
                <div className="form-group m-2">
                    <button type="submit" className="btn border-secondary">Submit</button>
                </div>
            </form>
        </div>
    )
};