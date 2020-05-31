/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import { Container } from "../styledComponents/components";
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const Footer = styled.footer`
    padding-left: 20px;
    display: flex;
    align-items: flex-end;
  `;

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer>
        © {new Date().getFullYear()}, built by {data.site.siteMetadata.author}
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
