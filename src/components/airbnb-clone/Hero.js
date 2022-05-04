import React from "react"
import heroImg from "../../img/airbnb-clone/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero section-air">
            <img src={heroImg} className="hero--photo" alt="poster"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}