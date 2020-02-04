import React from "react"
// import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { rhythm } from "../utils/typography"
import SEO from "../components/seo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      // css={css`
      //     box-sizing: border-box;
      //     margin: 0 auto;
      //     max-width: 700px;
      //     padding: 0 ${rhythm(1)};
      //     /* padding-top: ${rhythm(1.5)}; */
      //   `}
      style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
    >
      <header
        // css={css`
        //     width: 100%;
        //     /* margin-bottom: ${rhythm(1)}; */
        //     background-color: #554A35;
        //     padding-left: 0;
        //     /* padding-right: 10px; */
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //   `}
        style={{ marginBottom: `1.5rem` }}
      >
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            <div>
              <Img fixed={data.file.childImageSharp.fixed} />
            </div>
          </h3>
        </Link>
        <ul
          //
          style={{ listStyle: `none`, float: `right` }}
        >
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
    </div>
  )
}
