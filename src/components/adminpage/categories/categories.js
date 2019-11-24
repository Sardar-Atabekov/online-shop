import React, { Component } from "react";
import { getData, postData, putData, deleteData } from "../../requests";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import Category from "./addCategory";
import Department from "../blocks/Department";

import "./categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      isLoading: false,
      error: null,
      select: 2,
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
    console.log(data);
    postData("/subCategory/", data);
    event.target.reset();
  }

  changeTableClick(event) {
    let id = event.target.getAttribute("id"),
      data = {
        id,
        name: event.target.parentNode.childNodes[1].value,
        department: event.target.previousSibling.value,
        imageURL: event.target.parentNode.firstChild.getAttribute("src")
      };
    // document.getElementById('detailed-form').reset()
    console.log(data);
    putData(`/Categories/${id}`, data);
  }

  changeSelectDepartment(event) {
    let select = event.target.value;
    console.log(select);
    let arr = this.state.body;

    if (+select === 2) {
      this.setState({ data: arr });
    } else {
      this.setState({
        data: arr.filter(department => department.departmentId === +select)
      });
    }
  }
  async componentDidMount() {
    getData("/subCategory/all/").then(body => {
      this.setState({ body });
    });
  }

  render() {
    let data = this.state.data.length > 0 ? this.state.data : this.state.body;
    console.log(data);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="categoriesContent">
            <div className="addCategories">
              <Category />
              <div className="selectDepartment">
                <label htmlFor="department">По департаментам: </label>
                <select
                  className="select"
                  onChange={this.changeSelectDepartment}
                  id="department"
                >
                  <option value="2">Все</option>
                  <option value="0">Кухня</option>
                  <option value="1">Бар</option>
                </select>
              </div>
            </div>
            <div className="listItem">
              {data.map(category => (
                <div className="item" key={category.id}>
                  <img src={category.image} alt={category.name} />
                  <input
                    type="text"
                    className="input"
                    defaultValue={category.name}
                  />
                  <select
                    id="name"
                    className="select"
                    name="name"
                    defaultValue={category.active}
                  >
                    <option value="true">Есть</option>
                    <option value="false">Скрыта</option>
                  </select>
                  <input
                    name="image"
                    type="text"
                    className="input"
                    defaultValue={category.image}
                  />
                  <Department select={category.category_id}/>
                  <input
                    type="button"
                    id={category.id}
                    className="changeBtn"
                    onClick={this.changeTableClick}
                    value="Изменить"
                  />
                  <input
                    type="button"
                    className="deleteBtn"
                    value="Удалить"
                    onClick={event => {
                      deleteData(`/subCategory/${category.id}`);
                      event.target.parentNode.remove();
                    }}
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

export default Categories;
