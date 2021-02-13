import React, { Component } from 'react';
import {IonApp} from "@ionic/react";
import { BrowserRouter, Route } from "react-router-dom";
import "@ionic/core/css/ionic.bundle.css";
import './App.css';
import Home from "./components/Home";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
    </IonApp>
    </BrowserRouter>
  );
}

export default App;