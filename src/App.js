import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Departments from "./components/adminpage/departments/departments";
import Categories from "./components/adminpage/categories/categories";
import Products from "./components/adminpage/products/products";
import inDeveloping from "./inDeveloping.js";
import Department from "./components/usersPage/derartament/departament";


// import ClothInfo from "./container/cloth-info";
// import Cart from './container/card/';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          {/* <Route exact path="/" component={Catalog} /> */}
          <Route exact path="/admin/departments" component={Departments} />
          <Route exact path="/admin/category" component={Categories} />

          {/* <Route exact path="/catalog" component={ClothesPage} /> */}
          {/* <Route exact path="/product/:id" component={ClothInfo} /> */}
          {/* <Route exact path="/basket" component={Cart} /> */}
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/department" component={Department} />


          <Route exact path="*" component={inDeveloping} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
