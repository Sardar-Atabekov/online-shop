import React, { Component } from "react";
import { Link } from "react-router-dom";

class Department extends Component {
  render() {
    return (
      <div  style={{ color: "red", margin: "40px 600px" }}>
        <h1>
          Page in Developing
        </h1>
        <h2><Link to={"/admin/departments"} className="categories">
        to Home Page
        </Link></h2>
      </div>
    );
  }
}

export default Department;
