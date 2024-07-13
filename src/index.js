import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Housing from './pages/Housing';
import Error from './pages/Error';
import Apropos from './pages/A-propos';
import { PageProvider } from './utils/context';

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <PageProvider>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/logement/:logementId" element={<Housing />} />
               <Route path="/a-propos" element={<Apropos />} />
               <Route path="*" element={<Error />} />
            </Routes>
         </PageProvider>
      </Router>
   </React.StrictMode>,
   // Endroit où ce code sera généré dans le HTML
   document.getElementById('root')
);
