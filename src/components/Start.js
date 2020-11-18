import React from 'react';
import {Link} from "react-router-dom";
import './Start.css';

import Card from "./Card"

export default function Start({score}) {

    return(
        <>
            
            <div className="game">
            <div className="board">
                <div id="upper">
                    <Link to={{
                        pathname: '/game',
                        state: {
                            player: "scissors"
                        }
                    }}><div className = "circle" id = "scissors"></div> </Link>
                </div>
                <div id = "middle">
                    <Link to = {{
                        pathname: '/game',
                        state: {
                            player: "spock"
                        }
                    }}><div className = "circle" id = "spock"></div></Link>
                    <Link to ={{
                        pathname: '/game',
                        state: {
                            player: "paper"
                        }
                    }}><div className = "circle" id = "paper"></div> </Link>
                </div>
                <div id = "bottom">
                    <Link to = {{
                        pathname: '/game',
                        state: {
                            player: "lizard"
                        }
                    }}><div className = "circle" id = "lizard"></div></Link>
                    <Link to = {{
                        pathname: '/game',
                        state: {
                            player: "rock"
                        }
                    }}><div className = "circle" id = "rock"></div></Link>
                </div>
            </div>
            </div>
            <Card/>
        </>
    )
}