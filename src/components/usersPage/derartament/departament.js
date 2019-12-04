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
          <div className="catalog">
            <h3 className="catalog_title col-12">
              Мы выбрали лучшие решения для того чтобы подчеркнуть Твой стиль!
              <br />
              Выбор за Тобой!
            </h3>
            <CategoryBlock id={id} />
          </div>
          <Season id={id} />
        </div>
      </div>
    );
  }
}

export default Departments;
