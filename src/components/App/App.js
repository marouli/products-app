import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import './App.css';

const App = () => {
  return (
    <Router className="App">
      <Route exact path="/" component={ProductList} />
      <Route path="/:title" component={ProductDetail} />
    </Router>
  );
}

export default App;