import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
    <Img fluid={data.file.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "IMG-ae16660396470d4fb4903768a1d5fa9b-V.jpg" }) {
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
