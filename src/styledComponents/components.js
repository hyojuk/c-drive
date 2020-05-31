import styled from 'styled-components';

export const Alert = styled.div`
    padding: 7px 20px 7px;
    color: #fe6b4a;
    margin-top: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border-color: #fe6b4a;
    border-style: solid;
    border-width: 1px;
    font-size: 13px;
    max-width: 70%;
    &:before { 
        content: "⚠️ "; 
    }
`

export const Button = styled.button`
    align-self: flex-start;
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
    display: flex;
    flex-direction: column;
    padding: 15px 15px 20px;
`;

export const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    float: left;
    list-style-type: none;
    padding: 20px 40px 10px 40px;
    margin: 20px 20px 0px 0px;
    border: solid;
    border-radius: 5px;
    border-width: 1.2px;
    border-color: #bebdbd;
    @media (max-width: 768px) {
        flex-direction: row;
        float: none;
        padding: 10px 20px 0px 30px;
        margin-top: 5px;
        justify-content: space-around;
    }
`;

export const NavItem = styled.li`

`;