import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// import { rhythm } from "../utils/typography"
// import SEO from "../components/seo"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  return (
    <div
      // css={css`
      //     box-sizing: border-box;
      //     margin: 0 auto;
      //     max-width: 700px;
      //     padding: 0 ${rhythm(1)};
      //     /* padding-top: ${rhythm(1.5)}; */
      //   `}
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
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M230 1.49997C168.8 8.19997 114.9 34.4 72.5 78.1C-4.69999 157.6 -21.9 276.2 29.5 374.7C65.1 443 131.4 492.4 206.9 507C246.8 514.8 286.9 513.1 326.4 502C392.2 483.5 450.6 435.9 482.5 374.7C528.5 286.5 520 181.8 460.2 102C443.9 80.3 420.1 58 396.7 42.4C348.9 10.5 286.8 -4.70003 230 1.49997ZM282.2 56.5C322 61.8 359.8 79.2 389.9 106.1C400.1 115.3 418 135.3 418 137.6C418 138.8 392.2 161 390.9 161C390.5 161 388.7 159.1 386.9 156.7C362 124.7 328.3 103.4 288.6 94.8C279.9 92.9 275.5 92.6 256 92.6C236.5 92.6 232.1 92.9 223.4 94.8C168.5 106.7 124.5 143.6 103.6 195L101 201.5L205.8 306.2L310.5 411L317 408.4C354.6 393.2 385 365 403.4 328.1C407.6 319.8 413.7 303.4 415.4 295.7L416 293H372.5H329V274.5V256H393H457V263.4C457 280.8 451.8 306.9 444.5 326.5C422.6 385.3 372.4 431.7 312.1 449.1L300.8 452.3L180.3 331.7L59.7 211.2L62.9 199.9C84.7 124.3 150.7 67.2 228.5 56.6C242.2 54.7 268.4 54.7 282.2 56.5ZM252 456.8C251.4 457 245.5 456.7 238.7 456.1C140.8 447.1 65.9 373 56 275.1C55.5 269.4 55 263.4 55 261.6C55 258.8 63.3 266.8 154 357.5C208.5 412 252.5 456.7 252 456.8Z"
            fill="black"
          />
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
          style={{ listStyle: `none`, float: `right` }}
        > */}
            <ListLink
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
            </ListLink>
            <ListLink
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
            </ListLink>
            <ListLink
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
            </ListLink>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}

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
