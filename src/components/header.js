import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Heading1 } from "../styledComponents/typography";

const HeaderContainer = styled.header`
  background: ${props => props.theme.color.lightpink};
  marginBottom: 1.45rem;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
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
