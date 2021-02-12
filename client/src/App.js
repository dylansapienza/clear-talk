import React, { Component } from 'react';
import {IonApp} from "@ionic/react";
import { BrowserRouter, Route } from "react-router-dom";
import "@ionic/core/css/ionic.bundle.css";
import './App.css';
import Home from "./components/Home";
import axios from 'axios';

// class App extends Component {
//   state = {
//     response: {}
//   };
  
//   componentDidMount() {
//     axios.get('/api/v1/say-something').then((res) => {
//       const response = res.data;
//       this.setState({response});
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello from the frontend!</h1>
//         <h1>{this.state.response.body}</h1>
//       </div>
//     );
//   }
// }
function App() {
  return (
    <BrowserRouter>
      <IonApp>
        <Route exact path="/" component={Home} />
    </IonApp>
    </BrowserRouter>
  );
}

export default App;