import React from 'react';
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {

    console.log(this.props.games);

    return (
      <div>
        <h1>Best selling games list</h1>

        <VideoGame />
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
