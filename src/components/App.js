import React, { Component } from "react";

import AddPlayerForm from "./AddPlayerForm";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Player 1",
        score: 0,
        id: 1
      },
      {
        name: "Player 2",
        score: 0,
        id: 2
      },
      {
        name: "Player 3",
        score: 0,
        id: 3
      }
    ]
  };

  prevPlayerId = 3;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  getHighScore = () => {
    const scores = this.state.players.map(player => player.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1)
          }
        ]
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
