import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import ScrollTotop from './Hook/scrollToTop'

ReactDOM.render(
  
  <React.StrictMode>
      <Router>
          <ScrollTotop />
          <App />
      </Router>
  </React.StrictMode>,
  
document.getElementById('root')
)