import React from "react"
import trollFace from "../../img/meme-generator/troll-face.png"

export default function Header() {
    return (
        <div className="header-meme-generator">
            <img 
                src={trollFace} 
                className="header--image"
                alt="troll_face_logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}