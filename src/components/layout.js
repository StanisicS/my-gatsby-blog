import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Header from "./header"
import "./layout.css"

// const PageContainer = styled.div`
//   ${tw`container mx-auto`}
// `

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container mx-auto my-12 max-w-2xl py-0 px-4">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
// <footer>
//   © {new Date().getFullYear()}, Built with
//   {` `}
//   <a href="https://www.gatsbyjs.org">Gatsby</a>
// </footer>
//       </div>
//     </>
//   )
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
