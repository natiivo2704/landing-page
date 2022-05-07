import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import HeroSection from "../components/HeroSection"
import Image from "../components/Image/image"
import Matterport from "../components/Matterport"
import Description from "../components/Description"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Matterport />
    <Image />
  </Layout>
)

export default IndexPage
