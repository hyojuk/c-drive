import styled from 'styled-components';
import { Link as PageLink } from "gatsby";

export const Heading2 = styled.h2`
  text-transform: capitalize;
`;

export const Link = styled(PageLink)`
  color: #ff7a92;
  text-decoration: none;
  &:focus,
  &:hover {
    filter: hue-rotate(-40deg);
  }
`;