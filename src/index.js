import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
                </Router>
  </React.StrictMode>,
document.getElementById('root')
)


