import './App.css';
import React from 'react';
import VideoGameList from './components/VideoGameList';
import gamesList from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoGameList games={ gamesList } />
      </div>
    );
  };
};

export default App;
