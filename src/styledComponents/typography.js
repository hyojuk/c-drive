import styled from 'styled-components';
import { Link as PageLink } from "gatsby";

export const Heading1 = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 300;
  color: white;
`;

export const Heading2 = styled.h2`
  text-transform: capitalize;
`;

export const Text = styled.p`
  font-size: 14px;
`;

export const Link = styled(PageLink)`
  font-size: 14px;
  color: #ff7a92;
  text-decoration: none;
  &:focus,
  &:hover {
    filter: hue-rotate(-40deg);
  }
`;