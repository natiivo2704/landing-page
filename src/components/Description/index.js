import React from "react"
import {
  DescriptionLevel,
  TopLevel,
  TopItem,
  DetailLevel,
  AmenityLevel,
  MapLevel,
} from "./DescriptionElements"

const Description = () => {
  return (
    <DescriptionLevel>
      <TopLevel>
        <TopItem>
          <p>Description</p>
        </TopItem>
      </TopLevel>
      <DetailLevel>Detail Level</DetailLevel>
      <AmenityLevel>Amenity Level</AmenityLevel>
      <MapLevel>Map Level</MapLevel>
    </DescriptionLevel>
  )
}

export default Description
