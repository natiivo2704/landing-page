import React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import HeroSection from "../components/HeroSection"
import Matterport from "../components/Matterport"
import Description from "../components/Description"
import Image from "../components/Image/image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Matterport />
    <Image />
  </Layout>
)

export default IndexPage
