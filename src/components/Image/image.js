import React, { useState, useRef, useEffect, useCallback } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../ButtonElement"

import "./image.css"

const query = graphql`
  {
    allFile(sort: { order: ASC, fields: name }) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const Image = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query)
  const gallerySize = nodes?.length

  const modalRef = useRef()
  const [selected, setSelected] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [currIndex, setCurrIndex] = useState(null)

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
      setSelected(null)
      setCurrIndex(null)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false)
      } else if (e.key === "ArrowLeft" && showModal) {
        if (currIndex > 0) {
          setCurrIndex(currIndex - 1)
          setSelected(nodes[currIndex - 1])
        }
      } else if (e.key === "ArrowRight" && showModal) {
        if (currIndex < gallerySize - 1) {
          setCurrIndex(currIndex + 1)
          setSelected(nodes[currIndex + 1])
        }
      }
    },
    [
      setShowModal,
      showModal,
      setSelected,
      setCurrIndex,
      currIndex,
      gallerySize,
      nodes,
    ]
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
        {nodes.map((image, index) => {
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
                setCurrIndex(index)
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
