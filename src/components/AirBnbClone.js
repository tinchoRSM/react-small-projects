import React from "react"
import Navbar from "./airbnb-clone/Navbar.js"
import Hero from "./airbnb-clone/Hero.js"
import Card from "./airbnb-clone/Card.js"
import {data} from "./airbnb-clone/data.js"

import '../styles/AirBnbClone.css'

export default function AirBnbClone() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })        
    
       
    return (
        <div className="air-bnb-clone">
            <Navbar />
            <Hero />
            <section className="cards-list section-air">
                {cards}
            </section>
        </div>
    )
}