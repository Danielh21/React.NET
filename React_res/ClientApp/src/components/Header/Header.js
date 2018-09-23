import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.myDiv}>
      </div>
    );
  }
}
