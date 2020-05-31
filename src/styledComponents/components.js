import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 25px;
  background: rgb(255,189,201);
  color: white;
  font-weight: 300;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  font-size: 18px,
  font-family: 'Inconsolata', monospace;
  filter: hue-rotate(0deg);
  transition: filter 300ms linear;
  cursor: pointer;
  &:focus,
  &:hover {
    filter: hue-rotate(-40deg);
  }
`;

export const Container = styled.div`
  padding: 35px 15px 20px;
`