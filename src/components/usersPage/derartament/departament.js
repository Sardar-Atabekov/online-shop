import React, { Component } from "react";
import Header from "../header/header";
import CategoryBlock from "./blocks/category";
import Season from "./blocks/season";
import "./department.css";

class Departments extends Component {
  render() {
    let id = this.props.match.params.id;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          <CategoryBlock id={id} />
          <Season id={id} />
        </div>
      </div>
    );
  }
}

export default Departments;
