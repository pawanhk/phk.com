import React from 'react';
import './App.scss';
import {Route,Routes } from 'react-router-dom';
// layout componenets
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
    </>
  );
}

export default App;
