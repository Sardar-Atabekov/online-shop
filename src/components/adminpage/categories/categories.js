import React, { Component } from "react";
import { getData, putData, deleteData } from "../../requests";
import Navigation from "../navigation/navigation";
import Search from "../search/search.js";
import Footer from "../footer/footer.js";
import Category from "./addCategory";

import "./categories.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      data: [],
      dp: []
    };

    this.changeSelectDepartment = this.changeSelectDepartment.bind(this);
  }

  changeCategoryClick(event, id) {
    let data = {
      id,
      active: event.target.parentNode.childNodes[2].value,
      name: event.target.parentNode.childNodes[1].value,
      category_id: event.target.previousSibling.value,
      image: event.target.parentNode.childNodes[3].value
    };

    console.log(data);
    putData(`/subCategory/${data.id}`, data);
  }

  changeSelectDepartment(event) {
    let select = event.target.value,
      arr = this.state.body;
    if (select === "all") {
      this.setState({ data: arr });
    } else {
      arr = arr.filter(department => department.category_id === +select);
      this.setState({
        data: arr
      });
    }
  }
  async componentDidMount() {
    getData("/subCategory/all/").then(body => {
      this.setState({ body });
    });
    getData("/category/all/").then(dp => {
      this.setState({ dp });
    });
  }

  render() {
    let data = this.state.data.length > 0 ? this.state.data : this.state.body;
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="containerAdmin">
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
                  <option value="all">Все</option>
                  {this.state.dp.length > 0 &&
                    this.state.dp.map(department => (
                      <option value={department.id} key={department.id}>
                        {department.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="listItem">
              {data &&
                data.map(category => (
                  <form className="item" key={category.id}>
                    <img src={category.image} alt={category.name} />
                    <input
                      type="text"
                      className="input  imageInput"
                      defaultValue={category.name}
                    />
                    <select
                      className="select active"
                      name="name"
                      defaultValue={category.active}
                    >
                      <option value="true">Есть</option>
                      <option value="false">Скрыта</option>
                    </select>
                    <input
                      name="image"
                      type="text"
                      className="input imageInput"
                      defaultValue={category.image}
                    />
                    {this.state.dp.length > 0 ? (
                      <select
                        className="select departmentSelect"
                        name="category_id"
                        defaultValue={category.category_id}
                      >
                        {this.state.dp.map(department => (
                          <option value={department.id} key={department.id}>
                            {department.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      ""
                    )}
                    <input
                      type="button"
                      className="changeBtn"
                      onClick={event =>
                        this.changeCategoryClick(event, category.id)
                      }
                      value="Изменить"
                    />
                    <input
                      type="button"
                      className="deleteBtn divDelete"
                      value="Удалить"
                      onClick={event => {
                        deleteData(`/subCategory/${category.id}`);
                        event.target.parentNode.remove();
                      }}
                    />
                  </form>
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
