import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of /pandas eating lots of food.
    </p>
    <Img fluid={data.file.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  query {
    # site {
    #   siteMetadata {
    #     title
    #   }
    # }
    file(relativePath: { eq: "IMG-df8f844d69e4b31b9a072bedd9cc4b2e-V.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
