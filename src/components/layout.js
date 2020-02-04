import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Header from "./header"
import background from "../../static/IMG-8430a959012ac9f68940b86729473b66-V.jpg"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

const PageContainer = styled.div`
    ${tw`
        bg-gray-200 text-xl w-1/2
    `}
    background-image: url(${background});
    padding: 10px;
`

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>

export default Layout
