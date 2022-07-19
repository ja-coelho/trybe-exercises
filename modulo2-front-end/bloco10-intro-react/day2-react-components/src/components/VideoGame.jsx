import React from 'react';

class VideoGame extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.game.title }</h1>
      </div>
    );
  }
}

export default VideoGame;
