import React, { Component } from "react";
import Header from "../header/header";

class Departments extends Component {
  render() {
    // let id = this.props.match.params.id;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
        </div>
      </div>
    );
  }
}

export default Departments;

