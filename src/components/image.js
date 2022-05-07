import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./image.css"

const query = graphql`
  {
    allFile {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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
    </div>
  )
}

export default Image
