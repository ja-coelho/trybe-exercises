import logo from './logo.svg';
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
