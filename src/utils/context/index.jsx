import React, { useState, createContext } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
   const [page, setPage] = useState('home');

   return (
      <PageContext.Provider value={{ page, setPage }}>
         {children}
      </PageContext.Provider>
   );
};
