import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img src="./Images/Headshot.jpg" className="headshot" />
            <h1 className="name">Justin Thomas</h1>
            <h3 className="title">Frontend Developer</h3>
            <h4 className="email">justinshane13@gmail.com</h4>
            <button type="button" className="button-email"><img src="./Images/Mail.png" /> Email</button>
            <button type="button" className="button-linkedin"><img src="./Images/linkedin.png" /> LinkedIn</button>
        </header>
    )
}