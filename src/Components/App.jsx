import React from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import Carousel from "./Carousel"
import Footer from "./Footer"
import About from "./About"
import Events from "./Events"
import TestimonialCard from "./Testimonials"

function App(){
    return (
        <div className="container">
        <Header /> 
        <NavBar />
        <Carousel />
        <About />
        <Events />
        <TestimonialCard img="https://picsum.photos/100" position="WIE Chair" />
        <Footer />
        </div>   
    );
}

export default App;