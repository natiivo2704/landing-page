import React from "react"
import { Button } from "../ButtonElement"
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Amazing Views</h1>
      <p>
        Plan your next trip to <span class="highlight-orange">Austin</span> at{" "}
        <span className="highlight-teal">
          <a href="https://www.vacasa.com/unit/82659">Natiivo 2704</a>
        </span>
      </p>
      <div className="hero-btns">
        <Button fontBig big primary>
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
