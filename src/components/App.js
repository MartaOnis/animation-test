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
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/spiderman" element={<Spiderman />} />
        <Route path="/anakin" element={<Anakin />} />
      </Routes>
    </>
  );
}

export default App;
