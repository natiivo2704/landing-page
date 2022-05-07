import React, { useState, useRef, useEffect, useCallback } from "react"
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

  const modalRef = useRef()

  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)

  console.log("selected", selected)
  console.log("showModal", showModal)

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
      setSelected(null)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <div className="image-container">
      <h1>Gallery</h1>
      {showModal ? (
        <div
          className="modal-background"
          ref={modalRef}
          onClick={closeModal}
          onKeyDown={keyPress}
          role="none"
        >
          <div className="modal-wrapper">
            <GatsbyImage
              image={getImage(selected)}
              alt={selected.name}
              className="modal-image"
            />
          </div>
        </div>
      ) : null}
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
              onClick={() => {
                setSelected(image)
                setShowModal(true)
              }}
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
