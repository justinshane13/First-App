import React from "react"
import Header from "./Components/Header"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"


export default function App() {
    return (
        <div className="page">
            <div className="wrapper-about-interests">
                <Header />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}