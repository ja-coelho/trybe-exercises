import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function Helloworld (nome, sobrenome) {
//   return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
// }

// const hi = 'Hi, JSX';
// const ele = <h1>{hi}</h1>;

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
//     </div>
//   );
//   root.render(<App />);
//   root.render(element);
// }
// class ReactClass extends React.Component {
//   render() {
//     return (
//       <h1>My first React Class Component!</h1>
//     )
//   }
// }

// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
