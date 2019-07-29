import React, { Component } from 'react';

class Heart extends Component {
  render() {
    const { style } = this.props;
    return <div className='like is-liked' style={style} />;
  }
}

export default Heart;
