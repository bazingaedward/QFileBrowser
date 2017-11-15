import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    color: 'blue',
    text: 'Confirm',
  };

  render() {
    const { color, text } = this.props;

    return (
      <button className={`btn btn-${color}`}>
        <em>{text}</em>
      </button>
    );
  }
}
