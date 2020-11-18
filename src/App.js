import './App.css';
import {useState} from "react";

import Start from './components/Start'
import Game from "./components/Game"

import logo from "./images/logo-bonus.svg";

import {BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


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
        <Router>
            <Switch>
              <Route exact path ="/">
                <Start/>
              </Route>
              <Route path ="/game">
                <Game setScore = {setScore} score = {score}/>
              </Route>
            </Switch>
          </Router>
      </body>
         
    </div>
  );
}

export default App;
