import React, { Component } from 'react';
import Header from './Header';
import Players from './Players';
import AddPlayer from './AddPlayer';
import mock_players from './mock_players';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { players: mock_players };

    this.addNewPlayer = this.addNewPlayer.bind(this);

    this.removePlayerAt = this.removePlayerAt.bind(this);
  }


  changeScore(value, index) {
    this.state.players[index].score += value;
    this.setState({
      players: this.state.players
    });
  }

  addNewPlayer = (value) => {
    this.state.players.push({
      name: value,
      score: 0,
      id: this.state.players.length + 1
    });
    this.setState(this.state);
  }

  removePlayerAt = (index) => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }


  render() {
    return (
      <div className="container-fluid score-board">

        <Header
          title="Scoreboard App"
          players={this.state.players} />

        <Players
          players={this.state.players}
          incrementPlayerScore={(value, index) => this.changeScore(value, index)}
          removePlayer={this.removePlayerAt} />

        <AddPlayer
          onAdd={this.addNewPlayer} />

      </div>
    );
  }
}

export default App;
