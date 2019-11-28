import React, { Component } from "react";
import Header from "../header/header";
import Category from "../category/catalog-page-component";
// import "./departments.css";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
    console.log(props);
  }
  render() {
    let id = this.state.id,
      idSelect = this.props.match.params.id;
    console.log(idSelect, id)  ;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />
          <Category id={this.props.match.params.id} />
          <main className="departments"></main>
        </div>
      </div>
    );
  }
}

export default Departments;
