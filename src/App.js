import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from './components/usersPage/mainPage/mainPage.js';
import Departments from "./components/adminpage/departments/departments";
import Categories from "./components/adminpage/categories/categories";
import Products from "./components/adminpage/products/products";
import AddProduct from "./components/adminpage/products/addProduct";
import NotFound from "./components/404/404";
import Department from "./components/usersPage/derartament/departament";
import Category from './components/usersPage/category/category';
import Product from "./components/usersPage/product/products";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin/departments" component={Departments} />
          <Route exact path="/admin/category" component={Categories} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/addProduct" component={AddProduct} />

          <Route exact path="/department/:id" component={Department} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/product/:id" component={Product} />
          {/* <Route exact path="/basket/" component={Product} /> */}
          <Route exact path="*" component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
