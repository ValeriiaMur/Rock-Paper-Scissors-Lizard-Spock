import './App.css';
import logo from "./images/logo-bonus.svg";
import back from "./images/bg-pentagon.svg";
import {useState} from "react";

function App() {

  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <body className="start">
        <div class = "header">
          <img src={logo} className="App-logo" alt="logo" />
          <div class = "whiteSquare">
            <h2>Score</h2>
            <div id="score">{score}</div>
          </div>
        </div>
        <div className="game">
          <div className="board">
            <div id="upper">
              <div className = "circle" id = "sc"></div>
            </div>
            <div id = "middle">
              <div className = "circle" id = "sc"></div>
              <div className = "circle" id = "sc"></div>
            </div>
            <div id = "bottom">
              <div className = "circle" id = "sc"></div>
              <div className = "circle" id = "sc"></div>
            </div>
          </div>
        </div>
        
        </body>
    </div>
  );
}

export default App;
