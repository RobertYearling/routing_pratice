import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Page from './components/Page';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="container">
      <Router>
        <Home path = "/"></Home>
        <Page path = "/:variable"></Page>
        <Page path = "/:variable/:bgColor/:color"></Page>
        <NotFound path = "*"></NotFound>
      </Router>
    </div>
  );
}

export default App;
