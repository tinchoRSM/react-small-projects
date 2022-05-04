import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  "DigitalBusinessCard",
  "AirBnbClone",
  "SignUpPractice",
  "MemeGenerator",
  "ReactFacts",
  "Tenzies",
  "Quizzical"
]

export default function Home() {

  const linkElements = links.map( (el) => {
    return (
      <li>
        <Link to={el}>{el}</Link>
      </li>
    )
  })

  return (
    <div>Home
      <ul>
        {linkElements}
      </ul>
    </div>
  )
}
