import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// styles
import '../styles/index.css'

// components
import Home from './components/Home';

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Home seconds={seconds} />);

setInterval(() => {
  seconds = seconds + 1;

  root.render(<Home seconds={seconds} />);
}, 1000);