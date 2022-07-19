import React from 'react';

class VideoGame extends React.Component {
  render() {

    const { id, title, developer, sales, img } = this.props.game;

    return (
      <div className='video-game'>
        <div className='textC'>
          <strong>ID:</strong> { id }<br/>
          <strong>Title:</strong> { title }<br/>
          <strong>Developer:</strong> { developer }<br/>
          <strong>Sales:</strong> { sales.toLocaleString('en-US') }<br/>
        </div>
        <div className='imgC'>
          <img src={ img } alt={ title } />
        </div>
      </div>
    );
  }
}

export default VideoGame;
