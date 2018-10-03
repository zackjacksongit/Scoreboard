const players = [
  {
    name: "Player 1",
    score: 50,
    id: 1
  },
  {
    name: "Player 2",
    score: 85,
    id: 2
  },
  {
    name: "Player 3",
    score: 95,
    id: 3
  }
];

const Header = props => (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">Players: {props.totalPlayers}</span>
  </header>
);

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

const Player = props => (
  <div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score} />
  </div>
);

const App = props => (
  <div className="scoreboard">
    <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
    {props.initialPlayers.map(player => (
      <Player name={player.name} key={player.id.toString()} />
    ))}
  </div>
);

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
