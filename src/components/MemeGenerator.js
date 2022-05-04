import React from "react"
import Header from "./meme-generator/Header.js"
import Meme from "./meme-generator/Meme.js"

import "../styles/MemeGenerator.css"

export default function MemeGenerator() {
    return (
        <div className="meme-generator">
            <Header />
            <Meme />
        </div>
    )
}
