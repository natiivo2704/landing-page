import React from "react"
import { Button } from "../ButtonElement"
import "./Matterport.css"

const Matterport = () => {
  return (
    <div className="view-container">
      <h1>3D Interactive Tour</h1>
      <div className="iframe-container">
        <iframe
          title="3D Interactive Tour"
          name="3D Interactive Tour"
          height="100%"
          width="95%"
          src="https://my.matterport.com/show/?m=1JMDQMyA3GU"
          frameborder="0"
          allowfullscreen
          allow="xr-spatial-tracking"
        />
      </div>
      <div className="book-btn">
        <Button
          fontBig
          big
          primary
          bold
          href="https://www.vacasa.com/unit/82659"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Now
        </Button>
      </div>
    </div>
  )
}

export default Matterport
