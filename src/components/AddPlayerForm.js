import React, { Component } from "react";
import PropTypes from "prop-types";

class AddPlayerForm extends Component {
  static propTypes = {
    addPlayer: PropTypes.func
  };

  state = {
    value: ""
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a new player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
