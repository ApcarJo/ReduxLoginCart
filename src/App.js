
import './App.css';

import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Header from './components/Header/Header';
import Profile from './containers/Profile/Profile';
import Cart from './containers/Cart/Cart';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header/>

        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/cart" exact component={Cart}/>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
