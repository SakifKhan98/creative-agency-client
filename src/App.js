import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Dashboard/Order/Order";
import PostReview from "./components/Dashboard/PostReview/PostReview";
import ServiceList from "./components/Dashboard/ServiceList/ServiceList";
import ServiceListAdmin from "./components/Dashboard/ServiceListAdmin/ServiceListAdmin";
import AddService from "./components/Dashboard/AddService/AddService";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/serviceRegister/:serviceId">
            <Order></Order>
          </PrivateRoute>
          <Route path="/postReview">
            <PostReview></PostReview>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>>
          </PrivateRoute>
          <Route path="/serviceListAdmin">
            <ServiceListAdmin></ServiceListAdmin>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
