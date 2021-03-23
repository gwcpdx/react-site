import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SeminarPreview from "../components/sections/SeminarPreview";


function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <AboutSection />
      {/* <SeminarPreview /> */}
    </Layout>
  )
}

export default IndexPage
