import React from "react"
import starIcon from "../../img/airbnb-clone/star.png"
export default function Card(props) {
    
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    /*
    Challenge: Fix our component! 😱
    */
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.coverImg}`} className="card--image" alt="image_of_a_card" />
            <div className="card--stats">
                <img src={starIcon} className="card--star" alt="star_icon" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}