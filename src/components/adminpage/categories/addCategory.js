import React, { Component } from "react";
import { postData } from "../../requests";
import Department from "../blocks/Department";
class addCategory extends Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="addCategory"
          placeholder="Названия категории"
          name="name"
        />
        <input
          type="text"
          className="addCategory"
          name="image"
          placeholder="Ссылка изображении"
        />
        <select className="select" name="active">
          <option value="true">Есть</option>
          <option value="false">Скрыта</option>
        </select>
        <Department />
        <button className="addCategoryBtn">Добавить</button>
      </form>
    );
  }
}

export default addCategory;
