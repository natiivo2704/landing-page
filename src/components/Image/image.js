import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../ButtonElement"
import "./image.css"

const query = graphql`
  {
    allFile {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            formats: [AUTO]
          )
        }
      }
    }
  }
`

const Image = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query)
  return (
    <div className="image-container">
      <h1>Gallery</h1>
      <div className="image-grid">
        {nodes.map(image => {
          const { id, name } = image
          const pathToImage = getImage(image)
          return (
            <GatsbyImage
              key={id}
              image={pathToImage}
              alt={name}
              className="image-item"
            />
          )
        })}
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

export default Image
