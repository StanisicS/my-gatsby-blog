import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        box-sizing: border-box;
      `}
    >
      <header
        css={css`
          width: 100%;
          background-color: darkgreen;
          padding-left: 30px;
          padding-right: 10px;
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
            <Link
              to={"/"}
              style={{
                display: "inlineBlock",
                padding: "10px 15px",
                textDecoration: "none",
                color: "white",
              }}
            >
              <h3
                css={css`
        /* margin-bottom: ${rhythm(2)};
        display: inline-block;
        font-style: normal; */
        display: inline-block;
      `}
              >
                {data.site.siteMetadata.title}
              </h3>
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
      {children}
    </div>
  )
}
