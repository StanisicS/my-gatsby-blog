import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          {siteTitle}
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/about`}
            // href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </Link>
          <Link
            to={`/contact`}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </Link>
          <Link
            to={`/my-files`}
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            My Files
          </Link>
        </div>
        <div>
          <a
            href="#download"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// function Header({ siteTitle }) {
//   const [isExpanded, toggleExpansion] = useState(false)

//   return (
//     <nav
//       css={css`
//         display: flex;
//         align-items: center;
//         justify-content: spaceBetween;
//         flex-wrap: wrap;
//         background-color: #b2f5ea;
//         margin: 3rem auto;
//         max-width: 650;
//         padding: 0 1rem;
//       `}
//     >
//       <div
//         css={css`
//           // marginBottom: 1.5rem;
//           display: flex;
//           flex-shrink: 0;
//           color: #fff;
//           margin-right: 3rem;
//         `}
//       >
//         <svg
//           css={css`
//             fill: currentColor;
//             height: 2rem;
//             width: 0.5rem;
//           `}
//           width="512"
//           height="512"
//           viewBox="0 0 512 512"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M230 1.49997C168.8 8.19997 114.9 34.4 72.5 78.1C-4.69999 157.6 -21.9 276.2 29.5 374.7C65.1 443 131.4 492.4 206.9 507C246.8 514.8 286.9 513.1 326.4 502C392.2 483.5 450.6 435.9 482.5 374.7C528.5 286.5 520 181.8 460.2 102C443.9 80.3 420.1 58 396.7 42.4C348.9 10.5 286.8 -4.70003 230 1.49997ZM282.2 56.5C322 61.8 359.8 79.2 389.9 106.1C400.1 115.3 418 135.3 418 137.6C418 138.8 392.2 161 390.9 161C390.5 161 388.7 159.1 386.9 156.7C362 124.7 328.3 103.4 288.6 94.8C279.9 92.9 275.5 92.6 256 92.6C236.5 92.6 232.1 92.9 223.4 94.8C168.5 106.7 124.5 143.6 103.6 195L101 201.5L205.8 306.2L310.5 411L317 408.4C354.6 393.2 385 365 403.4 328.1C407.6 319.8 413.7 303.4 415.4 295.7L416 293H372.5H329V274.5V256H393H457V263.4C457 280.8 451.8 306.9 444.5 326.5C422.6 385.3 372.4 431.7 312.1 449.1L300.8 452.3L180.3 331.7L59.7 211.2L62.9 199.9C84.7 124.3 150.7 67.2 228.5 56.6C242.2 54.7 268.4 54.7 282.2 56.5ZM252 456.8C251.4 457 245.5 456.7 238.7 456.1C140.8 447.1 65.9 373 56 275.1C55.5 269.4 55 263.4 55 261.6C55 258.8 63.3 266.8 154 357.5C208.5 412 252.5 456.7 252 456.8Z"
//             fill="black"
//           />
//         </svg>
//         <span
//           css={css`
//             font-weight: semi-bold;
//             font-size: 1.5rem;
//             letter-spacing: -0.025em;
//           `}
//         >
//           {siteTitle}
//         </span>
//       </div>
//       <div
//         css={css`
//           display: block;
//           @media (min-width: 1024px) {
//             display: none;
//           }
//         `}
//       >
//         <button
//           onClick={() => toggleExpansion(!isExpanded)}
//           css={css`
//             display: flex;
//             align-items: center;
//             padding: 0.5rem 0.75rem;
//             border-width: 1px;
//             border-radius: 0.25rem;
//             color: #b2f5ea;
//             &:hover': {
//                color: #fff;
//                border-color: #fff;
//                 }
//           `}
//         >
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div
//         className={`${isExpanded ? `block` : `hidden`}`}
//         css={css`
//           display: block;
//           width: 100%;
//           flex-grow: 1;
//           @media (min-width: 1024px) {
//             display: flex;
//             align-items: center;
//             width: auto;
//           }
//         `}
//       >
//         <div
//           css={css`
//             font-size: 0.5rem;
//             @media (min-width: 1024px) {
//               letter-spacing: -0.025em;
//             }
//           `}
//         >
//           <Link
//             to="/"
//             href="#responsive-header"
//             css={css`
//                 display: block;
//                 margin-top: 1rem;
//                 @media (min-width: 1024px) {
//                   display: inline-block;
//                   margin-top: 0;
//                 }
//                 color: #b2f5ea;
//                   &:hover': {
//                     color: #fff
//                 };
//                 margin-right: 1rem;
//             `}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about/"
//             css={css`
//                 display: block;
//                 margin-top: 1rem;
//                 @media (min-width: 1024px) {
//                   display: inline-block;
//                   margin-top: 0;
//                   }
//                 color: #b2f5ea;
//                   &:hover': {
//                     color: #fff
//                   };
//                 margin-right: 1rem;
//             `}
//           >
//             About
//           </Link>
//           <Link
//             to="/contact/"
//             css={css`
//                 display: block;
//                 margin-top: 1rem;
//                 @media (min-width: 1024px) {
//                   display: inline-block;
//                   margin-top: 0;
//                 }
//                 color: #b2f5ea;
//                   &:hover': {
//                     color: #fff
//                   };
//                 margin-right: 1rem;
//             `}
//           >
//             Contact
//           </Link>
//         </div>
//         <div>
//           <a
//             href="#download"
//             css={css`
//                 display: inline-block;
//                 font-size: .875rem;
//                 padding: 0.5rem 1rem;
//                 line-height: 1;
//                 border-width: 1px;
//                 border-radius: 0.25rem;
//                 color: #fff;
//                 border-color: #fff;
//                   &:hover': {
//                     border-color: transparent;
//                     color: #38b2ac;
//                       background-color: #fff;
//                     };
//                     margin-top: 1rem;
//                 @media (min-width: 1024px) {
//                   margin-top: 0;
//                 }
//             `}
//           >
//             Download
//           </a>
//         </div>
//       </div>
//     </nav>
//   )
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header

// const Header = ({ siteTitle }) => (
//   <header className={`bg-purple-800 mb-4`}>
//     <div className={`container mx-auto py-4`}>
//       <h1>
//         <Link to="/" className={`text-white`}>
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )
