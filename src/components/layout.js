import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"
export default ({ data }) => (
  <div
    css={css`
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 700px;
        padding: 0 ${rhythm(1)};
        /* padding-top: ${rhythm(1.5)}; */
      `}
  >
    <header
      css={css`
          width: 100%;
          /* margin-bottom: ${rhythm(1)}; */
          background-color: darkgreen;
         padding-left: 0;
          /* padding-right: 10px; */
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
    >
      <ul
        css={css`
          list-style: none;
          display: flex;
        `}
      >
        <li
          css={css`
            display: flex;
          `}
        >
          <Link to={"/"} style={{ paddingLeft: "0", paddingTop: "10px" }}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              css={css`
                display: inline-block;
                font-style: normal;
              `}
            />
          </Link>
        </li>
        <li
          css={css`
            display: flex;
          `}
        >
          <Link
            to={"/about/"}
            style={{
              display: "inlineBlock",
              padding: "10px 15px",
              textDecoration: "none",
              color: "white",
            }}
          >
            About
          </Link>
        </li>
        <li
          css={css`
            display: flex;
          `}
        >
          <Link
            to={"/contact/"}
            style={{
              display: "inlineBlock",
              padding: "10px 15px",
              textDecoration: "none",
              color: "white",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
