import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import './Game.css';

import Card from "./Card"

import {
    useLocation
} from "react-router-dom";

export default function Game({setScore, score}){

    const playerRef = useRef(null);
    const computerRef = useRef(null);

    let location = useLocation();
    const [ player,setPlayer ] = useState("")
    const [ computer,setComputer] = useState("")
    const [result, setResult] = useState("")

    useEffect(() => {
        setPlayer(location.state.player)
        let res = playGame(player)
        setResult(res)
    }, [player]);

    function playGame(player){
        let options = ["scissors", "rock", "paper", "lizard", "spoke"]
        var randomIndex = Math.floor(Math.random() * options.length); 
        var computer = options[randomIndex];
        setComputer(computer)

        playerRef.current.id =  player;
        computerRef.current.id =  computer;

        if(player === "scissors"){
            switch(computer){
                case "spoke":
                case "rock":
                    return "You loose";
                case "lizard":
                case "paper":
                    setScore(score + 1);
                    return "You win";
                default:
                    return "It's a tie!";  
            }
        } else if(player === "paper"){
            switch(computer){
                case "lizard":
                case "scissors":
                    return "You loose";
                case "rock":
                case "spoke":
                    setScore(score + 1);
                    return "You win"
                default:
                    return "It's a tie!";  
            }
        } else if(player === "rock"){
            switch(computer){
                case "lizard":
                case "scissors":
                    setScore(score + 1);
                    return "You won";
                case "paper":
                case "spoke":
                    return "You loose"
                default:
                    return "It's a tie!";  
            }
        } else if(player === "spoke"){
            switch(computer){
                case "lizard":
                case "paper":
                    return "You loose";
                case "scissors":
                case "rock":
                    setScore(score + 1);
                    return "You won"
                default:
                    return "It's a tie!";  
            }
        } else if(player === "lizard"){
            switch(computer){
                case "spoke":
                case "paper":
                    setScore(score + 1);
                    return "You won";
                case "scissors":
                case "rock":
                    return "You loose";
                default:
                    return "It's a tie!";  
            }
        }
    
    }

    return(
        <>
        <div className = "play">
            <div className="column">
                <h2>You picked</h2>
                <div className = "circle" ref = {playerRef}></div>
                {/* <p>{player}</p> */}
            </div>
            <div className="result">
                {result}
                <Link to="/" style={{ textDecoration: 'none' }}><div className="playagain">Play Again</div></Link>
            </div>
            <div className="column">
                <h2>Computer picked</h2>
                <div className = "circle res" ref = {computerRef}></div>
                {/* <p>{computer}</p> */}
            </div>
        </div>
        <Card/>
        </>
    )
}