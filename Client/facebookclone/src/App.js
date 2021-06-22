import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// *pages
import HomePage from "./pages/HomePage/index.js";
import Messagespage from "./pages/MessagesPage/index.js";
//!

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/messages">
            <Messagespage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
