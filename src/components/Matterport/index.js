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
          frameBorder={0}
          allowFullScreen
          // allow="xr-spatial-tracking"
        />
      </div>
      <div className="book-btn">
        <Button
          fontBig
          big
          primary
          bold
          href="https://www.airbnb.com/rooms/657873824599504532"
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
