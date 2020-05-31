import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../styledComponents/components";
import styled from "styled-components";

const Dialog = styled.div`
    display: ${props => props.display};
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */   
`;
const DialogContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px 25px;
    border: 1px solid #888;
    width: 40%; /* Could be more or less, depending on screen size */
    border-radius: 10px;
    @media (max-width: 768px) {
        width: 70%; 
    }
`;

const Modal = ({ children }) => {
    const [modalDisplay, setModalDisplay] = useState("none");

    const showModal = (e) => {
        e.preventDefault();
        if (modalDisplay == "none") {
            setModalDisplay("block");
        } else {
            setModalDisplay("none");
        }
    };
    return (
        <>
            <Dialog display={modalDisplay}>
                <DialogContent>
                    {children}
                    <Button onClick={e => showModal(e)}>Close</Button>
                </DialogContent>
            </Dialog>
            <Button onClick={e => { showModal(e) }}>Show Modal</Button>
        </>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
}


export default Modal;