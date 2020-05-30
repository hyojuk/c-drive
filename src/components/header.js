import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background: pink;
  marginBottom: 1.45rem;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Heading1 = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 300;
  color: white;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Heading1>
        {siteTitle}
      </Heading1>
    </HeaderWrapper>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
