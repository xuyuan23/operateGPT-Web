import React, { Component } from 'react';

class LikeButton extends Component {
  handleClickOnLikeButton() {
    window.location.href = 'https://github.com/xuyuan23/operateGPT';
  }

  render() {
    const buttonStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    };

    return (
    <center>
      <button style={buttonStyle} onClick={this.handleClickOnLikeButton}>
          <img src="like.jpeg" alt="Like"/>
      </button>
    </center>
    );
  }
}

export default LikeButton;