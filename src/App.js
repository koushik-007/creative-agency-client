import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';


export const userContext = createContext();

function App() {
  const [logedInUser,setLogedInUser] = useState({});
  return (
    <userContext.Provider value={[logedInUser,setLogedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>

          <PrivateRoute path="/dashBoard">
             <DashBoard></DashBoard>
          </PrivateRoute>


        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
