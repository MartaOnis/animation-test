// import { useState, useEffect } from 'react';
import '../styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Spiderman from './Spiderman';
import Anakin from './Anakin';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/spiderman"
          element={
            <>
              <Header />
              <Spiderman />
            </>
          }
        />
        <Route
          path="/anakin"
          element={
            <>
              <Header />
              <Anakin />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
