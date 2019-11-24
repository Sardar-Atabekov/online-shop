import React, { Component } from "react";
import { getData, postData, putData, deleteData } from "../../requests";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import "./departments.css";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });
    postData("/category/", data);
    event.target.reset();
  }

  changeTableClick(event) {
    const data = {
      id: event.target.getAttribute("id"),
      name: event.target.parentNode.firstChild.value,
      active: event.target.previousSibling.value
    };
    console.log(data);
    putData(`/category/${data.id}`, data);
  }

  async componentDidMount() {
    getData("/category/all").then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="departments">
            <form onSubmit={this.handleSubmit} className="addDepartments">
              <input type="text" name="name" className="add" />
              <select className="select" name="active">
                <option value="true">Есть</option>
                <option value="false">Скрыта</option>
              </select>
              <button className="changeBtn">Добавить</button>
            </form>

            <div className="listItem">
              {this.state.data.map(item => (
                <div className="item" key={item.id}>
                  <input type="text" className="add" defaultValue={item.name} />
                  <select
                    className="select"
                    name="active"
                    defaultValue={item.active}
                  >
                    <option value="true">Есть</option>
                    <option value="false">Скрыта</option>
                  </select>

                  <input
                    type="button"
                    id={item.id}
                    className="changeBtn"
                    onClick={this.changeTableClick}
                    value="Изменить"
                  />

                  <input
                    type="button"
                    className="deleteBtn"
                    onClick={event => {
                      deleteData(`/category/${item.id}`);
                      event.target.parentNode.remove();
                    }}
                    value="Удалить"
                  />
                </div>
              ))}
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Departments;
