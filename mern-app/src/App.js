import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./components/login.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login}/>
    </Router>
  );
}

export default App;
