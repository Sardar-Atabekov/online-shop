import React, { Component } from "react";
import NotFound from "./components/404/404";
import Login from "./components/loginpage/login";
import { Route, Switch } from "react-router-dom";
import Basket from "./components/usersPage/basket/basket";
import Likes from "./components/usersPage/likePage/Likes";
import Search from "./components/usersPage/search/seacrh";
import Product from "./components/usersPage/product/products";
import Category from "./components/usersPage/category/category";
import Products from "./components/adminpage/products/products";
import MainPage from "./components/usersPage/mainPage/mainPage.js";
import AddProduct from "./components/adminpage/products/addProduct";
import Categories from "./components/adminpage/categories/categories";
import Department from "./components/usersPage/derartament/departament";
import Department2 from "./components/usersPage/derartament2/departament";
import Departments from "./components/adminpage/departments/departments";
import Collection from "./components/adminpage/callection/categories";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin/" component={Login} />
          <Route exact path="/admin/departments" component={Departments} />
          <Route exact path="/admin/category" component={Categories} />
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/addProduct" component={AddProduct} />
          <Route exact path="/admin/collection" component={Collection} />
          <Route exact path="/department/1" component={Department} />
          <Route exact path="/department/2" component={Department2} />
          <Route exact path="/category/:id" component={Category} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/basket/" component={Basket} />
          <Route exact path="/Likes/" component={Likes} />
          <Route exact path="/search/" component={Search} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
