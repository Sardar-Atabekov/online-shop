import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Departments from "./components/adminpage/departments/departments";
import Categories from "./components/adminpage/categories/categories";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Departments} />
          <Route exact path="/admin/category" component={Categories} />

          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
