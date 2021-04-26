import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PopUps(props) {
    return (
        <>
            <Modal style={{color:"#0f1828", fontWeight: "bold"}} show={props.show} onHide={props.handleClose}>
                <Modal.Header style={{backgroundColor:"orange"}} closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{fontWeight: "bold", backgroundColor:"orange"}}>
                {(!props.apiError) ? (
                    <p style={{color:"#2d0404", fontSize: "20px",textAlign:"center"}}>Call to spotify failed, please check the network connection and the spotify api keys</p>
                ) : (
                    null
                )}
                </Modal.Body>               
                <Modal.Footer style={{backgroundColor:"orange"}}>
                    <Button style={{backgroundColor:"#0f1828", fontWeight: "bold"}} variant="primary" onClick={props.handleClose}>    
                    Close                 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopUps;