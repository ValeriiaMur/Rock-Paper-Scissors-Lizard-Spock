import React,{useState} from 'react';
import './Card.css';
import Modal from '@material-ui/core/Modal';

import rules from "../images/image-rules-bonus.svg"
import iconClose from "../images/icon-close.svg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function getModalStyle() {
    const top = 50 + Math.random();
    const left = 50 + Math.random();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

export default function Card() {
    const [showRules, setShowRules] = useState(false);

    const handleClose = () => setShowRules(false);
    const handleShow = () => setShowRules(true);
  
   
    const [modalStyle] = useState(getModalStyle);
  
    const body = (
      <div className = "card" style={modalStyle}>
        <div id = "modalHeader">
          <h2 id = "modal-title">Rules</h2>
          <button onClick={handleClose} className="closeButton">
            <img src = {iconClose} alt="close window"/>
          </button>
        </div>
        <img src = {rules} alt="game rules" id="imgRules"/>
       <p>Not sure what Rock, Paper, Scissors, Lizard, Spock is? 
       <a target="_blank" href="https://www.youtube.com/watch?v=iSHPVCBsnLw&ab_channel=WarnerBros.TV">
            Check out this clip from The Big Bang Theory!</a>
        </p>
      </div>
    );
    return(
        <>
            <div className = "footer">
            <button className="rules" onClick={handleShow}>Rules</button>
            </div>
                <Modal
                    open={showRules}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                    {body}
                </Modal>
        </>
    )
}

