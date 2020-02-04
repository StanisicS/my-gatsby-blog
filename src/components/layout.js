import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { rhythm } from "../utils/typography"
// import SEO from "../components/seo"

export default ({ data }) => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: spaceBetween;
      flex-wrap: wrap;
      background-color: #b2f5ea;
      margin: 3rem auto;
      max-width: 650;
      padding: 0 1rem;
    `}
  >
    <nav
      css={css`
        // marginBottom: 1.5rem;
        display: flex;
        flex-shrink: 0;
        color: white;
        margin-right: 3rem;
      `}
    >
      <svg
        css={css`
          fill: currentColor;
          height: 2rem;
          width: 0.5rem;
        `}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
      </svg>
      <span
        css={css`
          font-weight: semi-bold;
          font-size: 1.5rem;
          letter-spacing: -0.025em;
        `}
      >
        My Gatsby Blog
      </span>
      <div
        css={css`
          display: block;
          width: 100%;
          flex-grow: 1;
          @media (min-width: 1024px) {
            display: flex;
            align-items: center;
            width: auto;
          }
        `}
      >
        <div
          css={css`
            font-size: 0.5rem;
            @media (min-width: 1024px) {
              letter-spacing: -0.025em;
            }
          `}
        >
          {/* <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            <Img fixed={data.file.childImageSharp.fixed} />
            My Gatsby Blog
          </h3>
        </Link>
        <ul
          //
          style={{ Style: `none`, float: `right` }}
        > */}
          <Link
            to="/"
            css={css`
                display: block;
                margin-top: 1rem;
                @media (min-width: 1024px) {
                  display: inline-block;
                  margin-top: 0;
                }
                color: #b2f5ea;
                  &:hover': {
                    color: white
                };
                margin-right: 1rem;
            `}
          >
            Home
          </Link>
          <Link
            to="/about/"
            css={css`
                display: block;
                margin-top: 1rem;
                @media (min-width: 1024px) {
                  display: inline-block;
                  margin-top: 0;
                  }
                color: #b2f5ea;
                  &:hover': {
                    color: white
                  };
                margin-right: 1rem;
            `}
          >
            About
          </Link>
          <Link
            to="/contact/"
            css={css`
                display: block;
                margin-top: 1rem;
                @media (min-width: 1024px) {
                  display: inline-block;
                  margin-top: 0;
                }
                color: #b2f5ea;
                  &:hover': {
                    color: white
                  };
                margin-right: 1rem;
            `}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </div>
)

export const query = graphql`
  query {
    # site {
    #   siteMetadata {
    #     title
    #   }
    # }
    file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
