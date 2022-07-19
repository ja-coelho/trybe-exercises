import React from 'react';
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {

    const gamesList = this.props.games;

    const gamesHtmlElements = gamesList.map((game) => <VideoGame key={ game.id } game={ game } />);

    return (
      <div className='video-game-list'>
        <h1>Best selling games list</h1>

        { gamesHtmlElements }

      </div>
    );
  }
}

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number,
    img: PropTypes.string,
  }))
};

export default VideoGameList;
