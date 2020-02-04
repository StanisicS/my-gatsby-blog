import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About me</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <Img fixed={data.file.childImageSharp.fixed} />
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
        fixed(width: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
