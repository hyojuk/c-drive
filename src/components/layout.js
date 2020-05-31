/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components";
import { Container, Nav, NavItem } from "../styledComponents/components";
import { Link } from "../styledComponents/typography";
import Header from "./header"
import theme from '../assets/theme';
import "./layout.css"

const Footer = styled.footer`
padding-left: 20px;
display: flex;
align-items: flex-end;
`;

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

  return (
    <>
      <ThemeProvider theme={theme}>
      <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/page-2">Nav 2</Link></NavItem>
        <NavItem><Link to="/using-typescript">Nav 3</Link></NavItem>
      </Nav>
      <Container>
        <main>{children}</main>
      </Container>
      <Footer>
        © {new Date().getFullYear()}, built by {data.site.siteMetadata.author}
      </Footer>
      </Fragment>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
