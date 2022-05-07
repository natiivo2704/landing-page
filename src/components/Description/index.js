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
        <TopItem></TopItem>
      </TopLevel>
      <DetailLevel></DetailLevel>
      <AmenityLevel></AmenityLevel>
      <MapLevel></MapLevel>
    </DescriptionLevel>
  )
}

export default Description
