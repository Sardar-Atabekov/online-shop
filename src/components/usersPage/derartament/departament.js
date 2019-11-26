import React, { Component } from "react";
import { getData, postData, putData, deleteData } from "../../requests";
import Header from "../header/header";

// import "./departments.css";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      realData: []
    };
  }

  async componentDidMount() {
    getData("/category/all").then(data => {
      this.setState({ data });
    });
  }

  render() {
    let data = this.state.data;
    return (
      <div className="usersPage">
        <div className="containerUsers">
          <Header />

          <main className="departments">

          </main>
        </div>
      </div>
    );
  }
}

export default Departments;
