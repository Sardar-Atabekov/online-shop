import React, { Component } from "react";
import Header from "../header/header";
import Category from "../category/catalog-page-component";
// import "./departments.css";

class Departments extends Component {
  render() {
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          {/* <Category id={this.props.match.params.id} /> */}
          <main className="departments"></main>
        </div>
      </div>
    );
  }
}

export default Departments;
