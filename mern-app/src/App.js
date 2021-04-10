import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Login from "./components/login.component";
import CreateUser from "./components/createUser.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/create-user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
