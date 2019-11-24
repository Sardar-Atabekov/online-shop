import React, { Component } from "react";
import { postData } from "../../requests";

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
    postData("/category/", data);
    event.target.reset();
  }

  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <form className="wrapper">
        <input
          type="text"
          className="addCategory"
          placeholder="Названия категории"
        />
        <input
          type="text"
          className="addCategory"
          placeholder="Ссылка изображении"
        />
        <select className="select" name="active">
          <option value="true">Есть</option>
          <option value="false">Скрыта</option>
        </select>
        <select className="select" name="category_id">
          <option value="0">Кухня</option>
          <option value="1">Бар</option>
        </select>
        <button className="addCategoryBtn">Добавить</button>
      </form>
    );
  }
}

export default addCategory;
