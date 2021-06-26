import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import { Provider } from "react-redux";
// import store from "./redux/store.js";

// *pages
import HomePage from "./pages/HomePage/index.js";
import Messagespage from "./pages/MessagesPage/index.js";
import SignInPage from "./pages/SignInPage/index.js";
import LoginPage from "./pages/LoginPage/index";
import ProfilePage from "./pages/Profile/index.js";
import Navbar from "./Components/Navbar/Navbar.js";
//!

const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/navbar">
          <Navbar />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/messages">
          <Messagespage />
        </Route>
      </Switch>
    </Router>
    // </Provider>
  );
};

export default App;
