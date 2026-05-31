import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// styles
import '../styles/index.css'

// component
import Home from './components/Home';

let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderApp() {
  root.render(
    <div className='container w-25 rounded-5 bg-secondary mt-3 p-3 pb-5 '>
      <div className='container rounded-5 2-25 mx-auto bg-dark mt-3 p-3 pb-5 text-success fs-1 text-center'>
        <React.StrictMode>
          <div>
      <i className="fa-regular fa-clock me-3"></i>
      {seconds}
    </div>
          
        </React.StrictMode>
      </div>
    </div>
  
);
}

renderApp();

setInterval(() => {
  seconds++;
  renderApp();
}, 1000);