import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Housing from './pages/Housing'
import Error from './pages/Error'
import Apropos from './pages/A-propos'



ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logement" element={<Housing />} />
              <Route path="/a-propos" element={<Apropos />} />
              <Route path="*"  element={<Error />} />
          </Routes>
                </Router>
  </React.StrictMode>,
document.getElementById('root')
)


