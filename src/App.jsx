import React from 'react';
//import { Router, Route, Navigate } from 'react-router-dom';
import Login from './loginpage/login';
import Home from './mainpage/home';
import {Route,Routes} from "react-router-dom"
import PrivateRoute from './router/privatRoute';

const App = () => {
 
  return (
    <div className="App">
      <Routes>
      <Route element={<PrivateRoute />}>
      <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;



