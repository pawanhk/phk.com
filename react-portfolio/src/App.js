import React from 'react';
import './App.scss';
import {Route,Routes } from 'react-router-dom';
// layout componenets
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
