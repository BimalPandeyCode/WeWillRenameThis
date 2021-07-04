import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// *pages
import HomePage from "./pages/HomePage/index.js";
import Messagespage from "./pages/MessagesPage/index.js";
import SignInPage from "./pages/SignInPage/index.js";
import LoginPage from "./pages/LoginPage/login";
import ProfilePage from "./pages/Profile/index.js";
//!

//Private Routing
import PrivateRoute from './pages/utilities/PrivateRoute.js';

//redux components

import {  fetchUserById  } from "../src/redux/reducers/auth.js";

//setAuthToken
import setAuthToken from './pages/utilities/setAuthToken.js';
if(localStorage.token){
  setAuthToken(localStorage.token);
}



const App = () => {
  
  useEffect(() => {
    store.dispatch(fetchUserById());
    
  }, []);
  
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/home" component={HomePage}>
            
          </PrivateRoute>
          <Route exact path="/signin" component ={SignInPage}>
            
          </Route>
          <PrivateRoute exact path="/profile" component={ProfilePage}>
            
          </PrivateRoute>
          <Route exact path="/login" component={LoginPage}>

          </Route>
          <Route path="/messages" component={Messagespage}>
      
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};



export default App;
