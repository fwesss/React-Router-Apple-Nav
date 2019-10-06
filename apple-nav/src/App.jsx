import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Components/Nav/Nav';

import './App.css';


function App() {
  return (
    <>
      <Route
        exact
        path="/"
        component={Nav}
      />
      <Route
        path="/:productType"
        component={Nav}
      />
    </>
  );
}

export default App;
